import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

export default function MovieCard({ url, title, releaseDate }) {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <img alt="example" src={`https://image.tmdb.org/t/p/w500/${url}`} />
      }>
      <Meta title={title} description={releaseDate} />
    </Card>
  );
}

MovieCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
