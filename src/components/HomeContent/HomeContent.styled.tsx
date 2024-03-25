import styled from "styled-components";

export const HomeWrapper = styled.div`
padding: 100px 0;
display: flex;
align-items: center;
justify-content: space-between;

`
export const HomeTitle = styled.h1`
width: 595px;
margin-bottom: 20px;
font-size: 80px;
font-weight: 600;
`
export const HomeTitleSpan = styled.span`
font-style: italic;
color: rgb(52, 112, 255);
`

export const HomeText = styled.p`
width: 510px;
margin-bottom: 40px;
font-size: 18px;
font-weight: 500;
`

export const StyledButtonStart = styled.button`
padding: 14px 50px;
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


export const IconQuestionWrapper = styled.div`
position: absolute;
top: 192px;
right: 456px;
padding: 16px;
display: flex;
align-items: center;
background-color: #54BE96;
width: 40px;
height: 40px;
border-radius: 10px;
 transform: rotate(-15deg);
`

export const IconUserWrapper = styled.div`
position: absolute;
top: 44px;
left: 456px;
padding: 18px;
display: flex;
align-items: center;
background-color: rgb(251, 199, 94);
width: 59px;
height: 59px;
border-radius: 10px;
 transform: rotate(15deg);
`
export const HomeImgBox = styled.div`
position: relative;
`
