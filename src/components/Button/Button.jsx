import s from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ onLoadMore }) {
  return (
    <button type="button" className={s.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
