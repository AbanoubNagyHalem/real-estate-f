import { Fragment } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#21616A',  // your primary color
    },
    secondary: {
      main: '#EFA00F',  // your secondary color
    },
    error: {
      main: '#e74c3c',  // your error color
    },
  },
});

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        <Login/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
