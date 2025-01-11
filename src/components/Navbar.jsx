import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 0 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1 style={{ color: '#fff' }}>ZINGY FUSION</h1>
      <div>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <input type="text" placeholder="Search for products" />
      </div>
    </Nav>
  );
};

export default Navbar;
