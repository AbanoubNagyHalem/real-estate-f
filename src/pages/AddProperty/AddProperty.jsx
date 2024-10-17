import { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Box,
  MenuItem,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./AddProperty.css";
import MapComponent from "../../components/Map/Map";

function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    zipCode: "",
    country: "",
    province: "",
    neighborhood: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [location, setLocation] = useState([30.033333, 31.233334]);
  const [errorMessage, setErrorMessage] = useState("");
  const [locationText, setLocationText] = useState("");

  const [countries] = useState([
    {
      name: "Egypt",
      provinces: ["Cairo", "Alexandria"],
      location: [30.033333, 31.233334],
    },
    {
      name: "Saudi Arabia",
      provinces: ["Riyadh", "Jeddah"],
      location: [24.774265, 46.738586],
    },
    {
      name: "USA",
      provinces: ["California", "Texas"],
      location: [37.09024, -95.712891],
    },
    {
      name: "France",
      provinces: ["Paris", "Lyon"],
      location: [48.8566, 2.3522],
    },
    {
      name: "Japan",
      provinces: ["Tokyo", "Osaka"],
      location: [35.6762, 139.6503],
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
      (country) => country.name === e.target.value
    );
    setFormData({
      ...formData,
      country: e.target.value,
      province: "",
    });
    if (selectedCountry) {
      setLocation(selectedCountry.location);
      setLocationText(selectedCountry.name);
    }
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setFormData({
      ...formData,
      province: selectedProvince,
    });

    const selectedCountry = countries.find(
      (country) => country.name === formData.country
    );
    if (selectedCountry) {
      setLocation(selectedCountry.location);
      setLocationText(`${selectedCountry.name}, ${selectedProvince}`);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.type.split("/")[0];
      if (fileType === "image") {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setErrorMessage("");
        };
        reader.readAsDataURL(file);
      } else {
        setErrorMessage("Please select a valid image file.");
      }
    }
  };

  const handleLocationIconClick = () => {
    const selectedCountry = countries.find(
      (country) => country.name === formData.country
    );
    if (selectedCountry) {
      setLocation(selectedCountry.location);
      setLocationText(`${selectedCountry.name}, ${formData.province}`);
    }
  };

  return (
    <Box className="add-property-container">
      <Typography variant="h6" className="addProperty-title">
        Upload Media
      </Typography>
      {/* Image Upload Section */}
      <Card
        sx={{
          backgroundColor: "#0F2C33",
          border: "1px solid var(--Secondary-2)",
          borderRadius: "25px",
          boxShadow: "0px 4px 10px rgba(86, 174, 177,0.5)",
          marginBottom: "30px",
        }}
      >
        <CardContent className="upload-card-content">
          <ImageIcon sx={{ fontSize: "80px", color: "var(--Secondary-2)" }} />
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="image-preview" />
          ) : (
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              className="upload-btn"
            >
              Choose Image
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
          )}
          {!imagePreview && (
            <Typography className="upload-info">
              or drag image here to upload
            </Typography>
          )}
          {errorMessage && (
            <Typography color="error" className="error-message">
              {errorMessage}
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* Information Section */}
      <Card
        className="add-property-card"
        sx={{
          marginBottom: "30px",
          border: "1px solid var(--Secondary-2)",
          borderRadius: "25px",
          boxShadow: "0px 4px 10px rgba(86, 174, 177,0.5)",
        }}
      >
        <CardContent>
          <Typography variant="h6" className="addProperty-title">
            Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                fullWidth
                value={formData.title}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                multiline
                rows={4}
                fullWidth
                value={formData.description}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Full Address"
                name="address"
                fullWidth
                value={formData.address}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Zip Code"
                name="zipCode"
                fullWidth
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                select
                fullWidth
                required
                className="custom-text-field"
              >
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Province"
                name="province"
                fullWidth
                value={formData.province}
                onChange={handleProvinceChange}
                select
                required
                disabled={!formData.country} // Disable if no country is selected
                className="custom-text-field"
              >
                {formData.country ? (
                  countries
                    .find((country) => country.name === formData.country)
                    ?.provinces.map((province) => (
                      <MenuItem key={province} value={province}>
                        {province}
                      </MenuItem>
                    ))
                ) : (
                  <MenuItem value="" disabled>
                    Select a country first
                  </MenuItem>
                )}
              </TextField>
            </Grid>

            {/* TextField for Location */}
            <Grid item xs={12}>
              <TextField
                label="Location"
                fullWidth
                value={locationText}
                className="custom-text-field"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <LocationOnIcon
                      style={{ cursor: "pointer", color: "var(--Primary)" }}
                      onClick={handleLocationIconClick}
                    />
                  ),
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Map Section */}
      <Card
        sx={{
          border: "1px solid var(--Secondary-2)",
          borderRadius: "25px",
          boxShadow: "0px 4px 10px rgba(86, 174, 177,0.5)",
          marginBottom: "30px",
        }}
      >
        <CardContent>
          <Typography variant="h6" className="addProperty-title">
            Location
          </Typography>
          <MapComponent location={location} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default AddProperty;
