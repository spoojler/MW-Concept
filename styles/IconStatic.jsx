import styled from 'styled-components';

const IconStatic = styled.div`
  width: 50px;
  height: 50px;
  transform: translateY(0);
  transition: all 0.2s linear;
  opacity: 0.7;
  &:hover {
    transform: translateY(-10px);
    opacity: 1;
  }
`;
export default IconStatic;
