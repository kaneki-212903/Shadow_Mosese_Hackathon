import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap component="div">
          Application Name
        </Typography>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '30%' }}>
          <InputBase
            sx={{ ml: 1, flex: 1, width: '100%' }}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
