import { Box, Container, Typography } from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const Contact = () => {
  return (
    <>
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
        <Typography variant="h1">Contact Us</Typography>
        <Breadcrumb />
      </Box>
      <Container minwidth="sm"></Container>
    </>
  );
};

export default Contact;
