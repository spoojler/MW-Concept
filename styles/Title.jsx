import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 300;
  color: ${(props) => props.color};
  text-align: end;
  letter-spacing: 3px;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    height: 5rem;
    width: 5px;
    background-color: #421212;
    transition: transform 0.25s linear;
    transform-origin: top;
  }

  &:hover::before {
    transform: scaleY(2);
  }
`;

export default Title;
