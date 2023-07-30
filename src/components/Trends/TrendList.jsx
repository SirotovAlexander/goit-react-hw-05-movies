import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const TrendList = ({ trends }) => {
  const location = useLocation();
  //   console.log(trends);
  return (
    <ul>
      {trends.map(trend => {
        return (
          <Link
            to={`/movies/${trend.id}`}
            key={trend.id}
            state={{ from: location }}
          >
            <li>
              {/* <img
              src={'https://image.tmdb.org/t/p/w300' + trend.poster_path}
              alt="poster"
            /> */}
              <p>{trend.title}</p>
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
