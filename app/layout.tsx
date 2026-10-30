import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Minden Square | A little more room to call home | Houston, TX',
 description: 'Discover Minden Square in Houston’s Kashmere Gardens. Explore apartment homes, community amenities, neighborhood highlights, and leasing options near I-610 and US-59.',
 robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
