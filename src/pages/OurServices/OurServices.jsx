import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import { Box, Button, Container, Grid, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const OurServives = () => {
  return (
    <>
      <Container>
        <Box sx={{ paddingTop: 12, paddingBottom: 12 }}>
          <Box sx={{ textAlign: "center", paddingBottom: 6 }}>
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
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <AddHomeWorkOutlinedIcon
                    sx={{ width: "80px", height: "80px", textAlign: "left" }}
                  />
                  <Typography variant="h5">Buy A New Home</Typography>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Discover your dream home effortlessly. Explore diverse
                    properties and expert guidance for a seamless buying
                    experience.
                  </Typography>
                  <Button
                    href="/properties"
                    variant="contained"
                    sx={{ background: "#EFA00F" }}
                  >
                    Find a Home
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <AddHomeWorkOutlinedIcon
                    sx={{ width: "80px", height: "80px", textAlign: "left" }}
                  />
                  <Typography variant="h5">Rent a home </Typography>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Discover your dream home effortlessly. Explore diverse
                    properties and expert guidance for a seamless buying
                    experience.
                  </Typography>
                  <Button
                    href="/properties"
                    variant="contained"
                    sx={{ background: "#EFA00F" }}
                  >
                    Find a Rental
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              >
              <CardActionArea>
                <CardContent>
                  <AddHomeWorkOutlinedIcon
                    sx={{ width: "80px", height: "80px", textAlign: "left" }}
                    />
                  <Typography variant="h5">Sell a home </Typography>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Discover your dream home effortlessly. Explore diverse
                    properties and expert guidance for a seamless buying
                    experience.
                  </Typography>
                  <Button
                    href="/user-dashboard"
                    variant="contained"
                    sx={{ background: "#EFA00F" }}
                  >
                    Submit Property
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default OurServives;
