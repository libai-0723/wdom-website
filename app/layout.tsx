import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '渥康 WDOM · 每一天，自然好营养',
  description: '探索渥康 WDOM 产品系列：全脂与脱脂牛乳粉，以及筹备中的乳清蛋白粉、乳铁蛋白和牛初乳粉。每一天，自然好营养。',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
