import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../api/getDataAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { MovieID } = useParams();

  useEffect(() => {
    if (!MovieID) return;
    async function getCast() {
      try {
        const data = await getMovieCast(MovieID);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [MovieID]);

  return (
    <ul>
      {cast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={'https://image.tmdb.org/t/p/w200' + item.profile_path}
              alt="actor poster"
            />
            <span>{item.name}</span>
            <span>{item.character}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
