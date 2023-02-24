import styled from 'styled-components';

const imageUrl = (url) => `url("${url}")`;

const Background = styled.div`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  display: ${(props) => props.d};
  background-image: ${(props) => imageUrl(props.url)};
  background-size: cover;
  background-position: center;
  position: fixed;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
`;

export default Background;
