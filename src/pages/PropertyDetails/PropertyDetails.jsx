import { Box, ListItemText, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/images/luxury-real-estate.jpg";
import img2 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
import img3 from "../../assets/images/section 3.png";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const PropertyDetails = () => {
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
    height: "400px", // يمكنك تعديل الطول كما تراه مناسبًا
  };

  const center = {
    lat: -3.745, // استبدل هذه القيمة بموقعك الجغرافي
    lng: -73.989,
  };

  // Array of images to be displayed in the slideshow
  const images = [img1, img2, img3];

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
              For Rent
            </Typography>
            <Typography variant="h3">Lakeview Haven, Lake Tahoe</Typography>
          </Box>
          <Box>
            <Typography variant="h5">$250,00 /month</Typography>
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
              <Typography>2 Bedroom</Typography>
              <Typography>2 Bedroom</Typography>
              <Typography>2 Bedroom</Typography>
            </Box>
          </Box>
          <Box>
            <Typography>LOCATION:</Typography>
            <Typography>8 Broadway, Brooklyn, New York</Typography>
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
        <Typography variant="p">
          Located around an hour away from Paris, between the Perche and the
          Iton valley, in a beautiful wooded park bordered by a charming stream,
          this country property immediately seduces with its bucolic and
          soothing environment. An ideal choice for sports and leisure
          enthusiasts who will be able to take advantage of its swimming pool
          (11m x 5m), tennis court, gym and sauna.
        </Typography>
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
          Property Details
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
            <ListItemText primary="ID:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ListItemText primary="Type:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ListItemText primary="Bedrooms:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ListItemText primary="Bathrooms:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ListItemText primary="Garages:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ListItemText primary="Size:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ListItemText primary="Land Size:" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
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
            >
            </GoogleMap>
          </LoadScript>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
