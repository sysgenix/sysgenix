"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlinePaperAirplane,
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineDevicePhoneMobile,
  HiOutlineBuildingOffice2,
  HiOutlineRectangleStack,
} from "react-icons/hi2";

const services = [
  "Web Solutions",
  "Digital Marketing",
  "Cloud Solutions",
  "IT Infrastructure Solutions",
  "Software Solutions",
  "Security Solutions",
  "AI Solutions",
  "Design & Print Solutions",
  "Other / Not Sure Yet",
];

const expectations = [
  "We acknowledge your message within 24 business hours.",
  "A relevant specialist reviews your requirement and reaches out.",
  "We schedule a free 30-minute discovery call at your convenience.",
];

const socials = [
  { src: "/images/footer/facebook.svg", alt: "Facebook", href: "#" },
  { src: "/images/footer/twitter.svg", alt: "Twitter / X", href: "#" },
  { src: "/images/footer/instagram.svg", alt: "Instagram", href: "#" },
  { src: "/images/footer/linkedin.svg", alt: "LinkedIn", href: "#" },
  { src: "/images/footer/youtube.svg", alt: "YouTube", href: "#" },
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactFormSection() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (submitError) setSubmitError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again."
        );
        return;
      }

      setSubmitted(true);
      setForm(initialState);
      setTimeout(() => setSubmitted(false), 8000);
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] text-[#1e3a52] placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:border-[#fc1660] focus:ring-4 focus:ring-[#fc1660]/10";

  const labelBase =
    "block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2";

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Get in Touch"
            title="Let's Build Something"
            highlightText="Extraordinary Together"
            description="Tell us about your business, your challenge, or the platform you want to build. Our team will respond with a clear next step — no pressure, no obligation."
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT — FORM */}
            <div className="lg:col-span-7">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#fc1660]/10 flex items-center justify-center text-[#fc1660]">
                    <HiOutlineChatBubbleLeftRight size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a52]">
                    Send Us a Message
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-8">
                  Fill in the details below — we&apos;ll respond within one
                  business day.
                </p>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelBase}>
                        Full Name <span className="text-[#fc1660]">*</span>
                      </label>
                      <div className="relative">
                        <HiOutlineUser
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={onChange}
                          placeholder="Jane Doe"
                          className={`${inputBase} pl-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Email Address <span className="text-[#fc1660]">*</span>
                      </label>
                      <div className="relative">
                        <HiOutlineEnvelope
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={onChange}
                          placeholder="jane@company.com"
                          className={`${inputBase} pl-11`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        Phone
                      </label>
                      <div className="relative">
                        <HiOutlineDevicePhoneMobile
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={onChange}
                          placeholder="+1 (000) 000-0000"
                          className={`${inputBase} pl-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className={labelBase}>
                        Company
                      </label>
                      <div className="relative">
                        <HiOutlineBuildingOffice2
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={onChange}
                          placeholder="Your organization"
                          className={`${inputBase} pl-11`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={labelBase}>
                      Service of Interest
                    </label>
                    <div className="relative">
                      <HiOutlineRectangleStack
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={onChange}
                        className={`${inputBase} pl-11 pr-10 appearance-none cursor-pointer`}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelBase}>
                      How Can We Help?{" "}
                      <span className="text-[#fc1660]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Briefly describe your project, goals, or challenge…"
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="group inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-[#fc1660] text-white text-[15px] font-semibold tracking-wide transition-all duration-300 hover:bg-[#1e3a52] hover:-translate-y-0.5 shadow-lg shadow-[#fc1660]/20 hover:shadow-xl hover:shadow-[#1e3a52]/20 disabled:opacity-60 disabled:pointer-events-none disabled:hover:translate-y-0"
                    >
                      <span>{submitting ? "Sending…" : "Send Message"}</span>
                      <HiOutlinePaperAirplane
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 -rotate-45"
                      />
                    </button>

                    <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-md">
                      By submitting, you agree to be contacted by Sysgenix
                      regarding your inquiry. We respect your privacy.
                    </p>
                  </div>

                  {submitError && (
                    <div
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm"
                      role="alert"
                    >
                      {submitError}
                    </div>
                  )}

                  {submitted && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <HiOutlineCheckCircle
                        size={22}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <div className="text-sm leading-relaxed">
                        <strong className="block mb-0.5">
                          Thanks — we got your message.
                        </strong>
                        A Sysgenix specialist will reach out shortly at the
                        email address you provided.
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* RIGHT — DARK SIDEBAR */}
            <div className="lg:col-span-5">
              <div className="relative h-full rounded-3xl overflow-hidden bg-[#0f172a] p-8 md:p-10 text-white">
                {/* Glow effects */}
                <div className="absolute -top-32 -right-24 w-[360px] h-[360px] bg-[#fc1660]/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-24 w-[360px] h-[360px] bg-[#1e3a52]/60 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <span className="inline-flex self-start items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-[#fc1660] bg-[#fc1660]/10 border border-[#fc1660]/30 px-3 py-1.5 rounded-full mb-6">
                    Why Sysgenix
                  </span>

                  <h3 className="text-3xl md:text-[34px] font-bold leading-tight mb-4">
                    Talk to a Team That{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc1660] to-[#ff6b6b]">
                      Builds for the Long Run
                    </span>
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-[15px] mb-8">
                    For 22+ years, we&apos;ve helped enterprises modernize,
                    secure, and scale their technology — and we&apos;d love to
                    hear what you&apos;re building next.
                  </p>

                  {/* Stat strip */}
                  <div className="grid grid-cols-3 gap-2 mb-8 bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="text-center border-r border-white/10">
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] bg-clip-text text-transparent">
                        22+
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                        Years
                      </div>
                    </div>
                    <div className="text-center border-r border-white/10">
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] bg-clip-text text-transparent">
                        500+
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] bg-clip-text text-transparent">
                        40+
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                        Industries
                      </div>
                    </div>
                  </div>

                  {/* What happens next */}
                  <div className="mb-8">
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                      What Happens Next
                    </div>
                    <ul className="space-y-3">
                      {expectations.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[14px] text-gray-200 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social */}
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                      Follow Sysgenix
                    </div>
                    <div className="flex items-center gap-3">
                      {socials.map((s) => (
                        <a
                          key={s.alt}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.alt}
                          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#fc1660] hover:border-[#fc1660] hover:-translate-y-0.5"
                        >
                          <Image
                            src={s.src}
                            alt={s.alt}
                            width={18}
                            height={18}
                            className="opacity-80 group-hover:opacity-100"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
