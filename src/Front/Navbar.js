import React from 'react'
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material'
import Menubar from '@mui/icons-material/MenuOpen'
import {NavLink,Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <AppBar position='static'>
      <Toolbar>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo'> 
        <Menubar/>
      </IconButton>
      <Typography variant='h6' component='div' sx={{ flexGrow:2}}>
        NAVBAR
      </Typography>
      <Stack direction='row' spacing={2}>
        {/* <Button color='inherit'>Weather</Button>
        <Button color='inherit'>News</Button>
        <Button color='inherit'>Stock</Button> */}
      <NavLink path='/weather'>Weather</NavLink>
      <NavLink path='/news'>News</NavLink>
      <NavLink path='/stock'>Stock</NavLink>
      
      </Stack>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar