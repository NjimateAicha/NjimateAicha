'use client';

import Image from 'next/image';
import { OatzyPlaceholder, Studio8Placeholder } from './PlaceholderArt';

const ILLUSTRATED_PLACEHOLDERS: Record<string, (className?: string) => JSX.Element> = {
  'oatzy-foods': (className) => <OatzyPlaceholder className={className} />,
  'studio-8-pilates': (className) => <Studio8Placeholder className={className} />
};

export default function MediaOrPlaceholder({
  src,
  alt,
  label,
  className,
  slug,
  fill
}: {
  src: string | null;
  alt: string;
  label: string;
  className?: string;
  slug?: string;
  fill?: boolean;
}) {
  if (src) {
    if (fill) {
      return <Image src={src} alt={alt} fill className={className} />;
    }
    return <Image src={src} alt={alt} width={900} height={620} className={className} />;
  }

  if (slug && ILLUSTRATED_PLACEHOLDERS[slug]) {
    return ILLUSTRATED_PLACEHOLDERS[slug](className);
  }

  return (
    <div className={`${className ?? ''} placeholder-media`} role="img" aria-label={alt}>
      <span className="placeholder-media__mark">{alt.slice(0, 2).toUpperCase()}</span>
      <span className="placeholder-media__label">{label}</span>
    </div>
  );
}
