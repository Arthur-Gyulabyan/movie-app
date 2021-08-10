import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { saveData, getData } from '../../helpers/localStorage';

export const AuthContext = React.createContext({});

export default function ProvideAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(getData('isAuth')),
  );
  const [currentUser, setCurrentUser] = useState(getData('currentUser'));

  const login = useCallback((values) => {
    setCurrentUser(values);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    saveData('isAuth', isAuthenticated);
    saveData('currentUser', currentUser);
  }, [isAuthenticated, currentUser]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

ProvideAuth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
