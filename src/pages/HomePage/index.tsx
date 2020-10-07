import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from 'components/NavBar';
import {
  Pages,
  Wrapper,
  Header,
  TableDiv,
  FormDiv,
  NotificationDiv,
} from './styles';

const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <NavBar />
        <Header>Where you want to go?</Header>
        <Pages>
          <NavLink exact to="/table">
            <Header>Table</Header>
            <TableDiv></TableDiv>
          </NavLink>
          <NavLink exact to="/form">
            <Header>Form</Header>
            <FormDiv></FormDiv>
          </NavLink>
          <NavLink exact to="/notification">
            <Header>Notification</Header>
            <NotificationDiv></NotificationDiv>
          </NavLink>
        </Pages>
      </Wrapper>
    </div>
  );
};

export default HomePage;
