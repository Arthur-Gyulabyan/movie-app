import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.less';

function Movies({ data, changeHandler }) {
  const { results, total_results: total } = data;

  return (
    <div className="wrapper">
      {results.map((movie) => {
        return (
          <MovieCard
            url={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            key={movie.id}
          />
        );
      })}
      <Pagination
        hideOnSinglePage
        defaultCurrent={1}
        total={total}
        showSizeChanger={false}
        pageSize={results.length}
        onChange={(page) => {
          changeHandler(page);
        }}
      />
    </div>
  );
}

Movies.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    total_results: PropTypes.number,
  }).isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Movies;
