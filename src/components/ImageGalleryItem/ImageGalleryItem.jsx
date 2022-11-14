import PropTypes from 'prop-types';

const GalleryItem = ({ id, src, alt, toggleOnImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        id={id}
        src={src}
        alt={alt}
        onClick={toggleOnImage}
      />
    </li>
  );
};

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleOnImage: PropTypes.func.isRequired,
};

export default GalleryItem;
