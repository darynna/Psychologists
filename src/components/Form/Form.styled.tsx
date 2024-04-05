import styled from "styled-components";
import {Form , Field,} from 'formik';

export const FormContent = styled.div`
padding: 64px;
position: relative;
`
export const FormCloseButton = styled.button`
position: absolute;
top: 20px;
right: 20px;
`

export const FormTitle = styled.h2`
margin-bottom: 20px;
font-weight: 500;
font-size:40px;
`


export const FormText = styled.p`
color: rgba(25, 26, 21, 0.5);
font-size: 16px;
margin-bottom: 40px;
`

export const FormForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 18px;

`

export const FormSignUpButton = styled.button`
padding: 16px 189px;
margin-top: 22px;
font-size: 16px;
font-weight: 500;
background-color: rgb(52, 112, 255);
color: rgb(251, 251, 251);
border: none;
border-radius: 30px;

&:hover {
    background-color: #255EE8;
}
`
export const FormLabel = styled.label`
display: none;

`

export const FormField = styled(Field)`
padding: 16px 18px;
color: rgb(25, 26, 21);
font-size: 16px;
border: 1px solid rgba(25, 26, 21, 0.1);
border-radius: 12px;

`
