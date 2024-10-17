import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/reviewSlice';

const Reviews = () => {
  const dispatch = useDispatch();
  const {reviews, status, error } = useSelector((state) => state.reviews)

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  // Handle loading state
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{review.postTitle}</h3>
            <p>{review.comment}</p>
            <small>{new Date(review.commentDate).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;
