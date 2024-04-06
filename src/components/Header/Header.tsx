import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HaederStyled, ListStyled, StyledElem, NavLinkStyled, Logo, Nav, StyledButtonLogIn, StyledButtonReg, LogOutBox, StyledElemIcon } from "./Header.styled";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { RegistrationForm } from "../Form/FormReg";
import { LoginForm } from "../Form/FormLog";
import { RootState } from '../../redux/store';
import { logout } from '../../redux/Auth/authSlice';
import { persistor } from '../../redux/store';
import { getAuth, signOut } from 'firebase/auth';
import { ReactComponent as UserIcon } from '../../assets/icons/icon-user.svg';

export const Header = () => {
    const [isModalRegOpen, setIsModalRegOpen] = useState<boolean>(false);

    const openModalReg = (): void => {
        setIsModalRegOpen(true);
    }
      const closeModalReg = (): void => {
        setIsModalRegOpen(false);
      }
  
      const [isModalLogOpen, setIsModalLogOpen] = useState<boolean>(false);

    const openModalLog = (): void => {
        setIsModalLogOpen(true);
    }
      const closeModalLog = (): void => {
        setIsModalLogOpen(false);
      }
  const dispatch = useDispatch();
  
  const handleLogout = () => {
 dispatch(logout());
  const auth = getAuth();
  signOut(auth);
  persistor.purge().then(() => {
    persistor.flush();
  });
  };
  
  useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsModalRegOpen(false);
                setIsModalLogOpen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('modal-background')) {
                setIsModalRegOpen(false);
                setIsModalLogOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
  
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
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
          
          {isAuthenticated ? (
             <li> 
            <NavLinkStyled to="/favorites">
            Favorite
            </NavLinkStyled>
          </li>) : <></>
         }
        </ListStyled>
      </Nav>
      <div>
        {isAuthenticated ? (
          <LogOutBox>
            <StyledElemIcon><UserIcon/></StyledElemIcon><span>{user?.email?.split('@')[0]}</span>
            <StyledButtonLogIn onClick={handleLogout}>Logout</StyledButtonLogIn>
          </LogOutBox>
        ) : (
          <>
            <StyledButtonLogIn onClick={openModalLog}>Log in</StyledButtonLogIn>
            <StyledButtonReg onClick={openModalReg}>Registration</StyledButtonReg>
          </>
        )}
      </div>
      {isModalRegOpen && <ModalWindow Content={<RegistrationForm closeModal={closeModalReg} />} />}
       {isModalLogOpen && <ModalWindow Content={<LoginForm closeModal={closeModalLog} />} />}
    </HaederStyled>
  );
};
