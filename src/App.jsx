<<<<<<< Updated upstream
import Layout from "./components/Layout/Layout.jsx";
import Approutes from "./Routes/routes.jsx";

function App() {
  return (
    <>
      <Layout>
        <Approutes/>
      </Layout>
    </>
=======
import { Fragment } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <Home />
        </Box>
        <Footer />
      </Box>
    </Fragment>
>>>>>>> Stashed changes
  );
}

export default App;

