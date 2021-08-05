import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../ProvideAuth/ProvideAuth';

const PrivateRoute = ({ children, ...otherProps }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
