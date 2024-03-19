import React from 'react';
import {HaederStyled, ListStyled, NavLinkStyled, FirstlIstyled} from "./Header.styled"

export const Header = () => {
  return (
    <HaederStyled >
      <nav>
        <ListStyled>
        <FirstlIstyled>
            <NavLinkStyled to="/">psychologists<span>.services</span></NavLinkStyled>
          </FirstlIstyled>
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
      </nav>
      <div>
        <button>Log in</button>
        <button>Registration</button>
      </div>
    </HaederStyled>
  );
};
