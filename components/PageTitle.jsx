import Container from "../styles/Container"
import Title from "../styles/Title"

const PageTitle = ({firstLine, secondLine}) => {
    return (
      <Container
        pos="absolute"
        right="25px"
        top="10px"
        style={{ zIndex: '1' }}
      >
        <Title color="white">{firstLine}<br />{secondLine}</Title>
      </Container>
    );
}

export default PageTitle