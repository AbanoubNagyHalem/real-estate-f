import { Box, Container, Grid, Typography, Card, TextField, Button } from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { LocationOn, Phone, Email } from "@mui/icons-material";


const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <Box
        boxShadow={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Typography variant="h2"sx={{  color:'#21616A' }} >Contact Us</Typography>
        <Breadcrumb />
      </Box>


      {/* Main Container */}
      <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '2rem' , color:'#21616A' }}>
          Let's be in touch
        </Typography>


        {/* Contact Information Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: 2 }}>
              <LocationOn sx={{ fontSize: 40, color: '#21616A' }} />
              <Typography variant="h6" sx={{ mt: 2 ,color:'#21616A' }}>Address</Typography>
              <Typography sx={{ color:'#21616A' }} >101 E 129th St, East Chicago, IN 46312</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: 2 ,  color: '#21616A'  }}>
              <Phone sx={{ fontSize: 40, color: '#21616A' }} />
              <Typography variant="h6" sx={{ mt: 2 , color:'#21616A' }}>Phone</Typography>
              <Typography sx={{ color:'#21616A' }} >1-333-345-6868</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', padding: 2 }}>
              <Email sx={{ fontSize: 40, color: '#21616A' }} />
              <Typography variant="h6" sx={{ mt: 2 , color:'#21616A' }}>Email</Typography>
              <Typography sx={{ color:'#21616A' }} >hi.themesffat@gmail.com</Typography>
            </Card>
          </Grid>
        </Grid>


        {/* Contact Form and Map Section */}
        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 3 }}>
              <Typography variant="h5" sx={{ mb: 3 , color: '#21616A' }}>Drop Us A Line</Typography>
              <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2  }} />
              <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2  }} />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 ,color: '#FFFFFF' }}>Contact Us</Button>
            </Card>
          </Grid>


          {/* Embedded Map */}
          <Grid item xs={12} md={6} sx={{ mt: 5  }}>
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=dominican%20university%20of%20california&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0  }}
              allowFullScreen=""
              loading="lazy"

            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};


export default Contact;
