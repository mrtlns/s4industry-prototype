'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

// Используем any для children, чтобы TS заткнулся раз и навсегда
export function Providers({ children }: { children: any }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}