import styled from 'styled-components';

const Background = styled.div`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  display: ${(props) => props.display};
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  
`;

export default Background;
