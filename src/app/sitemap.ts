import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  let routes = [""].map((route) => ({
    url: `https://davidslaninka.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
