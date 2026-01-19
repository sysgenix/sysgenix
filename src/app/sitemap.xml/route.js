export const runtime = "nodejs";

import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const baseUrl = "https://www.sysgenix.com"; // Your deployed site URL
    const appDir = path.join(process.cwd(), "src", "app"); // Adjust if your app dir is different
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

    // ✅ 1. Get static pages
    const staticRoutes = getAllPages(appDir);
    const staticUrls = staticRoutes.map((route) => ({
      loc: `${baseUrl}${route}`,
      lastmod: today,
      priority: route === "/" ? "1.0" : "0.7",
    }));

    // ✅ 2. Get blog posts from WordPress API
    const blogApiUrl =
      "https://blog.sysgenix.com/wp-json/wp/v2/posts?per_page=100";
    const blogPosts = await fetch(blogApiUrl)
      .then((res) => res.json())
      .catch((err) => {
        console.error("❌ Failed to fetch blog posts:", err);
        return [];
      });

    const blogUrls = Array.isArray(blogPosts)
      ? blogPosts
          .filter((post) => post.slug)
          .map((post) => ({
            loc: `${baseUrl}/blogs/${post.slug}`,
            lastmod: today,
            priority: "0.6",
          }))
      : [];

    // ✅ 3. Combine static + blog URLs
    const allUrls = [...staticUrls, ...blogUrls];

    // ✅ 4. Build sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ loc, lastmod, priority }) => `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("❌ Sitemap generation error:", error);
    return new Response("Sitemap generation failed", { status: 500 });
  }
}

// ✅ Recursive file scanner for pages
function getAllPages(dir, routePrefix = "") {
  if (!fs.existsSync(dir)) {
    console.warn("⚠️ Directory does not exist:", dir);
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes = routes.concat(
        getAllPages(fullPath, `${routePrefix}/${entry.name}`)
      );
    } else if (
      ["page.js", "page.jsx", "page.ts", "page.tsx"].includes(entry.name)
    ) {
      const route = routePrefix === "" ? "/" : routePrefix;
      if (!route.includes("[")) {
        routes.push(route);
      }
    }
  }

  return routes;
}
