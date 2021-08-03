import PropTypes from 'prop-types';
import { Card } from 'antd';
import noImage from '../../assets/images/no-image.jpg';

const { Meta } = Card;

export default function MovieCard({ url, title, releaseDate }) {
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={
        <img
          alt="example"
          src={url ? `https://image.tmdb.org/t/p/w500/${url}` : noImage}
        />
      }>
      <Meta title={title} description={releaseDate} />
    </Card>
  );
}

MovieCard.defaultProps = {
  url: '',
};

MovieCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
