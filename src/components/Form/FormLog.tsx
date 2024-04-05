import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormContent, FormTitle, FormText, FormCloseButton, FormForm, FormSignUpButton, FormLabel, FormField } from "./Form.styled";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/authSlice';
import {auth} from "../../firebase/config"


interface Values {
  password: string;
  email: string;
}

interface FormProps {
  closeModal: () => void;
}

export const LoginForm: React.FC<FormProps> = ({ closeModal }) => {
    const dispatch = useDispatch();

  const handleLogin = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const { email, password } = values;

      // Sign in user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user?.uid;

      if (uid) {
      // Dispatch the login action with the correct payload
      dispatch(login({ uid, email }));
    } else {
      throw new Error('Failed to retrieve UID');
    }
      // Login successful
      Notify.success('Login successful!');

      // Close the modal window
      closeModal();

      setSubmitting(false);
    } catch (error: any) {
      // Handle Firebase Authentication errors
      alert(error.message);
      setSubmitting(false);
    }
  };

  return (
    <FormContent>
      <FormCloseButton onClick={closeModal}>Close</FormCloseButton>
      <FormTitle>Log In</FormTitle>
      <FormText>Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.</FormText>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleLogin}
      >
        {({ values, handleChange }) => (
          <FormForm>
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

            <FormSignUpButton type="submit">Log In</FormSignUpButton>
          </FormForm>
        )}
      </Formik>
    </FormContent>
  );
};
