import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '@emotion/styled';

const StyledLink = style(NavLink)`
    display: inline-block;
  text-decoration: none;
  // text-transform:lowercase;
  padding: 12px;
  font-weight: 700;
  color: #1a2d5e;
  font-size: 22px;

    &.active {
   width: 80px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  margin: auto 0 auto 0;
  background-color: #ff6b08;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  color: white;
  outline: none;
  transition: all 250ms ease-in-ou;
  &:hover {
  background-color: #FF0000;
}
  `;

export default function Navigation() {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
}
