import PropTypes from 'prop-types';
import { Card } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './MovieCard.less';
import noImage from '../../assets/images/no-image.jpg';
import { IMAGE_URL } from '../../constants/constants';

const { Meta } = Card;

const isFavorite = (id, favorites) => {
  return favorites.some((el) => el.id === id);
};

export default function MovieCard({
  url,
  title,
  releaseDate,
  favorites,
  id,
  handleLike,
  handleUnlike,
}) {
  return (
    <Card
      hoverable
      cover={<img alt="example" src={url ? `${IMAGE_URL}${url}` : noImage} />}
      actions={
        isFavorite(id, favorites)
          ? [<HeartFilled key="unlike" onClick={() => handleUnlike(id)} />]
          : [<HeartOutlined key="like" onClick={() => handleLike(id)} />]
      }>
      <Meta title={title} description={releaseDate} />
    </Card>
  );
}

MovieCard.defaultProps = {
  url: '',
  title: 'Unknown',
  releaseDate: 'Unknown',
};

MovieCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  id: PropTypes.number.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleUnlike: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};
