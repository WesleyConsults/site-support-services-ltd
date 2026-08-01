import { services } from "@/data/siteContent";

export default function sitemap() {
  const baseUrl = "https://www.sitesupportgh.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
