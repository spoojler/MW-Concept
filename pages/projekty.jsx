import MenuButton from '../components/MenuButton';
import PageTitle from '../components/PageTitle';
import SideBar from '../components/SideBar';
import SingleProject from '../components/SingleProject';
import Slider from '../components/Slider';
import { projects } from '../projectsSources';
import Background from '../styles/Background';
import Container from '../styles/Container';
import Description from '../styles/Description';
import { smallLogoStyle } from '../styles/InlineStyles';
import MobileBackground from '../styles/MobileBackground';
import MobileContainer from '../styles/MobileContainer';

const Projects = () => {
  const pageDescription =
    "Projekty wykonywane są na podstawie dostarczonych przez Ciebie wymiarów lub z wcześniejszym moim wymiarowaniem. Oferuję wykonanie moodboard'u, układu funkcjonalnego, wizualizacji projektu oraz dokumentacji technicznej.";

  const firstProjectTitle = 'Łazienka w odcieniach beżu i miedzi.';
  const secondProjectTitle = 'Dziecięcy pokój cyrkowy.';
  const thirdProjectTitle = 'Łazienka z powiewem bryzy śródziemnomorskiej.';

  return (
    <>
      <Background
        w="100%"
        h="100%"
        color="black"
        top="0"
        style={{ zIndex: '-1' }}
      >
        {' '}
        <PageTitle firstLine={'PROJEKTY'} />
        <SideBar description={pageDescription} />
      </Background>

      <Container w="70%" d="flex" direction="column">
        <SingleProject
          title={firstProjectTitle}
          projectImagesArray={projects.project1}
        />
        <SingleProject
          title={secondProjectTitle}
          projectImagesArray={projects.project2}
        />
        <SingleProject
          title={thirdProjectTitle}
          projectImagesArray={projects.project3}
        />
      </Container>
      <MenuButton />

      <MobileContainer
        w="100%"
        h="100%"
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
        <Description opacity="0.6" color="white" align="right">
          {pageDescription}
        </Description>
        <MobileContainer
          w="100%"
          h="100vh"
          d="flex"
          direction="column"
          align="center"
          color="black"
          style={{ color: 'white' }}
        >
          <Slider projectArray={projects.project1} />
          <h4 style={{ marginBottom: '5rem' }}>{firstProjectTitle}</h4>
          <Slider projectArray={projects.project2} />
          <h4>{secondProjectTitle}</h4>
          <Slider projectArray={projects.project3} />
          <h4>{thirdProjectTitle}</h4>
        </MobileContainer>
      </MobileContainer>
    </>
  );
};

export default Projects;
