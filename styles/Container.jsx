import styled from 'styled-components';

const Container = styled.div`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  display: ${(props) => props.d};
  background-color: ${(props) => props.color};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export default Container;
