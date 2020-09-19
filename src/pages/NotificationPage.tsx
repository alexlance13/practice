//@ts-nocheck
import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { notify } from '../containers/NotificationContainer';

const NotificationsPage: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <h4>Reuseable notification component.</h4>
      <ButtonsDiv>
        <Button
          className="waves-effect waves-light btn success"
          onClick={() => notify('This thing was done successfull', 'success')}
        >
          Success
        </Button>
        <Button
          className="waves-effect waves-light btn warning"
          onClick={() =>
            notify('I should warn you that smth may be wrong', 'warning')
          }
        >
          Warning
        </Button>
        <Button
          className="waves-effect waves-light btn error"
          onClick={() => notify('Error. something gone wrong.', 'error')}
        >
          Error
        </Button>
      </ButtonsDiv>
    </Wrapper>
  );
};

export default NotificationsPage;

const Wrapper = styled.div`
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
const ButtonsDiv = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  grid-gap: 50px;
  margin 200px
`;
const Button = styled.button`
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
