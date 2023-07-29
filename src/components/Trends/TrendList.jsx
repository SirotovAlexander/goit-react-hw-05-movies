import PropTypes from 'prop-types';

const TrendList = ({ trends }) => {
  //   console.log(trends);
  return (
    <ul>
      {trends.map(trend => {
        return (
          <li key={trend.id}>
            {/* <img
              src={'https://image.tmdb.org/t/p/w300' + trend.poster_path}
              alt="poster"
            /> */}
            <p>{trend.title}</p>
          </li>
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
