import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../api/getDataAPI';
import css from './MoviesPage.module.css';
// import SearchList from 'components/SearchList/SearchList';
import MovieList from '../components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [value, setValue] = useState('');
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
        setValue(data.results);
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
      {value.length > 0 && <MovieList value={value} />}
    </div>
  );
};

export default MoviesPage;
