import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReviews } from '../redux/reviewsSlice'; // Adjust the path based on your project structure
import { Card, CardContent, Typography, List, ListItem, ListItemText, CircularProgress, Container } from '@mui/material';

const ReviewDasboard = () => {
  const dispatch = useDispatch();
  const { reviews, status, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchUserReviews());
  }, [dispatch]);

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'failed') {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        My Reviews
      </Typography>
      <List>
        {reviews.map((review) => (
          <Card key={review.comment} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Post: {review.postTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comment: {review.comment}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: {new Date(review.commentDate).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </List>
    </Container>
  );
};
export default ReviewDasboard