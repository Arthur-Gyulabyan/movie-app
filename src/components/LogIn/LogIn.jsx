import React, { PureComponent } from 'react';
import { Form, Field, ErrorMessage, withFormik } from 'formik';
import * as yup from 'yup';

class Login extends PureComponent {
  render() {
    return (
      <Form style={{ marginTop: '200px' }}>
        <Field type="text" name="email" placeholder="email" />
        <ErrorMessage name="email" />
        <Field type="text" name="password" placeholder="password" />
        <ErrorMessage name="password" />
        <button type="submit"> Submit</button>
      </Form>
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
