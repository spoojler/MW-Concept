import MenuButton from '../components/MenuButton';
import Background from '../styles/Background';
import Container from '../styles/Container';
import CustomLink from '../styles/CustomLink';
import Description from '../styles/Description';
import Header1 from '../styles/Header1';
import Icon from '../styles/IconLinkStyle';
import { smallLogoStyle } from '../styles/InlineStyles';
import MobileBackground from '../styles/MobileBackground';
import MobileContainer from '../styles/MobileContainer';
import Title from '../styles/Title';

const Kontakt = () => {
  return (
    <>
      <Background w="100vw" h="100vh" color="black">
        <Container
          d="flex"
          justify="center"
          align="center"
          direction="column"
          mt="100px"
        >
          <Title color="white">Kontakt</Title>
          <a
            href="mailto:melania2468@gmail.com"
            style={{
              color: 'white',
              fontSize: '3rem',
              fontWeight: '200',
              textDecoration: 'none',
            }}
          >
            melania2468@gmail.com
          </a>
          <Description
            style={{
              textAlign: 'center',
              position: 'absolute',
              bottom: '100px',
            }}
            color="white"
          >
            Z powodu wielu niechcianych telefonów, będziemy komunikować się
            telefonicznie po uprzednim kontakcie mailowym.
          </Description>
        </Container>
      </Background>
      <MenuButton />

      <MobileContainer
        w="100vw"
        h="100vh"
        color="black"
        d="flex"
        direction="column"
        align="center"
      >
        <MobileBackground
          w="115px"
          h="75px"
          url="/logo-mw-concept.png"
          m="1rem"
          style={smallLogoStyle}
        />

        <Description mt='4rem'>
          <a
            href="mailto:melania2468@gmail.com"
            style={{
              color: 'white',
              fontWeight: '200',
              textDecoration: 'none',
            }}
          >
            melania2468@gmail.com
          </a>
        </Description>

        <Description mt='4rem'
          style={{
            textAlign: 'center'
          }}
          color="white"
        >
          Z powodu wielu niechcianych telefonów, będziemy komunikować się
          telefonicznie po uprzednim kontakcie mailowym.
        </Description>
      </MobileContainer>
    </>
  );
};

export default Kontakt;
