import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Marelle-Timeline', 'Monthly-Quiz', 'Memorable-Moments', "Monthly-Puzzle", "Contract", "Birthday-Letter"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: '#8AAAE5'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
            src="https://i.pinimg.com/originals/80/5d/92/805d9290bf80860153c6804cc0ed2d3a.gif"
            alt="Navbar GIF"
            style={{ maxHeight: '40px', marginRight: '10px' }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`${page}`} style={{ textDecoration: 'none', color: '#8AAAE5' }}>
                        {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', fontFamily : 'Martian Mono', textDecoration: 'none'}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily : 'Martian Mono', textDecoration: 'none', mx: { xs: 1, md: 2 } }}
              >
                <Link to={`/Marelle/${page}`} style={{ textDecoration: 'none', fontWeight: '600'}}>
                    {page}
                 </Link>
              </Button>
            ))}
          </Box>
          <img
            src="https://i.pinimg.com/originals/44/a8/da/44a8dabf0e4bf6e2616cd0f6d0ce5912.gif"
            alt="Navbar GIF"
            style={{ maxHeight: '40px', marginRight: '10px' }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
