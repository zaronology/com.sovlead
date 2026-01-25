// src/app/sitemap.ts

import { MetadataRoute } from "next";
import { getAllPosts as getAllInsights } from "@/lib/api-insights";
import { getAllPosts as getAllAuthoritySystems } from "@/lib/api-authority-systems";

export const dynamic = "force-static";

const URL = "https://sovlead.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Added "redirect" to the fetch array so the filter works
  const insights = getAllInsights(["slug", "date", "redirect"]);
  const authoritySystems = getAllAuthoritySystems(["slug", "date"]);

  const insightUrls = insights
    .filter((post) => !post.redirect) // Now this works correctly
    .map((post) => ({
      url: `${URL}/insights/${post.slug}`,
      lastModified: new Date(post.date || new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const authoritySystemUrls = authoritySystems.map((post) => ({
    url: `${URL}/authority-systems/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const routes = [
    "",
    "/the-foundry",
    "/insights",
    "/authority-systems",
    "/the-foundry/application",
    "/authority-reset-protocol",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));

  const legalRoutes = [
    "/acceptable-use-policy", 
    "/cookies", 
    "/privacy", 
    "/terms", 
    "/disclaimer", 
    "/ai-integrity"
  ].map((route) => ({
      url: `${URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
  }));

  return [...routes, ...insightUrls, ...authoritySystemUrls, ...legalRoutes];
}