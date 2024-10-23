// import { Box, ListItemText, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";

// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// import img1 from "../../assets/images/luxury-real-estate.jpg";
// import img2 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
// import img3 from "../../assets/images/section 3.png";

// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPostDetails } from "../../redux/postSlice";
// import HomeSlider from "../../components/HomeSlider/HomeSlider";

// const PropertyDetails = () => {
//   const { _id } = useParams();
//   const dispatch = useDispatch();
//   const { post } = useSelector((state) => state.post);

//   useEffect(() => {
//     dispatch(fetchPostDetails({ id: _id }));
//   }, [dispatch, _id]);

//   console.log(post);

//   const buttonStyle = {
//     width: "30px",
//     background: "none",
//     border: "0px",
//   };

//   const properties = {
//     prevArrow: (
//       <button style={{ ...buttonStyle }}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           fill="#fff"
//         >
//           <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
//         </svg>
//       </button>
//     ),
//     nextArrow: (
//       <button style={{ ...buttonStyle }}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           fill="#fff"
//         >
//           <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
//         </svg>
//       </button>
//     ),
//   };

//   const mapContainerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const center = {
//     lat: -3.745,
//     lng: -73.989,
//   };

//   const images = [img1, img2, img3];

//   const [expanded, setExpanded] = useState("panel1");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   const Accordion = styled((props) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
//   ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,
//     "&:not(:last-child)": {
//       borderBottom: 0,
//     },
//     "&::before": {
//       display: "none",
//     },
//   }));

//   const AccordionSummary = styled((props) => (
//     <MuiAccordionSummary
//       expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//       {...props}
//     />
//   ))(({ theme }) => ({
//     backgroundColor: "rgba(0, 0, 0, .03)",
//     flexDirection: "row-reverse",
//     "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//       transform: "rotate(90deg)",
//     },
//     "& .MuiAccordionSummary-content": {
//       marginLeft: theme.spacing(1),
//     },
//     ...theme.applyStyles("dark", {
//       backgroundColor: "rgba(255, 255, 255, .05)",
//     }),
//   }));

//   const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: "1px solid rgba(0, 0, 0, .125)",
//   }));

//   return (
//     <Box sx={{}}>
//       <Slide {...properties}>
//         {images.map((img, index) => (
//           <div key={index} className="each-slide">
//             <div
//               style={{
//                 backgroundImage: `url(${img})`,
//                 height: "500px",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />
//           </div>
//         ))}
//       </Slide>
//       <Box
//         sx={{
//           width: "1300px",
//           margin: "auto",
//           padding: "20px",
//           borderTopLeftRadius: "20px",
//           borderTopRightRadius: "20px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             my: 5,
//           }}
//         >
//           <Box>
//             <Typography
//               variant="p"
//               sx={{
//                 background: "red",
//                 color: "#fff",
//                 padding: "2px 10px",
//                 borderRadius: "12px",
//               }}
//             >
//               For {post.type}
//             </Typography>
//             <Typography variant="h3">{post.title}</Typography>
//           </Box>
//           <Box>
//             <Typography variant="h5">${post.price} /month</Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Box>
//             <Typography>FEATURES:</Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 gap: "12px",
//               }}
//             >
//               <Typography>{post.bedroom} Bedroom</Typography>
//               <Typography>{post.bathroom} Bathroom</Typography>
//             </Box>
//           </Box>
//           <Box>
//             <Typography>LOCATION:</Typography>
//             <Typography>{post.address}</Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               gap: "12px",
//             }}
//           >
//             <Typography>
//               <AcUnitIcon />
//             </Typography>
//             <Typography>
//               <AcUnitIcon />
//             </Typography>
//             <Typography>
//               <AcUnitIcon />
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           width: "1300px",
//           margin: "auto",
//           padding: "20px",
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 600,
//           }}
//         >
//           Description
//         </Typography>
//         <Typography variant="p">{post.desc}</Typography>
//       </Box>
//       <Box
//         sx={{
//           width: "1300px",
//           margin: "auto",
//           padding: "20px",
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 600,
//           }}
//         >
//           Overview
//         </Typography>
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "repeat(4, 1fr)",
//             gap: 2,
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary={`ID: ${post._id}`} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary={`Type:${post.type}`} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary={`Bedrooms:${post.bedroom}`} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary={`Bathrooms:${post.bathroom}`} />
//           </Box>
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           width: "1300px",
//           margin: "auto",
//           padding: "20px",
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 600,
//           }}
//         >
//           Amenities and features
//         </Typography>
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "repeat(4, 1fr)",
//             gap: 2,
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="ID:" />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="Type:" />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="Bedrooms:" />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="Bathrooms:" />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="Garages:" />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="Size:" />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="Land Size:" />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <AcUnitIcon />
//             <ListItemText primary="Year Built:" />
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           width: "1300px",
//           margin: "auto",
//           padding: "20px",
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 600,
//           }}
//         >
//           Map
//         </Typography>
//         <Box sx={{ marginTop: "20px" }}>
//           <LoadScript googleMapsApiKey="YOUR_API_KEY">
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={center}
//               zoom={10}
//             ></GoogleMap>
//           </LoadScript>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           width: "1300px",
//           margin: "auto",
//           padding: "20px",
//         }}
//       >
//         <Accordion
//           expanded={expanded === "panel1"}
//           onChange={handleChange("panel1")}
//         >
//           <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//             <Typography>Collapsible Group Item #1</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//               eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//               eget.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === "panel2"}
//           onChange={handleChange("panel2")}
//         >
//           <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//             <Typography>Collapsible Group Item #1</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//               eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//               eget.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>

