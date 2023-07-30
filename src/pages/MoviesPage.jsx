import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../api/getDataAPI';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = event => {
    event.preventDefault();
    const { query } = event.currentTarget;
    console.dir(query.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" autoComplete="off" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MoviesPage;
