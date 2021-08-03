import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTIwNWNjZDdmZGZjMTUzNTkxYTNhOWEzNzE1ODBlMiIsInN1YiI6IjYxMDdlNGMxOGQyMmZjMDA3NmJkNjUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2bElrr1Ds-OiC0Duu2iiP4CNipF9g1NoOe2MohCTOrQ`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default API;
