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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ul>
      {cast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? 'https://image.tmdb.org/t/p/w200' + item.profile_path
                  : defaultImg
              }
              width={200}
              height={300}
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
