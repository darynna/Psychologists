import React from 'react';
import {HaederStyled, ListStyled, StyledElem, NavLinkStyled, Logo, Nav, StyledButtonLogIn, StyledButtonReg} from "./Header.styled"

export const Header = () => {
  return (
    <HaederStyled >
      <Nav>
        <Logo className="logo-text" to="/"><StyledElem>psychologists.</StyledElem>services</Logo>
        <ListStyled>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/psychologists">
            Psychologist
            </NavLinkStyled>
          </li>
          <li> 
            <NavLinkStyled to="/favorites">
            Favorite
            </NavLinkStyled>
          </li>
        </ListStyled>
      </Nav>
      <div>
        <StyledButtonLogIn>Log in</StyledButtonLogIn>
        <StyledButtonReg>Registration</StyledButtonReg>
      </div>
    </HaederStyled>
  );
};
