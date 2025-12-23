'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function Providers({ children }: { children: any }) {
  const pathname = usePathname();
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      options={{ lerp: 0.1, duration: 1.5 }}
    >
      {children}
    </ReactLenis>
  );
}