import styled from 'styled-components';

const SliderContainer = styled.div`
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
  min-height: ${(props) => props.mh};
`;

export default SliderContainer;
