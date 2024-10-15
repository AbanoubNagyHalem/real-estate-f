// import  { useState, useEffect } from 'react';
// import { Card, CardContent, CardMedia, Typography, Grid, Button, Box, Divider } from '@mui/material';
// import axios from 'axios';

// const MyProperties = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     // Fetch properties from backend (Replace with actual API call)
//     axios.get('/api/properties')
//       .then(response => {
//         setProperties(response.data.properties);
//       })
//       .catch(error => {
//         console.error('Error fetching properties:', error);
//       });
//   }, []);

//   return (
//     <Grid container spacing={3}>
//       {MyProperties.map((property) => (
//         <Grid item xs={12} sm={6} md={4} key={property.id}>
//           <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={property.image}
//               alt={property.title}
//               sx={{ borderRadius: '4px 4px 0 0' }}  // Rounded top corners for image
//             />
//             <CardContent sx={{ p: 2, textAlign: 'left' }}>
//               {/* Property Title */}
//               <Typography variant="h6" component="div" fontWeight="bold" color="text.primary" gutterBottom>
//                 {property.title}
//               </Typography>

//               {/* Property Location */}
//               <Typography variant="body2" color="text.secondary">
//                 {property.location}
//               </Typography>

//               {/* Divider for visual separation */}
//               <Divider sx={{ my: 1 }} />

//               {/* Property Price */}
//               <Typography variant="h5" component="div" fontWeight="bold" color="primary" gutterBottom>
//                 ${property.price.toLocaleString()}
//               </Typography>

//               {/* Property Details */}
//               <Box display="flex" justifyContent="space-between" mt={1}>
//                 <Typography variant="body2" color="text.secondary">
//                   {property.bedrooms} Beds
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {property.bathrooms} Baths
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {property.area} sq ft
//                 </Typography>
//               </Box>

//               {/* Property Status */}
//               <Typography
//                 variant="body2"
//                 fontWeight="bold"
//                 color={property.status === 'For Sale' ? 'green' : 'orange'}
//                 mt={2}
//               >
//                 {property.status}
//               </Typography>

//               {/* Buttons for Edit/Delete */}
//               <Box mt={2} display="flex" justifyContent="space-between">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ textTransform: 'none', boxShadow: 1 }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   sx={{ textTransform: 'none' }}
//                 >
//                   Delete
//                 </Button>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default MyProperties;


import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Button, Grid, Container } from "@mui/material";
import {  Typography } from "@mui/material";

import MyPropertiesCard from "../../components/MyPropertiesCard/MyPropertiesCard"; // Adjust the path

const MyProperties = ({item}) => {
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
    <Grid container spacing={3}>
    {states && states.length > 0 ? (
      states.slice(0, visibleItems).map((item) => (
        <Grid item xs={12} sm={12} md={6} key={item._id}>
          <MyPropertiesCard item={item} />
        </Grid>
      ))
    ) : (
      <Typography variant="body1" sx={{ margin: "20px auto" }}>
        No posts found
      </Typography>
    )}
  </Grid>
);
};

export default MyProperties;

    // <Grid container spacing={3}>
    //   {properties.map((property) => (
    //     <Grid item xs={12} sm={6} md={4} key={property.id}>
    //       {/* Pass each property to the MyPropertiesCard component */}
    //       <MyPropertiesCard property={property} />
    //     </Grid>
    //   ))}
    // </Grid>
  
