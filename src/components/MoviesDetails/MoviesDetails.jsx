import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../api/getDataAPI';

const MoviesDetails = () => {
  const [info, setInfo] = useState({});
  const { MovieID } = useParams();

  useEffect(() => {
    async function getDetails() {
      try {
        const data = await getMovieDetails(MovieID);
        setInfo(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [MovieID]);
  console.log(info);

  return <div>...</div>;
};

export default MoviesDetails;
