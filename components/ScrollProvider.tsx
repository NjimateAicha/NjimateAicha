'use client';

import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

const ScrollYContext = createContext(0);

export function useScrollY(): number {
  return useContext(ScrollYContext);
}

/**
 * Single passive scroll listener for the whole page, throttled to one
 * requestAnimationFrame per tick. Every component that needs scroll position
 * (navbar shrink, floating dock threshold, …) reads from this shared value
 * instead of registering its own listener.
 */
export default function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const frameRef = useRef<number>();
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      frameRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        tickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <ScrollYContext.Provider value={scrollY}>{children}</ScrollYContext.Provider>;
}
