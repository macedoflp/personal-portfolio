// Template.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '99vw',
        overflowX: 'hidden',
      }}
    >

      <AppBar position="fixed" sx={{ width: '100vw',   background: 'linear-gradient(45deg, rgba(10, 25, 47, 0.95) 30%, rgba(23, 42, 69, 0.95) 90%)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', }}>
        <Toolbar>
          <Typography variant="h6" sx={{ml: '2rem',color: '#ccd6f6', flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button sx={{  color: '#ccd6f6', textTransform: 'none', fontSize: '1rem', '&:hover': {color: '#00b4d8',background: 'rgba(0, 180, 216, 0.1)',},transition: 'all 0.3s ease',}} color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button sx={{  color: '#ccd6f6', textTransform: 'none', fontSize: '1rem', '&:hover': {color: '#00b4d8',background: 'rgba(0, 180, 216, 0.1)',},transition: 'all 0.3s ease',}} color="inherit" component={Link} to="/about-me">
            About Me
          </Button>
          <Button sx={{  color: '#ccd6f6', textTransform: 'none', fontSize: '1rem', '&:hover': {color: '#00b4d8',background: 'rgba(0, 180, 216, 0.1)',},transition: 'all 0.3s ease',}} color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button sx={{  color: '#ccd6f6', textTransform: 'none', fontSize: '1rem', '&:hover': {color: '#00b4d8',background: 'rgba(0, 180, 216, 0.1)',},transition: 'all 0.3s ease',}} color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>


      <Toolbar />


      <Box sx={{ flexGrow: 1, width: '100%' }}>{children}</Box>


      <Box sx={{ background: 'linear-gradient(45deg, #0a192f, #172a45)', borderTop: '1px solid rgba(255, 255, 255, 0.1)',}} component="footer">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={4} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ color: '#00b4d8', mb: 2 }}>
                Let's Connect
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton href="https://www.linkedin.com/in/macedoflp" target="_blank" sx={{ color: '#90e0ef' }}>
                  <LinkedIn fontSize="large" />
                </IconButton>
                <IconButton href="https://github.com/macedoflp" target="_blank" sx={{ color: '#90e0ef' }}>
                  <GitHub fontSize="large" />
                </IconButton>
                <IconButton href="mailto:macedooflp@gmail.com" sx={{ color: '#90e0ef' }}>
                  <Email fontSize="large" />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="body2" sx={{ color: '#8892b0' }}>
                © {new Date().getFullYear()} Evanildo Macêdo
              </Typography>
              <Typography variant="body2" sx={{ color: '#8892b0' }}>
                Built with React & Material-UI
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Template;
