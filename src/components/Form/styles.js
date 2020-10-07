import styled from 'styled-components';

export const Error = styled.span`
  font-weight: 400;
  color: red;
`;

export const Select = styled.select`
  background-color: inherit;
  display: block;
  border-bottom: 1px solid #26a69a;
  margin-bottom: 20px;
`;
export const Wrapper = styled.div`
  padding: 50px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const SubmitDiv = styled.div`
  float: right;
`;

export const TechnoWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
`;
