import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import {
  SearchHeader,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchLabel,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.warn('Enter your search query, please.');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name..."
          value={query}
          onChange={handleChange}
        />
        <SearchButton type="submit">
          <SearchLabel>Search</SearchLabel>
          <FcSearch style={{ width: 30, height: 30 }} />
        </SearchButton>
        <SearchLabel></SearchLabel>
      </SearchForm>
    </SearchHeader>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
