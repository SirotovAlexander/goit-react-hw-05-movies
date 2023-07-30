import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../api/getDataAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { MovieID } = useParams();

  useEffect(() => {
    if (!MovieID) return;
    async function getReviews() {
      try {
        const data = await getMovieReviews(MovieID);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [MovieID]);

  return (
    <>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
