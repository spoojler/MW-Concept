import NavContainer from '../styles/NavContainer';
import CustomLink from '../styles/CustomLink';


const NavBar = () => {

  return (
    <NavContainer
      w="20%"
      h="60%"
      d="flex"
      direction="column"
      justify="flex-start"
      align="flex-start"
    >
      <CustomLink href={'/'}>O mnie</CustomLink>
      <CustomLink href={'/projekty'}>Projekty</CustomLink>
      <CustomLink href={'/kontakt'}>Kontakt</CustomLink>
    </NavContainer>
  );
};

export default NavBar;
