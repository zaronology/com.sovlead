// /lib/seo.js
import fav from "@/assets/images/favicons/favicon.png";
const BASE_URL = "https://sovlead.com";

const DEFAULTS = {
  siteName: "Sovereign Leadership",
  titleDefault: "Strategic advisory for technical executives and leaders",
  description:
    "For technical executives navigating risk, timelines, and decisions. Cut chaos, protect your team, and keep authority intact as demands accelerate.",
  ogImage: "/SL-logo-horizontial-w.png",
  locale: "en_US",
};

function isObj(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

function deepMerge(base, override) {
  if (!override) return base;

  const out = { ...base };
  for (const key of Object.keys(override)) {
    const b = base?.[key];
    const o = override[key];

    // arrays should replace, not merge
    if (Array.isArray(o)) {
      out[key] = o;
      continue;
    }

    if (isObj(b) && isObj(o)) {
      out[key] = deepMerge(b, o);
      continue;
    }

    out[key] = o;
  }
  return out;
}

/**
 * buildMetadata(overrides)
 * - overrides.title: string (page title)
 * - overrides.description: string
 * - overrides.canonicalPath: "/authority-reset"
 * - overrides.ogImage: "/og/authority-reset.png"
 * - overrides.openGraph/twitter/alternates: optional fine-grained overrides
 */
export function buildMetadata(overrides = {}) {
  const canonicalPath = overrides.canonicalPath || "/";
  const pageUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = overrides.ogImage || DEFAULTS.ogImage;

  // Title strategy:
  // - layout sets template (recommended)
  // - pages set just `title: "Authority Reset Protocol"`
  const base = {
    metadataBase: new URL(BASE_URL),

    title: {
      default: DEFAULTS.titleDefault,
      template: `%s | ${DEFAULTS.siteName}`,
    },
    description: DEFAULTS.description,
    icons: {
      icon: fav.src,
    },
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: DEFAULTS.titleDefault,
      description: DEFAULTS.description,
      url: pageUrl,
      siteName: DEFAULTS.siteName,
      locale: DEFAULTS.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1000,
          height: 271,
          alt: DEFAULTS.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULTS.titleDefault,
      description: DEFAULTS.description,
      images: [ogImage],
    },
  };

  // If page supplies a string title, use it for OG/Twitter too
  const o = { ...overrides };
  if (typeof o.title === "string") {
    o.openGraph = { ...(o.openGraph || {}), title: o.title };
    o.twitter = { ...(o.twitter || {}), title: o.title };
  }

  // If page supplies description, use it for OG/Twitter too
  if (typeof o.description === "string") {
    o.openGraph = { ...(o.openGraph || {}), description: o.description };
    o.twitter = { ...(o.twitter || {}), description: o.description };
  }

  // Remove our helper-only keys so they don't leak into metadata
  delete o.canonicalPath;
  delete o.ogImage;

  return deepMerge(base, o);
}

export async function buildMetadataAsync(getOverrides) {
  const overrides = await getOverrides();
  return buildMetadata(overrides || {});
}
