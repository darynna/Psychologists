import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HaederStyled = styled.header`
width: 100%;
padding: 34px 20px;
margin: 0 auto;
max-width: 320px;

@media (min-width: 428px) and (max-width: 767px) {
  max-width: 428px;
}
@media (min-width: 768px) {
  max-width: 1184px;
  display: flex;
  justify-content: space-between;
}
`;


export const ListStyled= styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 36px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
color: #1e90ff;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 18px; 
  font-weight: bold;

  &:hover {
    color: #4682b4; /* Lighter blue color on hover */
    text-shadow: 0 0 5px #fff, 0 0 10px #4682b4; /* Glowing effect on hover */
  }
`;


export const FirstlIstyled= styled.li`
@media (min-width: 768px) {
  margin-right: 40px;
}
@media (min-width: 1280px) {
  margin-right: 100px;
}
`;