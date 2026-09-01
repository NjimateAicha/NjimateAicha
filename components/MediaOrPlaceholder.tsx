'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  // If a real image is declared but the file is missing / fails to load, fall
  // back to the same graceful placeholder instead of a broken-image icon.
  const [errored, setErrored] = useState(false);

  if (src && !errored) {
    if (fill) {
      return <Image src={src} alt={alt} fill className={className} onError={() => setErrored(true)} />;
    }
    return (
      <Image
        src={src}
        alt={alt}
        width={900}
        height={620}
        className={className}
        onError={() => setErrored(true)}
      />
    );
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
