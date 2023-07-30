import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchList = ({ query }) => {
  //   console.log(trends);
  return (
    <ul>
      {query.map(item => {
        return (
          <Link to={`/movies/${item.id}`} key={item.id}>
            <li>
              <p>{item.original_title}</p>
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
