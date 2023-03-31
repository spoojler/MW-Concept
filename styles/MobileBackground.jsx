import styled from 'styled-components';

const imageUrl = (url) => `url("${url}")`;

const MobileBackground = styled.div`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  display: ${(props) => props.d};
  background-color: ${(props) => props.color};
  background-image: ${(props) => imageUrl(props.url)};
  background-size: cover;
  background-position: ${(props) => (props.imgPos ? props.imgPos : 'center')};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};

  @media (min-width: 768px) {
    display: none;
  }
`;

export default MobileBackground;
