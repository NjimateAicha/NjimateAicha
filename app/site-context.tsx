'use client';

import { createContext, useContext } from 'react';
import { Lang } from './content';

export type Theme = 'light' | 'dark';

export interface SiteContextValue {
  /** Language of the current route (fr on `/…`, en on `/en/…`). */
  lang: Lang;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  openReview: () => void;
  /** Absolute-in-app path of the same page in the other language. */
  otherLocaleHref: string;
}

export const SiteContext = createContext<SiteContextValue | null>(null);

export function useSiteContext(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSiteContext must be used within <SiteChrome>');
  return ctx;
}
