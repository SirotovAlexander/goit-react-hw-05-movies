import { useState, useEffect } from 'react';
import { getTrending } from '../../api/getDataAPI';
import TrendList from './TrendList';

const Trends = () => {
  const [trends, setTrends] = useState(null);

  const getTrends = async () => {
    try {
      const data = await getTrending();
      setTrends(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrends();
  }, []);

  return <TrendList trends={trends} />;
};

export default Trends;
