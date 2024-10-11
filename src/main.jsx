import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from "./App.jsx";
import "./index.css";


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

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
     <App></App>
    </BrowserRouter>
  </ThemeProvider>
);