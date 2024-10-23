import React, { useState } from "react";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import { Box, Button, Container, Grid, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Helmet } from 'react-helmet-async'; // Import Helmet

const OurServives = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
          <Helmet>
        <title>Our Services - Property Hub Real Estate</title>
        <meta
          name="description"
          content="Discover Property Hub Real Estate services, including buying, renting, and selling homes. We offer expert guidance to help you find your dream home or list your property with ease."
        />
      </Helmet>

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
        <Typography variant="h1">Our Services</Typography>
        <Breadcrumb />
      </Box>
      <Container sx={{ paddingTop: 12, paddingBottom: 12 }}>
        <Box sx={{ paddingBottom: 12 }}>
          <Box sx={{ textAlign: "center", paddingBottom: 6 }}>
            <Typography variant="subtitle1" sx={{ color: "#EFA00F" }}>
              Our Services
            </Typography>
            <Typography variant="h3">What We Do?</Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 6,
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 4,
                padding: 4,
              }}
            >
              <AddHomeWorkOutlinedIcon
                sx={{ width: "80px", height: "80px", textAlign: "left" }}
              />
              <Typography variant="h5">Buy A New Home</Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </Typography>
              <Button
                href="/properties"
                variant="contained"
                sx={{
                  background: "#EFA00F",
                  color: "#fff",
                  padding: "12px 30px",
                }}
              >
                Find a Home
              </Button>
            </Card>

            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 4,
                padding: 4,
              }}
            >
              <AddHomeWorkOutlinedIcon
                sx={{ width: "80px", height: "80px", textAlign: "left" }}
              />
              <Typography variant="h5">Rent a home </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </Typography>
              <Button
                href="/properties"
                variant="contained"
                sx={{
                  background: "#EFA00F",
                  color: "#fff",
                  padding: "12px 30px",
                }}
              >
                Find a Rental
              </Button>
            </Card>

            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 4,
                padding: 4,
              }}
            >
              <AddHomeWorkOutlinedIcon
                sx={{ width: "80px", height: "80px", textAlign: "left" }}
              />
              <Typography variant="h5">Sell a home </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </Typography>
              <Button
                href="/user-dashboard"
                variant="contained"
                sx={{
                  background: "#EFA00F",
                  color: "#fff",
                  padding: "12px 30px",
                }}
              >
                Submit Property
              </Button>
            </Card>
          </Grid>
        </Box>

        <Box sx={{ textAlign: "center", paddingBottom: 4 }}>
          <Typography variant="subtitle1" sx={{ color: "#EFA00F" }}>
            Faqs
          </Typography>
          <Typography variant="h3">Quick answers to questions</Typography>
        </Box>

        <Box sx={{ paddingBottom: 16 }}>
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
              Why should I use your services?
            </AccordionSummary>
            <AccordionDetails>
              Once your account is set up and you've familiarized yourself with
              the platform, you are ready to start using our services. Whether
              it's accessing specific features, making transactions, or
              utilizing our tools, you'll find everything you need at your
              fingertips.
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
              How do I get started with your services?
            </AccordionSummary>
            <AccordionDetails>
              Once your account is set up and you've familiarized yourself with
              the platform, you are ready to start using our services. Whether
              it's accessing specific features, making transactions, or
              utilizing our tools, you'll find everything you need at your
              fingertips.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ p: 1 }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              How secure are your services
            </AccordionSummary>
            <AccordionDetails>
              Once your account is set up and you've familiarized yourself with
              the platform, you are ready to start using our services. Whether
              it's accessing specific features, making transactions, or
              utilizing our tools, you'll find everything you need at your
              fingertips.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ p: 1 }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Is there customer support available?
            </AccordionSummary>
            <AccordionDetails>
              Once your account is set up and you've familiarized yourself with
              the platform, you are ready to start using our services. Whether
              it's accessing specific features, making transactions, or
              utilizing our tools, you'll find everything you need at your
              fingertips.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ p: 1 }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How can I update my account information?
            </AccordionSummary>
            <AccordionDetails>
              Once your account is set up and you've familiarized yourself with
              the platform, you are ready to start using our services. Whether
              it's accessing specific features, making transactions, or
              utilizing our tools, you'll find everything you need at your
              fingertips.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default OurServives;
