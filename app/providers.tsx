'use client';

import { ReactNode } from 'react';
import SmoothScroll from '@/components/layout/SmoothScroll';

export function Providers({ children }: { children: ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
