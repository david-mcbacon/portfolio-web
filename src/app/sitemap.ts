import { MetadataRoute } from "next";
import { configuration } from "@/configuration";

export default function sitemap(): MetadataRoute.Sitemap {
  let routes = [""].map((route) => ({
    url: `${configuration.site.baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
