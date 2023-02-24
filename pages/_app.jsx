import { Montserrat } from '@next/font/google';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ['latin'] });
library.add(faFacebook, faInstagram, faPinterest);

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
