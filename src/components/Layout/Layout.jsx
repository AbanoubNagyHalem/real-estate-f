/* eslint-disable react/prop-types */
// import Container from "@mui/material/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <Header />
        <Box>{props.children}</Box>
      {/* <Container minwidth="sm">
      </Container> */}
      <Footer />
    </>
  );
};

export default Layout;
