import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Login.css'
import { Link } from 'react-router-dom';


const Login = () => {

  return(
    <>
      <div>
        <form className='form'>
          <Box component="section" sx={{ p: 2, borderRadius: '16px', border: '1px solid', borderColor: 'primary.main'}}>
            <h1 align="center">Log In</h1>
            <Stack spacing={2}>
              <label for="email">Your Email:</label>
              <TextField id="email" type='email'  variant="outlined" size="small"/>
              <label for="pass">Password:</label>
              <TextField id="pass" type='password'  variant="outlined" size="small"/>
              <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                <FormControlLabel control={<Checkbox size="small"/>} label="Remember me" />
                <Link to="" color='primary.main'>
                  <span>Forgot Password?</span>
                </Link>
              </Stack>
              <Button type='submit' variant="contained" sx={{backgroundColor: 'secondary.main'}}>Login</Button>
              <span align='center'>Not registered yet? <Link to="">Sign Up</Link></span>

            </Stack>
          </Box>
        </form>

      </div>
    </>
  )
};

export default Login;
