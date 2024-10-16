import { Outlet, useNavigate } from "react-router-dom";
import {
  Toolbar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import useLogout from "../Logout/Logout";
const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for toggling the sidebar visibility
  const [activeIndex, setActiveIndex] = useState(0); // State to track the currently active menu item
  const navigate = useNavigate(); // Hook for programmatic navigation
  const handleLogout = useLogout(); // Call custom hook for handling logout

  // Array containing the dashboard menu items
  const menuItems = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/user-dashboard" },
    {
      text: "My Properties",
      icon: <AddIcon />,
      path: "/user-dashboard/my-properties",
    },
    {
      text: "My Favorites",
      icon: <FavoriteIcon />,
      path: "/user-dashboard/my-favorites",
    },
    {
      text: "Reviews",
      icon: <RateReviewIcon />,
      path: "/user-dashboard/reviews",
    },
    {
      text: "My Profile",
      icon: <AccountCircleIcon />,
      path: "/user-dashboard/my-profile",
    },
    {
      text: "Add Property",
      icon: <AddIcon />,
      path: "/user-dashboard/add-property",
    },
    { text: "Log Out", icon: <LogoutIcon />, path: "/user-dashboard/logout" },
  ];

  const handleMenuClick = (index, path) => {
    setSidebarOpen(false);

    if (path === "/user-dashboard/logout") {
      handleLogout();
    } else {
      setActiveIndex(index);
      navigate(path);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <IconButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{ position: "absolute", top: 20, left: 20, zIndex: 1300, color:"#f5f5f5" }}
      >
        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <Grid container>
        {sidebarOpen && (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            sx={{ backgroundColor: "#f5f5f5", p: 2, minHeight: "100vh" }}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  key={item.text}
                  onClick={() => handleMenuClick(index, item.path)}
                  sx={{
                    backgroundColor:
                      activeIndex === index ? "#56AEB1" : "transparent",
                    color: "white",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#56AEB1" },
                  }}
                >
                  <ListItemIcon sx={{ color: "#4b9197" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Grid>
        )}

        <Grid item xs={12} sm={8} md={9} sx={{ p: 3 }}>
          <Toolbar /> {/* Placeholder for any toolbar items */}
          <Outlet /> {/* Render the child routes/components here */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;
