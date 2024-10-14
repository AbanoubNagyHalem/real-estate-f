/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { TextField, Stack, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      sessionStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
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
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <h1 align="center">Registration</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {[
            "username",
            "email",
            "password",
            "confirmPassword",
            "phoneNumber",
          ].map((field, index) => (
            <TextField
              key={index}
              id={field}
              type={field.includes("password") ? "password" : "text"}
              label={field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              variant="outlined"
              size="small"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          ))}
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "secondary.main" }}
          >
            Register
          </Button>
        </Stack>
      </form>
      <Box component="section" sx={{ marginY: 1, textAlign: "center" }}>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </Box>
    </Box>
  );
};

export default Registration;
