import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '700', '900'],
});
export const metadata: Metadata = {
  title: 'Record',
  description: 'ЖРТ-Тест',
  icons: {
    icon: '/favicon.svg', // Можно явно указать иконку в метаданных
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
