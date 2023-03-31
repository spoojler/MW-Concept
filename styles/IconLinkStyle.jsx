import styled from 'styled-components';

const Icon = styled.a`
  width: 60px;
  height: 60px;
  transform: translateY(0);
  transition: all 0.2s linear;
  opacity: 0.7;
  &:hover {
    transform: translateY(-10px);
    opacity: 1;
  }
`;
export default Icon;
