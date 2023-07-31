import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './TrendList.module.css';

const TrendList = ({ trends }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className={css.trend__list}>
      {trends.map(trend => {
        return (
          <Link
            className={css.trend__link}
            to={`/movies/${trend.id}`}
            key={trend.id}
            state={{ from: location }}
          >
            <li className={css.trend__item}>
              <img
                className={css.trend__poster}
                src={
                  trend.poster_path
                    ? 'https://image.tmdb.org/t/p/w300' + trend.poster_path
                    : defaultImg
                }
                alt="poster"
              />
              <p className={css.trend__name}>{trend.title}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

TrendList.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};

export default TrendList;
