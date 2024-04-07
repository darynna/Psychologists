import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, FormikHelpers } from 'formik';
import { FormContent, FormTitle, FormText, FormCloseButton, FormForm, FormSignUpButton, FormLabel, FormField } from "./Form.styled";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { login } from '../../redux/Auth/authSlice';
import { auth } from "../../firebase/config"

interface Values {
  name: string;
  password: string;
  email: string;
}

interface FormProps {
  closeModal: () => void;
}

export const RegistrationForm: React.FC<FormProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  
  const handleRegistration = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const { email, password } = values;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(login({ uid: user.uid, email: user.email }));

      Notify.success('Registration successful!');
       closeModal();

      setSubmitting(false);
    } catch (error) {
     if (error instanceof Error) {
    
      Notify.failure(error.message);
    } else {
   
      Notify.failure('An unknown error occurred');
    }
      setSubmitting(false);
    }
  };

  return (
    <FormContent>
      <FormCloseButton onClick={closeModal}><CloseIcon/></FormCloseButton>
      <FormTitle>Registration</FormTitle>
      <FormText>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</FormText>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleRegistration}
      >
        {({ values, handleChange }) => (
          <FormForm>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormField 
              id="name" 
              name="name" 
              placeholder="Name" 
              value={values.name} 
              onChange={handleChange}
            />

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField 
              id="email" 
              name="email" 
              placeholder="Email" 
              value={values.email} 
              onChange={handleChange}
            />

            <FormLabel htmlFor="password">Password</FormLabel>
            <FormField
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />

            <FormSignUpButton type="submit">Sign up</FormSignUpButton>
          </FormForm>
        )}
      </Formik>
    </FormContent>
  );
};

