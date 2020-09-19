import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Wrapper className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Logo
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/table">Table</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li>
            <NavLink to="/notification">Notification</NavLink>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
};

export default NavBar;

const Wrapper = styled.div`
  padding: 0 15px;
  user-select: none;
  background: linear-gradient(to left, #d8b5ff, #1eae98);
  background-color: #083d77;
  font-weight: 700;
`;
