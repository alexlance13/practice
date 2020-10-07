import React from 'react';
import { Wrapper } from './styles';
const Notification: React.FC<PropsType> = ({ text, opacity, className }) => {
  return (
    <Wrapper opacity={opacity} className={className}>
      {text}
    </Wrapper>
  );
};
export default Notification;

type PropsType = {
  text: string;
  opacity: number;
  className: string;
};
