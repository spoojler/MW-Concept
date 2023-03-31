import { useState } from 'react';
import { xMarkButton, menuButton } from '../assets/svgIcons';
import NavContainer from '../styles/NavContainer';
import CustomLink from '../styles/CustomLink';
import MenuButtonStyle from '../styles/MenuButtonStyle';

const MenuButton = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleButton = () => {
    setActiveButton(!activeButton);
  };

  const dottedButton = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill={'white'} d={menuButton} />
    </svg>
  );

  const closeButton = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill={'#421212'} d={xMarkButton} />
    </svg>
  );

  const nav = (
    <NavContainer
      direction="column"
      color="black"
      d="flex"
      style={{
        position: 'fixed',
        top: '50px',
        left: '10px',
        padding: '3rem',
        scale: '0.8',
      }}
    >
      <CustomLink href={'/'}>Home</CustomLink>
      <CustomLink href={'/o-mnie'}>O mnie</CustomLink>
      <CustomLink href={'/projekty'}>Projekty</CustomLink>
      <CustomLink href={'/kontakt'}>Kontakt</CustomLink>
    </NavContainer>
  );

  return (
    <MenuButtonStyle onClick={handleButton} style={{ zIndex: '100' }}>
      {activeButton ? closeButton : dottedButton}
      {activeButton ? nav : null}
    </MenuButtonStyle>
  );
};

export default MenuButton;
