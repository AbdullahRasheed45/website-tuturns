import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/find-tutor", "/login", "/signup"],
      },
    ],
    sitemap: "https://www.tuturns.com/sitemap.xml",
    host: "https://www.tuturns.com",
  };
}
