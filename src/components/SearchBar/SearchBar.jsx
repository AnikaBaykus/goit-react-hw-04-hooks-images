import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import s from './SearchBar.module.css';

function SearchBar({ onSearchFormSubmit }) {
  return (
    <header className={s.SearchBar}>
      <SearchForm onSearchFormSubmit={onSearchFormSubmit} />
    </header>
  );
}

SearchBar.protoTypes = {
  onSearchFormSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
