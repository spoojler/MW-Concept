import Button from '../components/TriggerButton';
import IconLink from '../components/IconLink';
import NavBar from '../components/NavBox';
import PageTitle from '../components/PageTitle';
import SideBar from '../components/SideBar';
import Background from '../styles/Background';
import Container from '../styles/Container';
import GlobalStyle from '../styles/GlobalStyle';
import { verticalSpanLine } from '../styles/InlineStyles';

const HomePage = () => {
  const homePageDescription =
    "Zajmuję się kompleksowym projektowaniem wnętrz. Począwszy od zarysowania moodboard'u po nadzór nad pracami. Do wykonania prostej wizualizacji wystarczą mi Twoje wymiary. Nie czekaj, chyba nie chcesz później żałować?";

  return (
    <>
      <GlobalStyle />
      <Background h="100vh" w="100vw" url="/background.jpg">
        <Container pos="absolute" d="flex" top="-60px">
          <Button textOnFalse={'ENG'} textOnTrue={'PL'} isActive={true} />
          <span style={verticalSpanLine}></span>
          <Button textOnFalse={'LIGHT'} textOnTrue={'DARK'} isActive={true} />
        </Container>
        <NavBar />
        <PageTitle firstLine={'PROJEKT TWOJEGO'} secondLine={`WNĘTRZA`} />
        <SideBar description={homePageDescription} />
        <Container
          pos="absolute"
          bottom="10px"
          d="flex"
          w="100%"
          justify="center"
          gap="40px"
        >
          <IconLink name={'fa-brands fa-facebook'} url="https://facebook.com" />
          <IconLink
            name={'fa-brands fa-instagram'}
            url="https://instagram.com"
          />
          <IconLink
            name={'fa-brands fa-pinterest'}
            url="https://facebook.com"
          />
        </Container>
      </Background>
    </>
  );
};

export default HomePage;
