import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress, Button, Grid, Container } from "@mui/material";
import PostCard from "../../components/PostCard/PostCard";

const Properties = ({ item }) => {
  const dispatch = useDispatch();
  const { states, loading, error } = useSelector((state) => state.products);
  const [visibleItems, setVisibleItems] = useState(12); // Show 12 items

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 6); // Load 6 more items on each click
  };

  if (loading)
    return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <>
      <Container minwidth="sm">
        <Grid container>
          <Box className="left-side" sx={{ width: "20%" }}>
            <Typography variant="h4">Filter</Typography>
          </Box>
          <Box className="right-side" sx={{ width: "80%" }}>
            <Box sx={{ paddingTop: 12, paddingBottom: 12 }}>
              <Grid container spacing={3}>
                {states && states.length > 0 ? (
                  states.slice(0, visibleItems).map((item) => (
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
                <Button
                  variant="contained"
                  onClick={handleShowMore}
                  sx={{ background: "#EFA00F" }}
                >
                  Show More
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Properties;
