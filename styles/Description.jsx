import styled from 'styled-components';

const Description = styled.h2`
  color: ${(props) => props.color};
  font-size: 1.4rem;
  font-weight: 400;
  text-align: right;
  opacity: ${(props) => props.opacity};
  padding: 1.5rem;
  word-break: break-word;
  margin-top: ${(props) => props.mt};
`;

export default Description;
