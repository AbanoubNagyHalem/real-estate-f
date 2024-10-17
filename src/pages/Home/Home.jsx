import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import {
  Typography,
  Box,
  CircularProgress,
  Button,
  Grid,
  Container,
  TextField,
} from "@mui/material";
import PostCard from "../../components/PostCard/PostCard";
import { useNavigate } from "react-router";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import "./Home.css";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import Searchbar from "../../components/Searchbar/Searchbar";

const Home = () => {
  const newTexts = ["Real Estate", "Perfect Home", "Dream Home"];
  const [text, setText] = useState("Faster");
  const [textIndex, setTextIndex] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  const dispatch = useDispatch();
  const { states, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const changeText = () => {
      setTextIndex((prevIndex) => (prevIndex + 1) % newTexts.length);
      setTimeout(() => {
        setText(newTexts[textIndex]);
      }, 200); // Adjust the timing as needed
    };

    const intervalId = setInterval(changeText, 1500);

    return () => clearInterval(intervalId); // Cleanup interval to prevent memory leaks
  }, [textIndex, newTexts]);

  const navigate = useNavigate();
  const handleShowMore = () => {
    navigate("/properties");
  };

  return (
    <>
      <Box
        width={1}
        className="hero-banner"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          className="animation"
          sx={{ textAlign: "center", color: "#fff" }}
        >
          Find Your
          <Typography
            variant="h1"
            component="span"
            className="fadeDownText"
            sx={{ textAlign: "center", color: "#fff" }}
          >
            {" " + text}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", maxWidth: "40%", color: "#fff" }}
        >
          We are a real estate agency that will help you find the best residence
          you dream of. Let’s discuss your dream house?
        </Typography>
        <Box>
          <Searchbar />
        </Box>
      </Box>

      <Container minwidth="sm">
        <Box className="posts">
          <Box sx={{ textAlign: "center", paddingTop: 12 }}>
            <Typography variant="subtitle1" sx={{ color: "#EFA00F" }}>
              Featured Properties
            </Typography>
            <Typography variant="h3">Recommended For You</Typography>
          </Box>

          <Box
            className="filter-tabs"
            sx={{ textAlign: "center", paddingTop: 4 }}
          >
            <FilterTabs setFilteredResults={setFilteredResults} />
          </Box>

          <Box sx={{ paddingTop: 4, paddingBottom: 12 }}>
            {loading ? (
              <CircularProgress
                sx={{ display: "block", margin: "20px auto" }}
              />
            ) : error ? (
              <Typography color="error">Error: {error}</Typography>
            ) : filteredResults && filteredResults.length > 0 ? (
              <Grid container spacing={3}>
                {filteredResults.slice(0, visibleItems).map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item._id}>
                    <PostCard item={item} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body1" sx={{ margin: "20px auto" }}>
                No posts found
              </Typography>
            )}

            <Box sx={{ textAlign: "center", marginTop: 6 }}>
              <Button
                variant="contained"
                onClick={handleShowMore}
                sx={{
                  background: "#EFA00F",
                  color: "#fff",
                  padding: "16px 30px",
                }}
              >
                View All Properties
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ paddingBottom: 12 }}>
          <Box sx={{ textAlign: "center", paddingBottom: 6 }}>
            <Typography variant="subtitle1" sx={{ color: "#EFA00F" }}>
              Explore Cities
            </Typography>
            <Typography variant="h3">Our Location For You</Typography>
          </Box>
          <HomeSlider />
        </Box>
      </Container>

      <Box sx={{ paddingTop: 12, paddingBottom: 12, background: "#21616A" }}>
        <Container>
          <Box sx={{ textAlign: "left", paddingBottom: 6, color: "#fff" }}>
            <Typography variant="subtitle1">Our Services</Typography>
            <Typography variant="h3">What We Do?</Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 6,
              color: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
              }}
            >
              <AddHomeWorkOutlinedIcon
                sx={{ width: "80px", height: "80px", textAlign: "left" }}
              />
              <Typography variant="h5">Buy A New Home</Typography>
              <Typography variant="body2">
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </Typography>
              <Button
                href="/our-services"
                variant="text"
                sx={{ color: "#EFA00F", paddingLeft: 0 }}
              >
                Learn More <EastOutlinedIcon sx={{ color: "#EFA00F" }} />{" "}
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
              }}
            >
              <AddHomeWorkOutlinedIcon
                sx={{ width: "80px", height: "80px", textAlign: "left" }}
              />
              <Typography variant="h5">Rent a home </Typography>
              <Typography variant="body2">
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </Typography>
              <Button
                href="/our-services"
                variant="text"
                sx={{ color: "#EFA00F", paddingLeft: 0 }}
              >
                Learn More <EastOutlinedIcon sx={{ color: "#EFA00F" }} />{" "}
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
              }}
            >
              <AddHomeWorkOutlinedIcon
                sx={{ width: "80px", height: "80px", textAlign: "left" }}
              />
              <Typography variant="h5">Sell a home </Typography>
              <Typography variant="body2">
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </Typography>
              <Button
                href="/our-services"
                variant="text"
                sx={{ color: "#EFA00F", paddingLeft: 0 }}
              >
                Learn More <EastOutlinedIcon sx={{ color: "#EFA00F" }} />{" "}
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box
        width={1}
        className="home-contact-banner"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              },
              gap: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h4"
                className="animation"
                sx={{ textAlign: "left", color: "#fff", marginBottom: 2 }}
              >
                Work with the best real estate platform in Mumbai to buy or sell
                properties
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#EFA00F",
                  color: "#fff",
                  padding: "16px 30px",
                }}
              >
                Contact US Today
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light" ? "#fff" : "#000000cc",
                padding: {
                  xs: "46px 36px 46px 22px",
                  md: "56px 56px 56px 40px",
                },
                borderRadius: 4,
              }}
            >
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: 1 } }}
              >
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Your Phone"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                />

                <TextField
                  id="filled-multiline-static"
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  sx={{
                    background: "#EFA00F",
                    color: "#fff",
                    padding: "16px 30px",
                  }}
                >
                  Submit{" "}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
