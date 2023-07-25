import {type Metadata} from 'next';
import {Inter} from 'next/font/google';
import clsx from 'clsx';
import './style.css';

const font = Inter({subsets: ['latin']}); // eslint-disable-line new-cap

const title = 'AudioParam Visualization';
const description =
  "Visualization of how Web Audio API's AudioParam value changes over time";
const ogImage = '/og.png';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: title,
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={clsx(font.className, 'bg-black text-white')}>
        {children}
      </body>
    </html>
  );
}
