import { Montserrat } from '@next/font/google';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import GlobalStyle from '../styles/GlobalStyle';

config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ['latin', 'latin-ext'] });
library.add(faFacebook, faInstagram, faPinterest);

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
