import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../api/getDataAPI';

import SearchList from 'components/SearchList/SearchList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = event => {
    event.preventDefault();
    const { query } = event.currentTarget;
    setSearchParams({ query: query.value });

    query.value = '';
  };

  useEffect(() => {
    if (!searchParams.get('query')) return;
    async function getQuery() {
      try {
        const data = await getMovieBySearch(searchParams.get('query'));
        setQuery(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getQuery();
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" autoComplete="off" />
        <button type="submit">Search</button>
      </form>
      {query.length > 0 && <SearchList query={query} />}
    </div>
  );
};

export default MoviesPage;
