import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchFavorites, removeFavorite } from '../../redux/favoriteSlice';
import { Grid, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';

const FavoriteDashboard = () => {
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleRemoveFavorite = (postId) => {
    dispatch(removeFavorite(postId)); // Dispatch removeFavorite action with postId
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {favorites.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post._id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="body2">{post.desc}</Typography>
              <Typography variant="h6" color="textSecondary">
                {`$${post.price}`}
              </Typography>
              <Button variant="outlined" color="secondary" onClick={() => handleRemoveFavorite(post._id)} >
                Remove from Favorites
              </Button>  
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriteDashboard