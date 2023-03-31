import IconLink from '../components/IconLink';
import PageTitle from '../components/PageTitle';
import SideBar from '../components/SideBar';
import Background from '../styles/Background';
import Container from '../styles/Container';
import {
  smallLogoStyle,
} from '../styles/InlineStyles';
import { instagramPath, pinterestPath } from '../assets/svgIcons';
import NavBox from '../components/NavBox';
import MobileContainer from '../styles/MobileContainer';
import Title from '../styles/Title';
import MobileBackground from '../styles/MobileBackground';
import MenuButton from '../components/MenuButton';
import Description from '../styles/Description';

const HomePage = () => {
  const homePageDescription =
    'Zajmuję się kompleksowym projektowaniem wnętrz. Do wykonania prostej wizualizacji wystarczą mi Twoje wymiary i kilka inspiracji. Nie rób wszystkiego sam, chyba nie chcesz później żałować?';

  return (
    <>
      <Background h="100vh" w="100vw" url="/background.jpg">
        {/* <Container pos="absolute" d="flex" align="flex-start" top="0px">
          <TriggerButton changedText={'ENG'} defaultText={'PL'} />
          <span style={verticalSpanLine}></span>
          <TriggerButton changedText={'LIGHT'} defaultText={'DARK'} />
        </Container> */}
        <NavBox />
        <PageTitle firstLine={'PROJEKT TWOJEGO'} secondLine={`WNĘTRZA`} />
        <SideBar description={homePageDescription} />
        <Container
          pos="absolute"
          bottom="20px"
          d="flex"
          w="100%"
          justify="center"
          gap="50px"
        >
          {/* <IconLink
          svgPath={facebookPath}
          color="white"
          url="https://facebook.com"
        /> */}
          <IconLink
            svgPath={instagramPath}
            color="white"
            url="https://www.instagram.com/mw__concept/"
          />
          <IconLink
            svgPath={pinterestPath}
            color="white"
            url="https://pl.pinterest.com/MW_concept/_created"
          />
        </Container>
      </Background>

      <MobileContainer
        w={'100vw'}
        color={'black'}
        d={'flex'}
        direction={'column'}
        align={'center'}
      >
        <MenuButton />
        <MobileBackground
          w="115px"
          h="75px"
          url="/logo-mw-concept.png"
          m="1rem"
          style={smallLogoStyle}
        />
        <Title
          color="white"
          style={{ paddingRight: '10px', position: 'relative' }}
        >
          PROJEKT TWOJEGO
          <br />
          WNĘTRZA
        </Title>
        <Description opacity="0.6" color="white" align="right" mt="-40px">
          {homePageDescription}
        </Description>
        <MobileBackground
          w="100vw"
          h="100vw"
          url="/background.jpg"
          imgPos="left"
        ></MobileBackground>
        <MobileContainer
          d="flex"
          h="100%"
          justify="center"
          gap="50px"
          align="center"
          mt="1rem"
          mb='1rem'
        >
          <IconLink
            svgPath={instagramPath}
            color="white"
            url="https://www.instagram.com/mw__concept/"
          />
          <IconLink
            svgPath={pinterestPath}
            color="white"
            url="https://pl.pinterest.com/MW_concept/_created"
          />
        </MobileContainer>
      </MobileContainer>
    </>
  );
};

export default HomePage;
