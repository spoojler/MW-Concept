import styled from 'styled-components';

const MobileContainer = styled.div`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  position: ${(props) => props.pos};
  display: ${(props) => props.d};
  background-color: ${(props) => props.color};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.wrap};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  min-height: ${(props) => props.mh};

  @media (min-width: 768px) {
    display: none;
  }
`;

export default MobileContainer;
