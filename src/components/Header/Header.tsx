import React, { useState } from 'react';
import { HaederStyled, ListStyled, StyledElem, NavLinkStyled, Logo, Nav, StyledButtonLogIn, StyledButtonReg } from "./Header.styled";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { RegistrationForm } from "../Form/FormReg";

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = (): void => {
        setIsModalOpen(true);
    }
      const closeModal = (): void => {
        setIsModalOpen(false);
    }
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
        <StyledButtonReg onClick={openModal}>Registration</StyledButtonReg>
      </div>
       {isModalOpen && <ModalWindow Content={<RegistrationForm closeModal={closeModal} />} />}
    </HaederStyled>
  );
};
