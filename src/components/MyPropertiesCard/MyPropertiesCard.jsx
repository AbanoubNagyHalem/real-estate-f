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
          <Grid container>
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
