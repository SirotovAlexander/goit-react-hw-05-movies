import { useState, useEffect } from 'react';
import { getTrending } from '../../api/getDataAPI';
import Loader from 'components/Loader/Loade';

import MovieList from '../MoviesList/MoviesList';

const Trends = () => {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getTrends() {
      try {
        const data = await getTrending();
        setValue(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTrends();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops ... Somesing went wrong...</p>}
      {value.length > 0 && <MovieList value={value} />}
    </div>
  );
};

export default Trends;
