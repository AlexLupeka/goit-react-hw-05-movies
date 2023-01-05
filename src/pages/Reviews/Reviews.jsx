import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Api/Api';
import {
  ReviewsList,
  ReviewsInput,
  ReviewsTitle,
  ReviewsText,
} from './Reviews.styled.jsx';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews.length ? (
    <ReviewsList>
      {reviews.map(review => (
        <ReviewsInput key={review.id}>
          <ReviewsTitle>{review.author}</ReviewsTitle>
          <ReviewsText>{review.content}</ReviewsText>
        </ReviewsInput>
      ))}
    </ReviewsList>
  ) : (
    <ReviewsText>There are no reviews yet.</ReviewsText>
  );
}
