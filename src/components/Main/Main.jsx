import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import API from '../../helpers/axios';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(
      '/movie/popular?api_key=d5205ccd7fdfc153591a3a9a371580e2&page=250',
    ).then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <NavBar />
    </>
  );
}
