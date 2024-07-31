import { MetadataRoute } from "next";
import { configuration } from "@/configuration";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: `${configuration.site.baseUrl}/sitemap.xml`,
  };
}
