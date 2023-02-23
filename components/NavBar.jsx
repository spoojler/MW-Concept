import NavContainer from '../styles/NavContainer';
import { linkStyle } from '../styles/InlineStyles';
import CustomLink from '../styles/CustomLink';


const NavBar = () => {

  return (
    <NavContainer
      w="100%"
      h="90px"
      color="#000000f1"
      d="flex"
      justify="space-evenly"
      align="center"
    >
      <CustomLink href={'/'}>HOME</CustomLink>
      <CustomLink href={'/projekty'}>PROJEKTY</CustomLink>
      <CustomLink href={'/kontakt'}>KONTAKT</CustomLink>
    </NavContainer>
  );
};

export default NavBar;
