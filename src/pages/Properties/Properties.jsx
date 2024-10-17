import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress, Button, Grid, Container } from "@mui/material";
import PostCard from "../../components/PostCard/PostCard";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import { fetchProducts } from "../../redux/productSlice";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const [postsToDisplay, setPostsToDisplay] = useState();
  const dispatch = useDispatch();
  const { filteredPosts, loading, error } = useSelector(
    (state) => state.filteredPosts
  );
  const { states: allPosts, loading: allPostsLoading } = useSelector(
    (state) => state.products
  );
  const [visibleItems, setVisibleItems] = useState(12);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    if (
      query.get("type") ||
      query.get("property") ||
      query.get("bedroom") ||
      query.get("bathroom") ||
      query.get("city") ||
      query.get("minPrice") ||
      query.get("maxPrice") ||
      query.get("amenities")
    ) {
      setPostsToDisplay(filteredPosts);
    } else {
      setPostsToDisplay(allPosts);
    }
  }, [location, allPosts, filteredPosts]);

  return (
    <>
      <Container minwidth="sm" sx={{ padding: 12 }}>
        <Grid container>
          <Box
            className="left-side"
            sx={{ width: "30%", paddingRight: "60px" }}
          >
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Property listing
            </Typography>
            <Typography variant="h6">Search</Typography>

            <FilterProducts />
          </Box>
          <Box className="right-side" sx={{ width: "70%" }}>
            {loading || allPostsLoading ? (
              <CircularProgress
                sx={{ display: "block", margin: "20px auto" }}
              />
            ) : error ? (
              <Typography color="error">Error: {error}</Typography>
            ) : (
              <Box>
                <Grid container spacing={3}>
                  {postsToDisplay && postsToDisplay.length > 0 ? (
                    postsToDisplay.slice(0, visibleItems).map((item) => (
                      <Grid item xs={12} sm={12} md={6} key={item._id}>
                        <PostCard item={item} />
                      </Grid>
                    ))
                  ) : (
                    <Typography variant="body1" sx={{ margin: "20px auto" }}>
                      No posts found
                    </Typography>
                  )}
                </Grid>
                <Box sx={{ textAlign: "center", marginTop: 6 }}>
                  {visibleItems < filteredPosts.length && (
                    <Button
                      variant="contained"
                      onClick={handleShowMore}
                      sx={{
                        background: "#EFA00F",
                        color: "#fff",
                        padding: "16px 30px",
                      }}
                    >
                      Show More
                    </Button>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Properties;
