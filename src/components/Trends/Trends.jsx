import { useState, useEffect } from 'react';
import { getTrending } from '../../api/getDataAPI';

import MovieList from '../MoviesList/MoviesList';

const Trends = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const data = await getTrending();
        setValue(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return (
    <div>
      <MovieList value={value} />
    </div>
  );
};

export default Trends;
