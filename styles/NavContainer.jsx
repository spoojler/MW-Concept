import styled from 'styled-components';

const NavContainer = styled.div`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  display: ${(props) => props.d};
  background-color: ${(props) => props.color};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  box-shadow: 5px 5px 5px #000000aa;
`;

export default NavContainer;
