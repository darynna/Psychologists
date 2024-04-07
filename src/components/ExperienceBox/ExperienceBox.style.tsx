import styled from "styled-components";

export const Wrapper = styled.div`
position: absolute;
bottom: 66px;
right: 310px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 32px;
background-color: #3470FF;
width: 311px;
height: 118px;
border-radius: 20px;

  @media (max-width: 767px) {
right: 200px;
}

 @media (max-width: 428px) {
display: none
}
`

export const IconWrapper = styled.div`
padding: 12px;
background-color: #FBFBFB;
width: 54px;
height: 54px;
border-radius: 13px;
`
export const SmallText = styled.p`
color: rgba(251, 251, 251, 0.5);
font-size: 14px;
`

export const NumberlText = styled.p`
font-size: 24px;
font-weight: 700;
color: rgb(251, 251, 251);
`