import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <Button
      onClick={onLoadMore}
      variant="contained"
      className="Button"
      sx={{
        display: 'flex',
        margin: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      LoadMore
    </Button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
