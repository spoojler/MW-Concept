import Background from '../styles/Background';
import { sideLogoStyle } from '../styles/InlineStyles';
import SideContainer from '../styles/SideContainer';
import PageDescription from './PageDescription';

const SideBar = ({description}) => {
  return (
    <SideContainer>
        <PageDescription text={description} />
      <Background
        w="230px"
        h="150px"
        url="/logo-mw-concept.png"
        bottom="40px"
        right="50px"
        style={sideLogoStyle}
      />
    </SideContainer>
  );
};

export default SideBar;
