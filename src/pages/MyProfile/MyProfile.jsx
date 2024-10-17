
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "../../redux/userSlice";
import { Box, Grid, Paper, Avatar, Typography, Divider } from "@mui/material";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  // Add a check for null user
  if (!user) return <Typography>No user data available.</Typography>;

  return (
    <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: '16px', maxWidth: '900px', width: '100%', backgroundColor: '#fff' }}>
        <Grid container spacing={3}>
          {/* Profile Picture */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
            <Avatar
              alt={user.username || "User"}  // Handle missing username
              src={user.avatar || '/default-avatar.png'}
              sx={{ width: 200, height: 200, borderRadius: '50%', border: '4px solid #e0e0e0' }}
            />
          </Grid>

          {/* User Information */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {user.username || "No Name Provided"}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {user.email || "No Email Provided"}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {user.phonenumber || "No Phone Provided"}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Additional Information */}
            <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.about || 'No information provided.'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MyProfile;
