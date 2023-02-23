import { Cormorant } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const cormorant = Cormorant({ weight: ['300', '400'], subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={cormorant.className}>
      <Component {...pageProps} />
    </main>
  );
}
