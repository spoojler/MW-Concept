import styled from 'styled-components';

const Icon = styled.span`
  transform: translateY(0);
  transition: all 0.2s linear;
  opacity: 0.7;
  &:hover {
    transform: translateY(-10px);
    opacity: 1;
  }

  a {
    font-size: 3.5rem;
    color: #ffffffdd;
  }
`;
export default Icon;
