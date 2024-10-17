import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchReviews } from '../../redux/reviewSlice';
import { useEffect } from 'react';

const Reviews = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  return (
    <div>Reviews</div>
  )
}
export default Reviews