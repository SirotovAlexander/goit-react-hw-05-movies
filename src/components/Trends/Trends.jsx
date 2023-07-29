import { useState, useEffect } from 'react';
import { getTrending } from '../../api/getDataAPI';
import TrendList from './TrendList';

const Trends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const data = await getTrending();
        setTrends(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return <TrendList trends={trends} />;
};

export default Trends;
