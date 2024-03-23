import React from 'react';
import {HaederStyled, ListStyled, StyledElem, NavLinkStyled, FirstlIstyled} from "./Header.styled"

export const Header = () => {
  return (
    <HaederStyled >
      <nav>
        <ListStyled>
        <FirstlIstyled>
            <NavLinkStyled className="logo-text" to="/"><StyledElem>psychologists.</StyledElem>services</NavLinkStyled>
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
