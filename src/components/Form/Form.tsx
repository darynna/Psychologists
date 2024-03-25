import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
// import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

interface Values {
  name: string;
  password: string;
  email: string;
}

export const RegistrationForm: React.FC = () => {
    return (
    <div>
            <h1>Registration</h1>
            <p>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
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
        <Form >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="John" />

          <label htmlFor="email">Email</label>
          <Field id="lastName" name="lastName" placeholder="doe@gmail.com" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="******"
            type="password"
          />

          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </div>
  );
};



