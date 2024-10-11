import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


import React from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };
console.log(formData);
  
  const handleSubmit = async (e) => { //handle the form submition
    e.preventDefault();

    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe
      }),
    });
    const data = await res.json()
    if(res.ok) {
      if (formData.rememberMe) {
        localStorage.setItem('token', data.token)
      } else {
        sessionStorage.setItem('token', data.token)
      }
    }
    console.log('Login successful:', data);
  }
  return(
    <>
      <div>
          <Box component="section" sx={{ p: 2, borderRadius: '16px', border: '1px solid', borderColor: 'primary.main', maxWidth: '300px', margin: '100px auto'}}>
            <form onSubmit={handleSubmit} className='form'>
            <Stack spacing={3}>
              <h1 align="center">Log In</h1>
              {/* <label htmlFor="email">Your Email:</label> */}
              <TextField id="email" type='email' value={formData.email} label="Your Email:"  variant="outlined" size="small" onChange={handleChange} required/>
              {/* <label htmlFor="password">Password:</label> */}
              <TextField id="password" type='password' value={formData.password} label="Password:"  variant="outlined" size="small" onChange={handleChange} required/>
              <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                <FormControlLabel control={<Checkbox id='rememberMe' checked={formData.rememberMe} onChange={handleChange} size="small"/>} label="Remember me" />
                <Link to="/forgot-password" color='primary.main'>
                  <span className='forgot-password'>Forgot Password?</span>
                </Link>
              </Stack>
              <Button type='submit' variant="contained" sx={{backgroundColor: 'secondary.main'}}>Login</Button>
            </Stack>
            </form>
            <Box component="section" sx={{marginY: 1, textAlign: 'center'}}>
              <span>Not registered yet? <Link to="/register">Sign Up</Link></span>
            </Box>
          </Box>
      </div>
    </>
  )
}

export default Login