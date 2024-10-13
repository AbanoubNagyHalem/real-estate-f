/* eslint-disable react/no-unknown-property */
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    //handle the form submition
    e.preventDefault();

    const res = await fetch("/auth/forget-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
      }),
    });
    const data = await res.json();
    navigate("/reset-password");
    console.log(data);
  };
  return (
    <>
      <div>
        <Box
          component="section"
          sx={{
            p: 2,
            borderRadius: "16px",
            border: "1px solid",
            borderColor: "primary.main",
            maxWidth: "300px",
            margin: "100px auto",
          }}
        >
          <form onSubmit={handleSubmit} className="form">
            <Stack spacing={3}>
              <h1 align="center">Forgot Password</h1>
              {/* <label htmlFor="email">Your Email:</label> */}
              <TextField
                id="email"
                type="email"
                value={formData.email}
                label="Your Email:"
                variant="outlined"
                size="small"
                onChange={handleChange}
                required
              />
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              ></Stack>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "secondary.main" }}
              >
                Send Code
              </Button>
            </Stack>
          </form>
          <Box component="section" sx={{ marginY: 1, textAlign: "center" }}>
            <Link to="/login">
              <span>Go Back to login</span>
            </Link>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default ForgotPassword;
