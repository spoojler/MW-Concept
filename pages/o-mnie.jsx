import MenuButton from '../components/MenuButton';
import PageTitle from '../components/PageTitle';
import Background from '../styles/Background';
import Description from '../styles/Description';
import { smallLogoStyle } from '../styles/InlineStyles';
import MobileBackground from '../styles/MobileBackground';
import MobileContainer from '../styles/MobileContainer';

const Omnie = () => {
  return (
    <>
      <Background
        w="100%"
        h="100%"
        color="black"
        top="0"
        style={{ zIndex: '-1' }}
      >
        <PageTitle firstLine={'O MNIE'} />
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <Description color="white" align="center" mt="180px">
            Mam na imię Monika.
            <br />
            Projektowaniem wnętrz zajmuję się od 2019 roku. Po ukończeniu
            studiów na kierunku technologii drewna, rozpoczęłam pracę jako
            projektant i sprzedawca w salonie łazienek. Wysiłek włożony w naukę
            oprogramowania i wrodzony zmysł architektury zaowocował przejściem
            do pracowni projektowej. Obecnie świadczę usługi dla firm i
            bezpośrednio dla osób prywatnych.
          </Description>
        </div>
      </Background>
      <MenuButton />

      <MobileContainer
        w={'100vw'}
        h="100vh"
        color={'black'}
        d={'flex'}
        direction={'column'}
        align={'center'}
      >
        <MobileBackground
          w="115px"
          h="75px"
          url="/logo-mw-concept.png"
          m="1rem"
          style={smallLogoStyle}
        />
        <Description color="white" align="center" mt="0">
          Mam na imię Monika.
          <br />
          Projektowaniem wnętrz zajmuję się od 2019 roku. Po ukończeniu studiów
          na kierunku technologii drewna, rozpoczęłam pracę jako projektant i
          sprzedawca w salonie łazienek. Wysiłek włożony w naukę oprogramowania
          i wrodzony zmysł architektury zaowocował przejściem do pracowni
          projektowej. Obecnie świadczę usługi dla firm i bezpośrednio dla osób
          prywatnych.
        </Description>
      </MobileContainer>
    </>
  );
};

export default Omnie;
