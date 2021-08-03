import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';

function Movies({ movies }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: '15px',
        columnGap: '15px',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      {movies.map((movie) => {
        return (
          <MovieCard
            url={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
          />
        );
      })}
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Movies;
