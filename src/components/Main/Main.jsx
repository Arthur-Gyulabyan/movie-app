import { useState, useEffect, useCallback } from 'react';
import NavBar from '../NavBar/NavBar';
import Movies from '../Movies/Movies';
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
    search ? requestBySearch() : requestPopular();
  }, [requestBySearch, requestPopular, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <NavBar search={search} handleSearch={handleSearch} />
      <Movies movies={data} />
    </>
  );
}
