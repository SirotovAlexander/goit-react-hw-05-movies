import { useState, useEffect } from 'react';
import { getTrending } from '../../api/getDataAPI';
import Loader from 'components/Loader/Loade';

import MovieList from '../MoviesList/MoviesList';

const Trends = () => {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getTrends() {
      try {
        const data = await getTrending();
        setValue(data.results);
      } catch (error) {
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
      <MovieList value={value} />
    </div>
  );
};

export default Trends;
