import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProvideAuth from '../ProvideAuth/ProvideAuth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NavBar from '../NavBar/NavBar';
import Movies from '../Movies/Movies';
import LogIn from '../LogIn/LogIn';
import API from '../../helpers/axios';
import { POPULAR_URL, SEARCH_URL } from '../../constants/constants';

export default function Main() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const requestPopular = useCallback(() => {
    API.get(`${POPULAR_URL}`).then((response) => {
      setData(response.data.results);
    });
  }, []);

  const requestBySearch = useCallback(() => {
    API.get(`${SEARCH_URL}&query=${search}`).then((response) => {
      setData(response.data.results);
    });
  }, [search]);

  useEffect(() => {
    requestPopular();
  }, [requestPopular]);

  useEffect(() => {
    const delayId = setTimeout(() => {
      search ? requestBySearch() : requestPopular();
    }, 300);

    return () => clearTimeout(delayId);
  }, [requestBySearch, requestPopular, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <ProvideAuth>
        <Router>
          <NavBar search={search} handleSearch={handleSearch} />
          <Switch>
            <ProtectedRoute exact path="/">
              <Movies movies={data} />
            </ProtectedRoute>
            <Route path="/login">
              <LogIn />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </>
  );
}
