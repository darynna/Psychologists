import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HaederStyled = styled.header`
width: 100%;
padding: 24px 20px;
margin: 0 auto;
max-width: 320px;
border-bottom: 1px solid rgba(25, 26, 21, 0.1);

@media (min-width: 428px) and (max-width: 767px) {
  max-width: 428px;
}
@media (min-width: 768px) {
  max-width: 1184px;
  display: flex;
  justify-content: space-between;
}
`;

export const Nav = styled.nav`
@media (min-width: 768px){
display: flex;
align-items: center;
gap: 32px;
}

@media (min-width: 1140px){
  gap:130px;
}

`

export const ListStyled= styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 36px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 0.3s;
  font-size: 16px; 

  // &:hover {
  //   color: #4682b4; /* Lighter blue color on hover */
  //   text-shadow: 0 0 5px #fff, 0 0 10px #4682b4; /* Glowing effect on hover */
  // }
`;


export const Logo= styled(NavLink)`
// @media (min-width: 768px) {
//   margin-right: 40px;
// }
// @media (min-width: 1280px) {
//   margin-right: 100px;
// }

  font-size: 20px;
font-weight: 700
`;


export const StyledElem = styled.span`

color: #3470FF;
`;

export const StyledElemIcon = styled.span`
width:40px;
height: 40px;
padding: 8px;
background-color:#3470FF;
border-radius: 10px
`;

export const StyledButtonLogIn = styled.button`
padding: 14px 39px;
margin-right: 8px;
font-family: Inter, sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(25, 26, 21);
border: 1px solid rgba(25, 26, 21, 0.2);
border-radius: 30px;
background-color: transparent;

&:hover {
  color: rgb(251, 251, 251);
    background-color: #255EE8;
}
`;

export const StyledButtonReg = styled.button`
padding: 14px 39px;
font-family: Inter, sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(251, 251, 251);
border: none;
border-radius: 30px;
background-color: rgb(52, 112, 255);

&:hover {
    background-color: #255EE8;
}
`;


export const LogOutBox = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;