import { Box, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/images/luxury-real-estate.jpg";
import img2 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
import img3 from "../../assets/images/section 3.png";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "../../redux/postSlice";

const PropertyDetails = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPostDetails({ id: _id }));
  }, [dispatch, _id]);

  console.log(post);

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

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -73.989,
  };

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
      <Slide {...properties}>
        {images.map((img, index) => (
          <div key={index} className="each-slide">
            <div
              style={{
                backgroundImage: `url(${img})`,
                height: "500px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Slide>
      <Box
        sx={{
          width: "1300px",
          margin: "auto",
          padding: "20px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 5,
          }}
        >
          <Box>
            <Typography
              variant="p"
              sx={{
                background: "red",
                color: "#fff",
                padding: "2px 10px",
                borderRadius: "12px",
              }}
            >
              For {post.type}
            </Typography>
            <Typography variant="h3">{post.title}</Typography>
          </Box>
          <Box>
            <Typography variant="h5">${post.price} /month</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>FEATURES:</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "12px",
              }}
            >
              <Typography>{post.bedroom} Bedroom</Typography>
              <Typography>{post.bathroom} Bathroom</Typography>
            </Box>
          </Box>
          <Box>
            <Typography>LOCATION:</Typography>
            <Typography>{post.address}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
            }}
          >
            <Typography>
              <AcUnitIcon />
            </Typography>
            <Typography>
              <AcUnitIcon />
            </Typography>
            <Typography>
              <AcUnitIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "1300px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Description
        </Typography>
        <Typography variant="p">{post.desc}</Typography>
      </Box>
      <Box
        sx={{
          width: "1300px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Overview
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary={`ID: ${post._id}`} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary={`Type:${post.type}`} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary={`Bedrooms:${post.bedroom}`} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary={`Bathrooms:${post.bathroom}`} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "1300px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Amenities and features
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="ID:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="Type:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="Bedrooms:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="Bathrooms:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="Garages:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="Size:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="Land Size:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <AcUnitIcon />
            <ListItemText primary="Year Built:" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "1300px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Map
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
            ></GoogleMap>
          </LoadScript>
        </Box>
      </Box>
      <Box
        sx={{
          width: "1300px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
