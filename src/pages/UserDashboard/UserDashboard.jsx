import {
  Toolbar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useNavigate } from "react-router-dom";

const UserDashboard = ({ children }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/UserDashboard" },
    { text: "My Properties", icon: <AddIcon />, path: "/My-Properties" },
    { text: "My Favorites", icon: <FavoriteIcon />, path: "/my-favorites" },
    { text: "Reviews", icon: <RateReviewIcon />, path: "/reviews" },
    { text: "My Profile", icon: <AccountCircleIcon />, path: "/my-profile" },
    { text: "Add Property", icon: <AddIcon />, path: "/add-property" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
          
      {/* Grid Layout */}
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={12} sm={4} md={3} sx={{ backgroundColor: '#f5f5f5', p: 2, minHeight: '100vh' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={() => navigate(item.path)}sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "#56AEB1" },
                }}
              >
                <ListItemIcon sx={{ color: "#4b9197" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} sm={8} md={9} sx={{ p: 3 }}>
          <Toolbar />
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;
