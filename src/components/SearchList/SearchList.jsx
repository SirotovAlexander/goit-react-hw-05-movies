import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from '../Trends/TrendList.module.css';

const SearchList = ({ query }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ul className={css.trend__list}>
      {query.map(item => {
        return (
          <Link
            className={css.trend__link}
            to={`/movies/${item.id}`}
            key={item.id}
            state={{ from: location }}
          >
            <li className={css.trend__item}>
              <img
                className={css.trend__poster}
                src={
                  item.poster_path
                    ? 'https://image.tmdb.org/t/p/w300' + item.poster_path
                    : defaultImg
                }
                alt="poster"
              />
              <p className={css.trend__name}>{item.original_title}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

console.propTypes = {
  query: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
    })
  ),
};

export default SearchList;
