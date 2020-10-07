import styled from 'styled-components';

export const Wrapper = styled.div`
  color: black;
  padding: 16px;
  position: absolute;
  top: 80px;
  right: 16px;
  z-index: 999;
  transition: opacity 0.5s linear;
  opacity: ${(props: StyledPropsType) => props.opacity};
  &.warning {
    background: yellow;
  }
  &.success {
    background: green;
  }
  &.error {
    background: red;
  }
`;

type StyledPropsType = {
  opacity: number;
  className: string;
};
