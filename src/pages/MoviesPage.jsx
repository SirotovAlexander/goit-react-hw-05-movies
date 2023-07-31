import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../api/getDataAPI';
import css from './MoviesPage.module.css';
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
      <div className={css.search__bar}>
        <form onSubmit={onSubmit} className={css.search__form}>
          <input
            className={css.search__input}
            type="text"
            name="query"
            autoComplete="off"
          />
          <button className={css.search__btn} type="submit">
            Search
          </button>
        </form>
      </div>
      {query.length > 0 && <SearchList query={query} />}
    </div>
  );
};

export default MoviesPage;
