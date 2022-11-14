import PropTypes from 'prop-types';
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const GalleryList = ({ foundGallery, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      {foundGallery.map(item => {
        return (
          <GalleryItem
            key={item.id}
            id={item.id}
            src={item.webformatURL}
            alt={item.tags}
            toggleOnImage={toggleModal}
          />
        );
      })}
    </ul>
  );
};

GalleryList.propTypes = {
  searchGallery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
};

export default GalleryList;
