import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Reusable page metadata aligned with root `title.template` in `layout.tsx`.
 * Use `absoluteTitle` for pages that should not use the template (e.g. home).
 */
export function pageMetadata(input: {
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const title = input.absoluteTitle ? { absolute: input.title } : input.title;

  return {
    title,
    description: input.description,
    openGraph: {
      title: input.absoluteTitle
        ? input.title
        : `${input.title} | ${site.name}`,
      description: input.description,
    },
  };
}
