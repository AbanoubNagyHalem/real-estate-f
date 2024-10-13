<<<<<<< Updated upstream
import React from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {
  return (
    <>
    {/* <div>Header</div> */}
    <ThemeToggle/>
    </>
  )
}

export default Header
=======
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link ,NavLink } from 'react-router-dom'; 
import logo from '../../assets/images/logo.png';

const pages = ['Home', 'Properties', 'About Us', 'Our Services', 'Contact Us'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'var(--Primary)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        
          <Typography
            component={Link} 
            to="/" 
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img src={logo} alt="Logo" style={{ height: '80px' }} />
          </Typography>

     
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography component={Link} to="/">
              <img src={logo} alt="Logo" style={{ height: '60px' }} />
            </Typography>

            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

{/* Links for large screens */}
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
  {pages.map((page) => (
    <NavLink
      key={page}
      to={`/${page.replace(' ', '').toLowerCase()}`} 
      style={({ isActive }) => ({
        my: 2,
        marginRight: '16px', // Adjust the spacing here
        color: isActive ? 'var(--Secondary-1)' : 'var(--White)',
        display: 'block',
        fontFamily: 'Merriweather',
        textTransform: 'capitalize'
      })}
    >
      {page}
    </NavLink>
  ))}
</Box>




          {/* Login/Register button for large screens */}
          <Button
            variant="contained"
            component={Link} 
            to="/login" 
            sx={{ display: { xs: 'none', md: 'block' ,backgroundColor:'var(--Secondary-1)', color:'var(--White)' ,  textTransform: 'capitalize'} }}
          >
            Login / Register
          </Button>

          {/* Menu for small screens */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              width: '100%', 
              top: '0 !important', 
            }}
            PaperProps={{
              sx: {
                width: '100vw',
                marginTop: '3.4rem',
                backgroundColor: "#21626ad5",
                color: 'var(--White)',
              },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ width: '100%', textAlign: 'center' }}>
                  <Typography 
                    component={Link}
                    to={`/${page.replace(' ', '').toLowerCase()}`} 
                    sx={{ width: '100%', color: 'inherit' }} 
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              {/* Login/Register button for small screens */}
              <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%', textAlign: 'center' }}>
                <Button variant="contained" color="warning" fullWidth component={Link} to="/login">
                  Login / Register
                </Button>
              </MenuItem>
            </Box>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
>>>>>>> Stashed changes
