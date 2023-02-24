import Link from 'next/link';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  font-size: 3rem;
  font-weight: 300;
  color: white;
  text-decoration: none;
  letter-spacing: 3px;
  opacity: 0.9;
  position: relative;


  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    left: 0;
    bottom: 25px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s linear;
  }

  &:hover&::after {
    transform: scaleX(1);
  }
`;

export default CustomLink;
