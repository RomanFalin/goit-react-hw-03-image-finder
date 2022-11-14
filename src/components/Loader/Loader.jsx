import PropTypes from 'prop-types';
import { Dna } from 'react-loader-spinner';

const Loader = ({ visible }) => {
  return (
    <div className="loader-wrapper">
      <Dna
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        visible={visible}
      />
    </div>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
