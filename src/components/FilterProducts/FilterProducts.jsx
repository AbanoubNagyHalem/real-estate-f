import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  Slider,
  Button,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { fetchFilteredPosts } from "../../redux/filterProductSlice";

function FilterProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    bedroom: searchParams.get("bedroom") || "",
    bathroom: searchParams.get("bathroom") || "",
    amenities: searchParams.get("amenities") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 10000,
  });

  const amenitiesOptions = ["Pool", "Gym", "Parking", "Garden", "Elevator"];
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  useEffect(()=>{
    setPriceRange([+query.minPrice, +query.maxPrice])
  },[])

  const { filteredPosts, loading, error } = useSelector(
    (state) => state.filteredPosts
  );

  const handleToggleChange = (event, newType) => {
    setQuery((prev) => ({
      ...prev,
      type: newType || "", 
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (event, newValue) => {
    setQuery((prev) => ({
      ...prev,
      minPrice: newValue[0],
      maxPrice: newValue[1],
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setQuery((prev) => ({
      ...prev,
      amenities: checked
        ? [...(prev.amenities || []), name]
        : prev.amenities.filter((amenity) => amenity !== name),
    }));
  };

  const handleFilter = async () => {
    setSearchParams(query);
    console.log(query);
    
    const filter = await dispatch(fetchFilteredPosts(query));
    console.log(filter);
    
  };

  return (
    <Box
      className="filter"
      p={3}
      boxShadow={3}
      borderRadius={2}
      sx={{ maxWidth: 400, marginTop: "1em" }}
    >
      <Box mb={2}>
        <Typography variant="body1">Type</Typography>
        <ToggleButtonGroup
          value={query.type}
          exclusive
          onChange={handleToggleChange}
          fullWidth
        >
          <ToggleButton value="buy">Buy</ToggleButton>
          <ToggleButton value="rent">Rent</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box mb={2}>
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          name="city"
          placeholder="City Location"
          onChange={handleChange}
          value={query.city}
        />
      </Box>

      {/* <Box mb={2}>
        <Typography variant="body1">Type</Typography>
        <Select
          name="type"
          variant="outlined"
          fullWidth
          value={query.type}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="buy">Buy</MenuItem>
          <MenuItem value="rent">Rent</MenuItem>
        </Select>
      </Box> */}

      <Box mb={2}>
        <Typography variant="body1">Property</Typography>
        <Select
          name="property"
          fullWidth
          value={query.property}
          onChange={handleChange}
          displayEmpty
          variant="outlined"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="apartment">Apartment</MenuItem>
          <MenuItem value="house">House</MenuItem>
          <MenuItem value="villa">Villa</MenuItem>
          <MenuItem value="studio">Studio</MenuItem>
        </Select>
      </Box>

      <Box mb={2}>
        <TextField
          label="Bedrooms"
          variant="outlined"
          fullWidth
          type="number"
          name="bedroom"
          placeholder="Any"
          onChange={handleChange}
          value={query.bedroom}
        />
      </Box>

      <Box mb={2}>
        <TextField
          label="Bathrooms"
          variant="outlined"
          type="number"
          fullWidth
          name="bathroom"
          placeholder="Any"
          onChange={handleChange}
          value={query.bathroom}
        />
      </Box>
      <Box mb={2}>
        <Typography variant="body1">Amenities</Typography>
        <FormGroup>
          {amenitiesOptions.map((amenity) => (
            <FormControlLabel
              key={amenity}
              control={
                <Checkbox
                  name={amenity}
                  onChange={handleCheckboxChange}
                  checked={query.amenities?.includes(amenity) || false}
                />
              }
              label={amenity}
            />
          ))}
        </FormGroup>
      </Box>

      <Box mb={2}>
        <Typography variant="body1">Price Range</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={100000}
          max={6000000}
          step={50000}
        />
      </Box>

      <Button
        variant="contained"
        onClick={handleFilter}
        sx={{ background: "#EFA00F", width: 1 }}
      >
        Filter
      </Button>
    </Box>
  );
}

export default FilterProducts;
