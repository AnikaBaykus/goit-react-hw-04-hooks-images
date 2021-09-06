import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ hits, onClickImage }) {
  // console.log(hits);
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onClickImage={onClickImage}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  onClickImage: PropTypes.func,
};
export default ImageGallery;
