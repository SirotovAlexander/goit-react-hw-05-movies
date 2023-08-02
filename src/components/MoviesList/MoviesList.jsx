import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ value }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className={css.trend__list}>
      {value.map(val => {
        return (
          <Link
            className={css.trend__link}
            to={`/movies/${val.id}`}
            key={val.id}
            state={{ from: location }}
          >
            <li className={css.trend__item}>
              <img
                className={css.trend__poster}
                src={
                  val.poster_path
                    ? 'https://image.tmdb.org/t/p/w300' + val.poster_path
                    : defaultImg
                }
                alt="poster"
              />
              <p className={css.trend__name}>{val.title}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
