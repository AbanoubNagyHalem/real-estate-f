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
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  CardHeader,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./AddProperty.css";
import MapComponent from "../../components/Map/Map";
function AddProperty() {
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    address: "",
    country: "",
    neighborhood: "",
    propertyType: "",
    price: "",
    PropertyStatus: "",
    size: "",
    garages: "",
    bedrooms: "",
    bathrooms: "",
  });
  const [setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [location, setLocation] = useState([30.033333, 31.233334]);
  const [errorMessage, setErrorMessage] = useState("");
  const [locationText, setLocationText] = useState("");

  const [countries] = useState([
    {
      name: "Egypt",
      location: [30.033333, 31.233334],
    },
    {
      name: "Saudi Arabia",
      location: [24.774265, 46.738586],
    },
    {
      name: "USA",
      location: [37.09024, -95.712891],
    },
    {
      name: "France",
      location: [48.8566, 2.3522],
    },
    {
      name: "Japan",
      location: [35.6762, 139.6503],
    },
  ]);

  const [propertyTypes] = useState([
    {
      name: "Apartment",
    },
    {
      name: "Villa",
    },
    {
      name: "Studio",
    },
    {
      name: "Office",
    },
    {
      name: "Townhouse",
    },
  ]);
  const [PropertyStatus] = useState([
    {
      name: "For Rent",
    },
    {
      name: "For Sale",
    },
  ]);

  const [amenities, setAmenities] = useState({
    smokeAlarm: false,
    carbonMonoxideAlarm: false,
    firstAidKit: false,
    selfCheckIn: false,
    securityCameras: true,
    bedLinens: true,
    hangers: false,
    extraPillows: false,
    iron: false,
    tvWithCable: true,
    refrigerator: false,
    microwave: true,
    dishwasher: false,
    coffeeMaker: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAmenities((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const amenityCategories = [
    {
      title: "Home safety",
      items: [
        { name: "smokeAlarm", label: "Smoke alarm" },
        { name: "carbonMonoxideAlarm", label: "Carbon monoxide alarm" },
        { name: "firstAidKit", label: "First aid kit" },
        { name: "selfCheckIn", label: "Self check-in with lockbox" },
        { name: "securityCameras", label: "Security cameras" },
      ],
    },
    {
      title: "Bedroom",
      items: [
        { name: "bedLinens", label: "Bed linens" },
        { name: "hangers", label: "Hangers" },
        { name: "extraPillows", label: "Extra pillows & blankets" },
        { name: "iron", label: "Iron" },
        { name: "tvWithCable", label: "TV with standard cable" },
      ],
    },
    {
      title: "Kitchen",
      items: [
        { name: "refrigerator", label: "Refrigerator" },
        { name: "microwave", label: "Microwave" },
        { name: "dishwasher", label: "Dishwasher" },
        { name: "coffeeMaker", label: "Coffee maker" },
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
      (country) => country.name === e.target.value
    );
    setPropertyData({
      ...propertyData,
      country: e.target.value,
    });
    if (selectedCountry) {
      setLocation(selectedCountry.location);
      setLocationText(selectedCountry.name);
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
      (country) => country.name === propertyData.country
    );
    if (selectedCountry) {
      setLocation(selectedCountry.location);
      setLocationText(`${selectedCountry.name}`);
    }
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyData({
      ...propertyData,
      propertyType: e.target.value,
    });
  };

  const handlePropertyStatusChange = (e) => {
    setPropertyData({
      ...propertyData,
      PropertyStatus: e.target.value,
    });
  };
  const [floors, setFloors] = useState([
    {
      id: 1,
      floorName: "",
      floorPrice: "",
      floorSize: "",
      size: "",
      pricePostfix: "",
      sizePostfix: "",
      bedrooms: "",
      bathrooms: "",
      description: "",
      floorImage: null,
      floorImagePreview: null,
      errorMessage: "",
    },
  ]);
  const [enablePlan, setEnablePlan] = useState("enable");

  const handleAddFloor = () => {
    setFloors([
      ...floors,
      {
        id: floors.length + 1,
        floorName: "",
        floorPrice: "",
        floorSize: "",
        size: "",
        pricePostfix: "",
        sizePostfix: "",
        bedrooms: "",
        bathrooms: "",
        description: "",
        floorImage: null,
        floorImagePreview: null,
        errorMessage: "",
      },
    ]);
  };

  const handleDeleteFloor = (id) => {
    setFloors(floors.filter((floor) => floor.id !== id));
  };

  const handleFloorInputChange = (id, field, value) => {
    setFloors(
      floors.map((floor) =>
        floor.id === id ? { ...floor, [field]: value } : floor
      )
    );
  };

  const handleImageUpload = (id, file) => {
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!file || !validImageTypes.includes(file.type)) {
      setFloors(
        floors.map((floor) =>
          floor.id === id
            ? {
                ...floor,
                errorMessage:
                  "Please upload a valid image file (JPEG, PNG, GIF).",
              }
            : floor
        )
      );
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFloors(
        floors.map((floor) =>
          floor.id === id
            ? {
                ...floor,
                floorImage: file,
                floorImagePreview: reader.result,
                errorMessage: "",
              }
            : floor
        )
      );
    };
    reader.readAsDataURL(file);
  };
  const handleAddProperty = () => {
    console.log("Property added:", propertyData);
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
      <Card className="add-property-card">
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
                value={propertyData.title}
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
                value={propertyData.description}
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
                value={propertyData.address}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Country"
                name="country"
                value={propertyData.country}
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

            {/* TextField for Location */}
            <Grid item xs={6}>
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
      <Card className="add-property-card">
        <CardContent>
          <Typography variant="h6" className="addProperty-title">
            Location
          </Typography>
          <MapComponent location={location} />
        </CardContent>
      </Card>
      <Card className="add-property-card">
        <CardContent>
          <Typography variant="h6" className="addProperty-title">
            Price
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Price"
                name="price"
                fullWidth
                value={propertyData.price}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card className="add-property-card">
        <CardContent>
          <Typography variant="h6" className="addProperty-title">
            Additional Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Property Type"
                name="propertyType"
                value={propertyData.propertyType}
                onChange={handlePropertyTypeChange}
                select
                fullWidth
                required
                className="custom-text-field"
              >
                {propertyTypes.map((propertyType) => (
                  <MenuItem key={propertyType.name} value={propertyType.name}>
                    {propertyType.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Property Status"
                name="PropertyStatus"
                value={propertyData.PropertyStatus}
                onChange={handlePropertyStatusChange}
                select
                fullWidth
                required
                className="custom-text-field"
              >
                {PropertyStatus.map((PropertyStatus) => (
                  <MenuItem
                    key={PropertyStatus.name}
                    value={PropertyStatus.name}
                  >
                    {PropertyStatus.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Size (SqFt)"
                name="size"
                fullWidth
                value={propertyData.size}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Garages"
                name="garages"
                fullWidth
                value={propertyData.garages}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Bedrooms"
                name="bedrooms"
                fullWidth
                value={propertyData.bedrooms}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Bathrooms"
                name="bathrooms"
                fullWidth
                value={propertyData.bathrooms}
                onChange={handleInputChange}
                required
                className="custom-text-field"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Amenities Section */}
      <Card className="add-property-card">
        <CardContent>
          <Typography variant="h6" className="addProperty-title">
            Amenities
          </Typography>
          <Grid container spacing={3} className="grid-container">
            {amenityCategories.map((category) => (
              <Grid item xs={12} sm={4} key={category.title}>
                <Card className="categories-card">
                  <CardContent>
                    <Typography variant="subtitle1" className="category-title">
                      {category.title}:
                    </Typography>
                    <FormGroup>
                      {category.items.map((item) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={amenities[item.name]}
                              onChange={handleCheckboxChange}
                              name={item.name}
                              sx={{
                                color: amenities[item.name]
                                  ? "var(--Primary)"
                                  : "gray",
                                "&.Mui-checked": {
                                  color: "var(--Primary)",
                                },
                                "& + .MuiFormControlLabel-label": {
                                  color: amenities[item.name]
                                    ? "black"
                                    : "gray",
                                },
                              }}
                            />
                          }
                          label={item.label}
                          key={item.name}
                        />
                      ))}
                    </FormGroup>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      {/* Manage Floors */}
      <Card className="add-property-card">
        <CardContent>
          <Typography variant="h6" className="addProperty-title">
            Floors
          </Typography>
          <h4>Enable Floor Plan: </h4>
          <RadioGroup
            row
            value={enablePlan}
            onChange={(e) => setEnablePlan(e.target.value)}
          >
            <FormControlLabel
              value="enable"
              control={<Radio />}
              label="Enable"
            />
            <FormControlLabel
              value="disable"
              control={<Radio />}
              label="Disable"
            />
          </RadioGroup>

          {enablePlan === "enable" &&
            floors.map((floor) => (
              <Card key={floor.id} className="add-property-card">
                <CardContent>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <CardHeader title={`Floor ${floor.id}`} />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "red",
                          color: "var(--White)",
                          mt: "10px",
                          mb: "20px",
                        }}
                        onClick={() => handleDeleteFloor(floor.id)}
                      >
                        Delete Floor {floor.id}
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                       className="custom-text-field"
                        label="Floor Name"
                        fullWidth
                        value={floor.floorName}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "floorName",
                            e.target.value
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Floor Price (Only Digits)"
                        fullWidth
                        value={floor.floorPrice}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "floorPrice",
                            e.target.value
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Floor Size (Only Digits)"
                        fullWidth
                        value={floor.floorSize}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "floorSize",
                            e.target.value
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Price Postfix"
                        fullWidth
                        value={floor.pricePostfix}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "pricePostfix",
                            e.target.value
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Size Postfix"
                        fullWidth
                        value={floor.sizePostfix}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "sizePostfix",
                            e.target.value
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Bedrooms"
                        fullWidth
                        value={floor.bedrooms}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "bedrooms",
                            e.target.value
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Bathrooms"
                        fullWidth
                        value={floor.bathrooms}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "bathrooms",
                            e.target.value
                          )
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Upload Floor Image"
                        fullWidth
                        onClick={(e) => {
                          e.stopPropagation();
                          document
                            .getElementById(`upload-image-${floor.id}`)
                            .click();
                        }}
                        InputProps={{
                          endAdornment: (
                            <Button
                              variant="contained"
                              component="label"
                              sx={{
                                background: "var(--Primary)",
                                color: "var(--White)",
                                whiteSpace: "nowrap",
                                m: "10px ",
                                p: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "5px",
                              }}
                            >
                              Choose Image
                              <input
                                type="file"
                                hidden
                                id={`upload-image-${floor.id}`}
                                accept="image/*"
                                onChange={(e) =>
                                  handleImageUpload(floor.id, e.target.files[0])
                                }
                              />
                            </Button>
                          ),
                        }}
                      />
                      {floor.errorMessage && (
                        <Typography
                          color="error"
                          variant="body2"
                          style={{ marginTop: "10px" }}
                        >
                          {floor.errorMessage}
                        </Typography>
                      )}
                      {floor.floorImagePreview && (
                        <img
                          src={floor.floorImagePreview}
                          alt={`Floor ${floor.id} Preview`}
                          style={{
                            marginTop: "10px",
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                       className="custom-text-field"
                        label="Description"
                        fullWidth
                        value={floor.description}
                        onChange={(e) =>
                          handleFloorInputChange(
                            floor.id,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
        </CardContent>
        {enablePlan === "enable" && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--Primary)",
              color: "var(--White)",
              mb: "30px",
              ml: "30px",
            }}
            onClick={handleAddFloor}
          >
            Add New Floor
          </Button>
        )}
      </Card>
      <Button
        variant="contained"
        onClick={handleAddProperty}
        sx={{ backgroundColor: "var(--Primary)", color: "var(--White)" }}
      >
        Add Property
      </Button>
    </Box>
  );
}

export default AddProperty;
