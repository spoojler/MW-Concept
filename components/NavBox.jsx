import NavContainer from '../styles/NavContainer';
import CustomLink from '../styles/CustomLink';

const NavBox = () => {
  return (
    <NavContainer
      w="30%"
      h="65%"
      d="flex"
      direction="column"
      justify="flex-start"
      align="flex-start"
    >
      <CustomLink href={'/o-mnie'}>O mnie</CustomLink>
      <CustomLink href={'/projekty'}>Projekty</CustomLink>
      <CustomLink href={'/kontakt'}>Kontakt</CustomLink>
    </NavContainer>
  );
};

export default NavBox;
