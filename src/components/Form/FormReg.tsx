import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, FormikHelpers } from 'formik';
// import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { FormContent, FormTitle, FormText, FormCloseButton, FormForm, FormSignUpButton, FormLabel, FormField } from "./Form.style";

interface Values {
  name: string;
  password: string;
  email: string;
}

interface FormProps {
    closeModal: () => void;
}

export const RegistrationForm: React.FC<FormProps> = ({closeModal}) => {
    return (
      <FormContent>
        <FormCloseButton onClick={closeModal}>Close</FormCloseButton>
            <FormTitle>Registration</FormTitle>
            <FormText>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</FormText>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <FormForm >
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormField id="name" name="name" placeholder="Name" />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormField id="lastName" name="lastName" placeholder="Email" />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormField
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />

          <FormSignUpButton type="submit">Sign up</FormSignUpButton>
        </FormForm>
      </Formik>
    </FormContent>
  );
};



