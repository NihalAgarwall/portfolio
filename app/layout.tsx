import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Cursor from '@/components/layout/Cursor';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Scene from '@/components/canvas/Scene';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Nihal Agrawal - Full Stack Developer',
  description: 'Portfolio of Nihal Agrawal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <LoadingScreen />
        <Scene />
        <Cursor />
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
