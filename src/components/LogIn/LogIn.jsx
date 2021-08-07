import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../ProvideAuth/ProvideAuth';
import './LogIn.less';

const LogIn = () => {
  const { isAuthenticated, login } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(2)
          .max(12)
          .matches('^[a-zA-Z]+$', 'only letters')
          .required(),
        password: Yup.string()
          .min(8)
          .max(16)
          .matches(
            '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$',
            'at least 1 uppercase, 1 digit',
          )
          .required(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          login();
          setSubmitting(false);
        }, 400);
      }}>
      <div className="form-wrapper">
        <Form className="form">
          <h2 className="form-header">Login</h2>
          <Field
            name="username"
            type="text"
            className="form-input"
            autoComplete="true"
          />
          <span className="error-message">
            <ErrorMessage name="username" />
          </span>

          <Field
            name="password"
            type="password"
            className="form-input"
            autoComplete="true"
          />
          <span className="error-message">
            <ErrorMessage name="password" />
          </span>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default LogIn;
