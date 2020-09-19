import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

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

const Pages = styled.div`
  text-align: center;
  margin: 0 auto;
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  grid-gap: 50px;
  padding: 50px;
  & div {
    background-size: cover;
    height: 350px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s linear;
    &:hover {
      box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.5);
    }
  }
`;
const Wrapper = styled.div`
  background: linear-gradient(to bottom, #d1c4e9, white);
  min-height: 100vh;
  font-weight: 600;
  user-select: none;
`;
const Header = styled.span`
  color: #00695c;
  font-size: 26px;
  display: block;
  padding: 30px;
  text-align: center;
`;
const TableDiv = styled.div`
  background: url(https://i.imgur.com/FbKso0v.jpg) no-repeat;
`;
const FormDiv = styled.div`
  background: url(https://i.imgur.com/iIgasaV.jpeg) no-repeat;
`;
const NotificationDiv = styled.div`
  background: url(https://i.imgur.com/FbKso0v.jpg) no-repeat;
`;
