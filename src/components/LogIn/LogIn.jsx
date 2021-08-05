import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Field, ErrorMessage, withFormik } from 'formik';
import * as yup from 'yup';
import './LogIn.less';
import { AuthContext } from '../ProvideAuth/ProvideAuth';

function Login() {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-wrapper">
      <Form className="form">
        <h2 className="form-header">Log In</h2>
        <div className="input-field-wrapper">
          <Field
            type="text"
            name="username"
            placeholder="username"
            className="form-input"
            value={username}
            onChange={changeUsername}
          />
          <ErrorMessage name="email" />
        </div>

        <div className="input-field-wrapper">
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={changePassword}
          />
          <ErrorMessage name="password" />
        </div>
        <button type="submit" className="submit-btn" onClick={login}>
          {' '}
          Submit
        </button>
      </Form>
    </div>
  );
}

const LoginValidation = yup.object().shape({
  username: yup
    .string()
    .min(2)
    .max(12)
    .matches('^[a-zA-Z]+$', 'only letters')
    .required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(
      '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$',
      'at least 1 uppercase, 1 digit',
    )
    .required(),
});

export default withFormik({
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: LoginValidation,
})(Login);
