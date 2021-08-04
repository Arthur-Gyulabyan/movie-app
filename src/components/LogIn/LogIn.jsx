import React, { PureComponent } from 'react';
import { Form, Field, ErrorMessage, withFormik } from 'formik';
import * as yup from 'yup';
import './LogIn.less';

class Login extends PureComponent {
  render() {
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
            />
            <ErrorMessage name="email" />
          </div>

          <div className="input-field-wrapper">
            <Field
              type="text"
              name="password"
              placeholder="password"
              className="form-input"
            />
            <ErrorMessage name="password" />
          </div>
          <button type="submit"> Submit</button>
        </Form>
      </div>
    );
  }
}

const LoginWrapper = Login;

const LoginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
    .required(),
});

export default withFormik({
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: LoginValidation,
})(LoginWrapper);
