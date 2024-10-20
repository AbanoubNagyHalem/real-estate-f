import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './ResetPassword.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ResetPassword = () => {
    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
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

    const res = await fetch('/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword
      }),
    });
    const data = await res.json()
    navigate('/login')
    console.log(data);
  }
  return(
    <>
      <div>
          <Box component="section" sx={{ p: 2, borderRadius: '16px', border: '1px solid', borderColor: 'primary.main', maxWidth: '300px', margin: '100px auto'}}>
            <form onSubmit={handleSubmit} className='form'>
            <Stack spacing={3}>
              <h1 align="center">Reset Password</h1>
              <TextField id="email" type='email' value={formData.email} label="Your Email:"  variant="outlined" size="small" onChange={handleChange} required/>
              <TextField id="otp" type='number' value={formData.otp} label="otp:"  variant="outlined" size="small" onChange={handleChange} required/>

              <TextField id="newPassword" type='password' value={formData.newPassword} label="new Password:"  variant="outlined" size="small" onChange={handleChange} required/>
              <TextField id="confirmPassword" type='password' value={formData.confirmPassword} label="confirm Password:"  variant="outlined" size="small" onChange={handleChange} required/>

              <Button type='submit' variant="contained" sx={{backgroundColor: 'secondary.main'}}>Update</Button>
            </Stack>
            </form>
          </Box>
      </div>
    </>
  )
}
export default ResetPassword;
