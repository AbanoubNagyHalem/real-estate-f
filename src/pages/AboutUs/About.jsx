import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Grid2,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SellIcon from "@mui/icons-material/Sell";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
          <Helmet>
        <title>About Us - Property Hub</title>
        <meta
          name="description"
          content="Welcome to Property Hub. Discover how we turn houses into homes with expert real estate services."
        />
      </Helmet>

      <Box
        boxShadow={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Typography variant="h1">About Us</Typography>
        <Breadcrumb />
      </Box>
      <Container minWidth="sm" sx={{ py: 12 }}>
        {/* Company Overview */}

        <Box sx={{ padding: 4 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - Text Section */}
            <Grid
              item
              xs={12}
              md={12}
              display={"flex"}
              sx={{ flexWrap: { md: "nowrap", xs: "wrap" } }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom fontWeight="bold">
                  Welcome To The Homzen
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" paragraph>
                  Welcome to Homeya, where we turn houses into homes and dreams
                  into reality. At Homeya, we understand that a home is more
                  than just a physical space; it's a place where memories are
                  created, families grow, and life unfolds.
                </Typography>
                <Button variant="text" sx={{ marginTop: 2, color: "#f57c00" }}>
                  Learn More →
                </Button>
              </Grid>
            </Grid>

            {/* Right Side - Image Section */}
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "56.25%", // 16:9 aspect ratio
                  overflow: "hidden",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/Gm9PotbgtdI"
                  title="Welcome Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Mission and Vision */}
        {/* <Grid container spacing={4} marginTop={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, border: "1px solid #e0e0e0", borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Our mission is to connect buyers and sellers with their ideal
              properties, offering personalized services and market insights
              that make the buying or selling process effortless and fulfilling.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, border: "1px solid #e0e0e0", borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" color="textSecondary">
              To be a leader in the real estate industry by building lasting
              relationships and providing unparalleled services that set the
              standard for quality and innovation.
            </Typography>
          </Box>
        </Grid>
      </Grid> */}

        {/* Why Choose Us */}

        <Box sx={{ padding: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Left Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ color: "#f57c00" }}>
                Why Choose Us
              </Typography>
              <Typography variant="h4" gutterBottom>
                Discover What Sets Our Real Estate Expertise Apart
              </Typography>
              <Typography variant="body1" paragraph>
                At Homeya, our unwavering commitment lies in crafting
                unparalleled real estate journeys. Our seasoned professionals,
                armed with extensive market knowledge, walk alongside you
                through every phase of your property endeavor. We prioritize
                understanding your unique aspirations, tailoring our expertise
                to match your vision.
              </Typography>

              <Grid container spacing={1} sx={{ marginBottom: 2 }}>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon color="success" sx={{ marginRight: 1 }} />{" "}
                    Transparent Partnerships
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon color="success" sx={{ marginRight: 1 }} />{" "}
                    Proven Expertise
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon color="success" sx={{ marginRight: 1 }} />{" "}
                    Customized Solutions
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon color="success" sx={{ marginRight: 1 }} />{" "}
                    Local Area Knowledge
                  </Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  background: "#f57c00",
                  color: "#fff",
                  padding: "16px 30px",
                }}
                to="/contact-us/"
              >
                Contact Us
              </Button>
            </Grid>

            {/* Right Section - Services */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {/* Buy a Home Card */}
                <Grid item xs={12}>
                  <Paper
                    elevation={3}
                    sx={{ padding: 3, display: "flex", alignItems: "center" }}
                  >
                    <HomeIcon
                      sx={{ fontSize: 50, marginRight: 2, color: "#21616A" }}
                    />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        Buy A New Home
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Explore diverse properties and expert guidance for a
                        seamless buying experience.
                      </Typography>
                      <Button
                        color="secondary"
                        sx={{ marginTop: 1, color: "#f57c00" }}
                      >
                        Learn More →
                      </Button>
                    </Box>
                  </Paper>
                </Grid>

                {/* Rent a Home Card */}
                <Grid item xs={12}>
                  <Paper
                    elevation={3}
                    sx={{ padding: 3, display: "flex", alignItems: "center" }}
                  >
                    <ApartmentIcon
                      sx={{ fontSize: 50, marginRight: 2, color: "#21616A" }}
                    />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        Rent A Home
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Explore a diverse variety of listings tailored precisely
                        to suit your unique lifestyle needs.
                      </Typography>
                      <Button
                        color="secondary"
                        sx={{ marginTop: 1, color: "#f57c00" }}
                      >
                        Learn More →
                      </Button>
                    </Box>
                  </Paper>
                </Grid>

                {/* Sell a Home Card */}
                <Grid item xs={12}>
                  <Paper
                    elevation={3}
                    sx={{ padding: 3, display: "flex", alignItems: "center" }}
                  >
                    <SellIcon
                      sx={{ fontSize: 50, marginRight: 2, color: "#21616A" }}
                    />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        Sell A Home
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Showcasing your property's best features for a
                        successful sale.
                      </Typography>
                      <Button
                        color="secondary"
                        sx={{ marginTop: 1, color: "#f57c00" }}
                      >
                        Learn More →
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
