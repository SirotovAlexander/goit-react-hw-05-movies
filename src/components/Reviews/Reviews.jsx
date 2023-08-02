import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../api/getDataAPI';
import css from './Reviews.module.css';
import Loader from 'components/Loader/Loade';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { MovieID } = useParams();

  useEffect(() => {
    if (!MovieID) return;
    async function getReviews() {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(MovieID);
        setReviews(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [MovieID]);

  return (
    <div className={css.reviews__wrapper}>
      {isLoading && <Loader />}
      {error && <p>Oops ... Somesing went wrong...</p>}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      <ul className={css.revlist__wrapper}>
        {reviews.map(review => {
          return (
            <li className={css.revlist__item} key={review.id}>
              <p className={css.revlist__author}>{review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
