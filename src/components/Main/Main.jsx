import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Movies from '../Movies/Movies';
import LogIn from '../LogIn/LogIn';
import API from '../../helpers/axios';

export default function Main() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const requestPopular = useCallback(() => {
    API.get('/movie/popular?api_key=d5205ccd7fdfc153591a3a9a371580e2').then(
      (response) => {
        setData(response.data.results);
      },
    );
  }, []);

  const requestBySearch = useCallback(() => {
    API.get(
      `/search/movie?api_key=d5205ccd7fdfc153591a3a9a371580e2&query=${search}`,
    ).then((response) => {
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
      <Router>
        <NavBar search={search} handleSearch={handleSearch} />
        <Switch>
          <Route exact path="/">
            <Movies movies={data} />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
