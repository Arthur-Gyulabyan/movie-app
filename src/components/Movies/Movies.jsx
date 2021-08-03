import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.less';

function Movies({ movies }) {
  return (
    <div className="wrapper">
      {movies.map((movie) => {
        return (
          <MovieCard
            url={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            key={movie.id}
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