//       {/* slider */}
//       <Box>
//         <HomeSlider />
//       </Box>
//     </Box>
//   );
// };

// export default PropertyDetails;

import {
  Box,
  ListItemText,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  TextField,
  Avatar,
  Container,
  Checkbox,
  ListItemButton,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FavoriteBorder, Share } from "@mui/icons-material";
import {
  Hotel as BedroomIcon,
  Bathtub as BathroomIcon,
  SquareFoot as SizeIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/images/luxury-real-estate.jpg";
import img2 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
import img3 from "../../assets/images/section 3.png";

// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "../../redux/postSlice";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { Link } from "react-router-dom";
import { addFavorite } from "../../redux/favoriteSlice";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPostDetails({ id: _id }));
    console.log(post);
  }, [_id]);

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  // const [showMore, setShowMore] = useState(false);

  const [checked, setChecked] = useState(false);
  const [rating, setRating] = useState(4);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  // const toggleShowMore = () => {
  //   setShowMore(!showMore);
  // };

  // const mapContainerStyle = {
  //   width: "100%",
  //   height: "400px",
  // };

  // const center = {
  //   lat: -3.745,
  //   lng: -73.989,
  // };

  const images = [img1, img2, img3];

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255, 255, 255, .05)",
    }),
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  return (
    <Box sx={{}}>
      <Helmet>
        <title>{post?.title ? `${post?.title} - Property Hub` : "Property Hub"}</title>
        <meta
          name="description"
          content={post?.description ? post?.description.substring(0, 160) : "Property Hub"}
        />
        <meta property="og:title" content={post?.title ? `${post?.title} - Property Hub` : "Property Hub"} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={post?.images?.[0]} />
      </Helmet>
      {/* main slider */}
      <Slide {...properties}>
        {images.map((img, index) => (
          <div key={index} className="each-slide">
            <div
              style={{
                // backgroundImage: `url(${img})`,
                backgroundImage: `url(${post?.images})`,

                height: "500px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Slide>
      <Container minwidth="sm">
        <Box sx={{ padding: 2, marginTop: 8 }}>
          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 2 }}>
                <CardContent>
                  {/* Header */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {post?.title}
                    </Typography>
                    <Typography variant="h5" color="primary">
                      ${post?.price}
                    </Typography>
                  </Box>
                  {/* Features */}
                  <Box display="flex" alignItems="center" gap={4} marginTop={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <BedroomIcon color="primary" />
                      <Typography variant="body1">
                        $ {post?.bedroom} Bedroom{" "}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <BathroomIcon color="primary" />
                      <Typography variant="body1">
                        $ {post?.bathroom}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <SizeIcon color="primary" />
                      <Typography variant="body1">{post?.sqft} SqFt</Typography>
                    </Box>
                  </Box>

                  {/* Location */}
                  <Box display="flex" alignItems="center" marginTop={2} gap={1}>
                    <LocationIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      {post?.location}
                    </Typography>
                  </Box>

                  {/* Share and Favorite Buttons */}
                  <Box marginTop={2}>
                    <IconButton>
                      <Share />
                    </IconButton>

                    <IconButton onClick={() => dispatch(addFavorite(post._id))}>
                      <FavoriteBorder />
                    </IconButton>
                  </Box>

                  {/* Description */}
                  <Box marginTop={3}>
                    <Typography variant="h6">Description</Typography>
                    <Typography variant="body2" marginTop={1}>
                      {post?.description}
                    </Typography>
                  </Box>

                  {/* Overview */}
                  <Box marginTop={4}>
                    <Typography variant="h6">Overview</Typography>
                    <Grid container spacing={2} marginTop={2}>
                      <Grid item xs={6} sm={4}>
                        <Typography>Type: {post?.type}</Typography>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Typography>Bedrooms: {post?.bedroom}</Typography>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Typography>Bathrooms: {post?.bathroom}</Typography>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Typography>Size: {post?.sqft} SqFt</Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box marginTop={4}>
                    <Typography variant="h6">Amenities</Typography>
                    <Grid container spacing={2} marginTop={2}>
                      <Grid item>
                        <List>
                          {post?.amenities?.map((amenity, index) => (
                            <ListItem key={index}>
                              <ListItemText primary={amenity} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Section (Contact Seller) */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Contact Us</Typography>

                  {/* Contact Form */}
                  <Box marginTop={2}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      margin="dense"
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      margin="dense"
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      margin="dense"
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      margin="dense"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: 2 }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/* Floor */}

        <Box sx={{ padding: 2 }}>
          <Accordion
            sx={{ p: 1 }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              First Floor
            </AccordionSummary>
            <AccordionDetails>
              <Box component="img" src=""></Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ p: 1 }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Second Floor
            </AccordionSummary>
            <AccordionDetails>
              <Box component="img" src=""></Box>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Comments */}

        <Box sx={{ padding: 2, marginTop: 5 }}>
          {/* Review Card */}
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: 2,
              marginBottom: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <Avatar
                  alt="Viola Lucas"
                  src="https://via.placeholder.com/150"
                  sx={{ width: 60, height: 60 }}
                />
              </Grid>
              <Grid item xs>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Viola Lucas
                    <Box
                      component="span"
                      sx={{
                        color: "green",
                        fontWeight: "bold",
                        marginLeft: "8px",
                      }}
                    >
                      ✔️
                    </Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post?.comments?.createdAt}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={rating}
                    readOnly
                    sx={{ marginY: 1 }}
                  />
                  <Typography variant="body2">
                    {post?.comments?.text}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Leave A Reply */}
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Leave A Reply
            </Typography>
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
            </Grid>
            <Box display="flex" alignItems="center" marginTop={2}>
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
              />
              <Typography variant="body2">
                Save your name, email for the next time review
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Review"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ marginTop: 2 }}
            >
              Post Comment
            </Button>
          </Box>
        </Box>

        {/* Featured slider */}
        <Box sx={{ paddingBottom: 8 }}>
          <Box sx={{ py: 4 }}>
            <Typography variant="h3">Featured Properties</Typography>
          </Box>
          <HomeSlider />
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyDetails;
