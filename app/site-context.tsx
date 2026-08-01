'use client';

import { createContext, useContext } from 'react';
import { Lang } from './content';

export type Theme = 'light' | 'dark';

export interface SiteContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  openReview: () => void;
}

export const SiteContext = createContext<SiteContextValue | null>(null);

export function useSiteContext(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSiteContext must be used within <SiteChrome>');
  return ctx;
}
