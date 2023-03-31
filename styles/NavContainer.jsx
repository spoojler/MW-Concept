import styled from 'styled-components';

const NavContainer = styled.div`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  display: ${(props) => props.d};
  background-color: ${(props) => props.color};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  box-shadow: -10px 10px 8px #000000aa;
  padding: 1rem 0rem 2rem 4rem;
  line-height: 7rem;
  border: 4px solid #421212;
  border-radius: 3px;
  position: relative;
  top: 150px;
  left: 100px;
  min-width: 250px;
  min-height: 300px;
`;

export default NavContainer;
