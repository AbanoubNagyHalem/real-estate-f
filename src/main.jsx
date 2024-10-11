import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Registration from "./components/Registration/Registration.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.jsx";

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
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
