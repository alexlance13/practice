import React from 'react';
import styled from 'styled-components';

const Notification: React.FC<PropsType> = ({ text, opacity, className }) => {
  return (
    <Wrapper opacity={opacity} className={className}>
      {text}
    </Wrapper>
  );
};
export default Notification;

const Wrapper = styled.div`
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

type PropsType = {
  text: string;
  opacity: number;
  className: string;
};
type StyledPropsType = {
  opacity: number;
  className: string;
};
