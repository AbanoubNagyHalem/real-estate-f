import { Box, Grid, Typography, Divider, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0F2C33",
        color: "var(--White)",
        py: 4,
        mt: "auto",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 3 }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div" sx={{ mx: 8 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "120px", width: "120px" }}
            />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Typography variant="h6" component="div" sx={{ mb: 0, mr: 1 }}>
              <strong className="footer-info">Follow us:</strong>
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton className="social-icon">
                <FacebookIcon />
              </IconButton>
              <IconButton className="social-icon">
                <TwitterIcon />
              </IconButton>
              <IconButton className="social-icon">
                <LinkedInIcon />
              </IconButton>
              <IconButton className="social-icon">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider
        sx={{
          width: "80%",
          mx: "auto",
          my: 3,
          backgroundColor: "var(--Secondary-2)",
        }}
      />

      {/* Paragraph Text */}
      <Typography variant="body1" align="left" sx={{ px: 15, mb: 5 }}>
        <span className="footer-info">
          Specialists in providing high-class tours for <br />
          those in need. Contact us.
        </span>
      </Typography>

      {/* Grid Section */}
      <Grid
        container
        spacing={4}
        sx={{ px: 3, textAlign: { xs: "center", md: "center" } }}
      >
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 2, color: "var(--Secondary-1)" }}
          >
            Contact Info
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, mx: 12 }}>
            <HomeIcon className="footer-contact" />
            <Typography variant="body2" component="p" className="footer-span">
              123 Main St, City, Country
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, mx: 12 }}>
            <PhoneIcon className="footer-contact" />
            <Typography variant="body2" component="p" className="footer-span">
              +20 123 070 1443
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, mx: 12 }}>
            <EmailIcon className="footer-contact" />
            <Typography variant="body2" component="p" className="footer-span">
              info@company.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 2, color: "var(--Secondary-1)" }}
          >
            Categories
          </Typography>
          <Typography variant="body2" component="p" sx={{ mb: 2 }}>
            <span className="footer-span">Our Services</span>
          </Typography>
          <Typography variant="body2" component="p" sx={{ mb: 2 }}>
            <span className="footer-span">About Us</span>
          </Typography>
          <Typography variant="body2" component="p" sx={{ mb: 2 }}>
            <span className="footer-span">Contact Us</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 2, color: "var(--Secondary-1)" }}
          >
            Our Company
          </Typography>
          <Typography variant="body2" component="p" sx={{ mb: 2 }}>
            <span className="footer-span">Property for Rent</span>
          </Typography>
          <Typography variant="body2" component="p" sx={{ mb: 2 }}>
            <span className="footer-span">Property for Sale</span>
          </Typography>
          <Typography variant="body2" component="p" sx={{ mb: 2 }}>
            <span className="footer-span">Property for Buy</span>
          </Typography>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider
        sx={{
          width: "80%",
          mx: "auto",
          my: 3,
          backgroundColor: "var(--Secondary-2)",
        }}
      />

      {/* Copyright Section */}
      <Typography
        variant="body2"
        align="center"
        sx={{ px: 3, color: "var(--Secondary-2)" }}
      >
        Property Hub © 2024 All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
