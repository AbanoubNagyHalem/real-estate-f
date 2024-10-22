import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile, removeProfile } from "../../redux/userSlice";
import {
  Box,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  maxWidth: "900px",
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}));

const Input = styled("input")({
  display: "none",
});

const MyProfile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleRemoveProfile = (_id) => {
    dispatch(removeProfile(_id));
    dispatch(fetchUserProfile());
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;
  if (!user) return <Typography>No user data available.</Typography>;

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        color: (theme) => (theme.palette.mode === "light" ? "#000" : "#fff"),
      }}
    >
      <StyledPaper
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#fff" : "#292929",
        }}
      >
        {/* Account Settings Section */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          My Profile
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            mb: 4,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
              color: (theme) =>
                theme.palette.mode === "light" ? "#000" : "#fff",
            }}
          >
            User Account
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: (theme) =>
                theme.palette.mode === "light" ? "#000" : "#fff",
            }}
          >
            Your current account type is set to user. If you want to remove your
            user account, and return to normal account, you must click the
            button below.
          </Typography>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            sx={{
              backgroundColor: "#21616A",
              color: "#ffffff",
              "&:hover": { backgroundColor: "#56AEB1" },
            }}
            onClick={handleRemoveProfile}
          >
            Remove User Account
          </Button>
        </Box>

        {/* Avatar Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Avatar
                alt={user.username || "User"}
                src={user.avatar || "/default-avatar.png"}
                sx={{ width: 100, height: 100, margin: "auto" }}
              />
              {/* <Typography variant="caption" display="block" gutterBottom>
                JPEG 100 x 100
              </Typography> */}
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Upload a new avatar
              </Typography>
              <label htmlFor="avatar-upload">
                <Input accept="image/*" id="avatar-upload" type="file" />
                <Button variant="outlined" component="span" sx={{}}>
                  Choose File
                </Button>
              </label>
              <Typography
                variant="caption"
                display="block"
                sx={{
                  mt: 1,
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#000" : "#fff",
                }}
              >
                No file chosen
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <TextField
            label="User Name"
            defaultValue={user.username || "No Name Provided"}
            fullWidth
            margin="normal"
            sx={{ flex: 1 }}
            // InputLabelProps={{ style: { color: "#21616A" } }}
            // InputProps={{ style: { color: "#21616A" } }}
          />
          <TextField
            label="Email"
            defaultValue={user.email || "No Email Provided"}
            fullWidth
            disabled
            margin="normal"
            sx={{ flex: 1 }}
            // InputLabelProps={{ style: { color: "#21616A" } }}
            // InputProps={{ style: { color: "#21616A" } }}
          />
          <TextField
            label="Phone Number"
            defaultValue={user.phoneNumber || "No Phone Provided"}
            fullWidth
            margin="normal"
            sx={{ flex: 1 }}
            // InputLabelProps={{ style: { color: "#21616A" } }}
            // InputProps={{ style: { color: "#21616A" } }}
          />
        </Box>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#21616A",
              color: "#ffffff",
              "&:hover": { backgroundColor: "#56AEB1" },
              px: 4,
              py: 1.5,
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Update Profile
          </Button>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default MyProfile;
