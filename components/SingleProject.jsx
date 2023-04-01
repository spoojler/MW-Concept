import Container from '../styles/Container';
import Slider from './Slider';

const SingleProject = ({ projectImagesArray, title }) => {
  return (
    <Container
      w="100%"
      h="100vh"
      pos="static"
      d="flex"
      direction="column"
      align="center"
      mt="50px"
      style={{ color: 'white' }}
    >
      <Slider projectArray={projectImagesArray} />
      <div>
        <h4>{title}</h4>
      </div>
    </Container>
  );
};

export default SingleProject;
