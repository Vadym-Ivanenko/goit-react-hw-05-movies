import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId, 'reviews')
      .then(data => {
        setReviews(data.results);
        setQuantity(data.total_results);
      })
      .catch(console.log);
  }, [movieId]);

  if (quantity === 0) {
    return <p>Sorry, we don`t have any reviews for this movie.</p>;
  }
  if (quantity > 0) {
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
