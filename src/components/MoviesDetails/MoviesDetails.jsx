import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../api/getDataAPI';

const MoviesDetails = () => {
  const [info, setInfo] = useState({});
  const [genres, setGenres] = useState([]);

  const { MovieID } = useParams();

  const location = useLocation();

  useEffect(() => {
    async function getDetails() {
      try {
        const data = await getMovieDetails(MovieID);
        setInfo(data);
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [MovieID]);

  return (
    <div>
      <div>
        <Link to={location.state?.from ?? '/'}>
          <button type="button">Go back</button>
        </Link>
        <img
          src={'https://image.tmdb.org/t/p/w300' + info.poster_path}
          alt=""
        />
        <h2>
          {info.original_title} ({info.release_date})
        </h2>
        <p>User score: {info.vote_average}</p>
        <h3>Overview</h3>
        <p>{info.overview}</p>
        <h4>Genres</h4>
        {genres.map(gener => (
          <span key={gener.id}>{gener.name}</span>
        ))}
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
