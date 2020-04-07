import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSubList = styled.ul`
  display: none;
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: sans-serif;
  padding: 7px;
  width: 140px;
`;
const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  width: 140px;
  list-style: none;
  font-family: sans-serif;
  &:hover ${StyledSubList} {
    display: block;
  }
`;

const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  padding: 8px 16px;
  color: rgb(58, 57, 57);
  text-decoration: none;
  &:hover {
    color: grey;
  }
  &.${activeClassName} {
    color: grey;
  }
`;

const StyledLi = styled.li`
  display: block;
  margin-right: 10px;
  padding: 4px 0;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: #212121;
  width: 100%;
`;

const Nav = () => (
  <StyledList>
    <StyledLi>
      <StyledNavLink exact to="/">
        Forecast
      </StyledNavLink>
    </StyledLi>
    <StyledLi>
      <StyledNavLink to="/about">About</StyledNavLink>
    </StyledLi>
    <StyledLi>
      <StyledNavLink to="/useful_links">Useful Links</StyledNavLink>
    </StyledLi>
  </StyledList>
);

export default Nav;
