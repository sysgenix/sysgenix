import { Resend } from "resend";

export const runtime = "nodejs";

const CONTACT_EMAIL = "info@sysgenix.ca";
/** Internal contact form only — Resend’s onboarding sender (no custom domain required). */
const DEFAULT_FROM = "Sysgenix <onboarding@resend.dev>";

const LIMITS = {
  name: 200,
  email: 254,
  phone: 50,
  company: 200,
  service: 120,
  message: 8000,
};

function escapeHtml(s) {
  if (s == null || s === "") return "";
  return String(s).replace(/[&<>"']/g, (ch) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[ch] ?? ch;
  });
}

function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  if (email.length > LIMITS.email) return false;
  // pragmatic RFC-like check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function trimField(value, max) {
  if (value == null) return "";
  const t = String(value).trim();
  return t.length > max ? t.slice(0, max) : t;
}

function buildEmailHtml(body) {
  const rows = [
    ["Full name", body.name],
    ["Email", body.email],
    ["Phone", body.phone || "—"],
    ["Company", body.company || "—"],
    ["Service of interest", body.service || "—"],
    ["Message", body.message],
  ];

  const rowHtml = rows
    .map(
      ([label, val]) => `
      <tr>
        <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;color:#1e3a52;width:180px;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:10px 12px;border:1px solid #e5e7eb;color:#334155;white-space:pre-wrap;">${escapeHtml(val)}</td>
      </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
  <head><meta charset="utf-8" /></head>
  <body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#334155;">
    <p style="margin:0 0 16px;font-size:15px;">New message from the <strong>Sysgenix website</strong> contact form.</p>
    <table style="border-collapse:collapse;width:100%;max-width:640px;">${rowHtml}</table>
    <p style="margin:16px 0 0;font-size:12px;color:#64748b;">Reply directly to this email to reach the sender (${escapeHtml(body.email)}).</p>
  </body>
</html>`;
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("contact/api: RESEND_API_KEY is not set");
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  let json;
  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = trimField(json.name, LIMITS.name);
  const email = trimField(json.email, LIMITS.email);
  const phone = trimField(json.phone, LIMITS.phone);
  const company = trimField(json.company, LIMITS.company);
  const service = trimField(json.service, LIMITS.service);
  const message = trimField(json.message, LIMITS.message);

  if (!name) {
    return Response.json({ error: "Name is required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!message) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  /** Optional override; default is Resend onboarding (not client-facing). */
  const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;

  const subject = `Website contact: ${name}`;

  const { data, error } = await resend.emails.send({
    from,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject,
    html: buildEmailHtml({ name, email, phone, company, service, message }),
    text: [
      "New website contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Company: ${company || "—"}`,
      `Service: ${service || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true, id: data?.id ?? null });
}
