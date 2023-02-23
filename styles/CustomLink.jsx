import Link from 'next/link';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  font-size: 2rem;
  font-weight: 400;
  color: white;
  text-decoration: none;
  letter-spacing: 3px;
  opacity: 0.9;

  &:hover {
    font-size: 2.1rem;
  }
`;

export default CustomLink;
