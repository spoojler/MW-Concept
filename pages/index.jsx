import NavBar from '../components/NavBar';
import Background from '../styles/Background';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../styles/HeaderStyle';


const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Background
        h="100vh"
        w="100vw"
      >
        <NavBar />
      </Background>
    </>
  );
};

export default HomePage;
