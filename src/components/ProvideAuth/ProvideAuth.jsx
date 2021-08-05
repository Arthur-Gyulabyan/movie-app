import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export default function ProvideAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

ProvideAuth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
