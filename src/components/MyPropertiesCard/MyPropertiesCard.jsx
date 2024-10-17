// import React from "react";
// import { Card, CardMedia, CardContent,Divider, Typography, Button } from "@mui/material";

// const MyPropertiesCard = ({ property }) => {
//   return (
//     <Card sx={{ MaxWidth: 345,border: `1px solid #4b9197`, borderRadius: 2, mb: 2,boxShadow: 3 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={property.image}
//         alt={property.title}
//         sx={{ borderRadius: '4px 4px 0 0' }}
//       />
//       <CardContent sx={{ p: 2, textAlign: 'left' }}>
//         <Typography variant="h6" fontWeight="bold">
//           {property.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {property.location}
//         </Typography>
//         <Divider sx={{ my: 1 }} />
//         <Typography variant="h5" color={"#4b9197"} fontWeight="bold">
//           ${property.price.toLocaleString()}
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#fca326",
//             "&:hover": { backgroundColor: "#e69024" },
//             textTransform: "none",
//             mt: 1,
//           }}
//         >
//           {property.status}
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default MyPropertiesCard;
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import cardImg from "../../assets/images/luxury-real-estate.jpg";

const MyPropertiesCard = ({ item }) => {
  return (
    <Link to={`/properties/${item?._id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ margin: 1 }}>
        <CardActionArea>
          <Grid container sx={{width:1}}>
            {/* Image Section (Left Side) */}
            <Grid item xs={12} md={5}>
              <CardMedia
                component="img"
                height="100%"
                image={item.images[0] || cardImg}
                alt={item.title}
                sx={{
                  objectFit: "cover",
                  height: "100%",
                  borderRadius: "8px 8px",
                }}
              />
            </Grid>

            <Grid item xs={12} md={7} sx={{ padding: "16px" }}>
              <CardContent>
                {/* Title */}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#21616A",
                    mb: 1,
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2, // Limit title to 2 lines
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="#21616A"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  {item.address}
                </Typography>

                <Typography
                  variant="h6"
                  color="#21616A"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <MonetizationOnOutlinedIcon sx={{ marginRight: "4px" }} />
                  {item.price}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default MyPropertiesCard;
