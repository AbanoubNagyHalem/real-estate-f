import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites, removeFavorite } from "../../redux/favoriteSlice";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

const MyFavourite = () => {
  const dispatch = useDispatch();
  const { states, loading, error } = useSelector((state) => state.favorites);

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
      <Typography variant="h3">My Fav</Typography>

      {states && states.length > 0 ? (
        states.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
                <Typography variant="h6" color="textSecondary">
                  {`$${item.price}`}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemoveFavorite(item._id)}
                >
                  Remove from Favorites
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography>No favorites found.</Typography>
      )}
    </Grid>
  );
};

export default MyFavourite;
