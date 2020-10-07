import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './styles';

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
