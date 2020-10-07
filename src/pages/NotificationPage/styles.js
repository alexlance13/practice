import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, #f8bbd0, white);
  min-height: 100vh;
  font-weight: 600;
  color: white;
  & h4 {
    text-align: center;
    margin: 50px;
    user-select: none;
  }
`;
export const ButtonsDiv = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  grid-gap: 50px;
  margin 200px
`;
export const Button = styled.button`
  color: black;
  font-weight: 500;
  &.warning {
    background-color: yellow;
  }
  &.success {
    background-color: green;
  }
  &.error {
    background-color: red;
  }
`;
