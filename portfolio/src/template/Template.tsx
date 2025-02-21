import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Menu as MenuIcon, LinkedIn, GitHub, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        background: 'linear-gradient(45deg, rgba(10, 25, 47, 0.95) 30%, rgba(23, 42, 69, 0.95) 90%)',
        height: '100%',
      }}
    >
      <Typography variant="h6" sx={{ my: 2, color: '#ccd6f6' }}>
        Portfolio
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/">
            <ListItemText primary="Home" sx={{ color: '#ccd6f6' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/about-me">
            <ListItemText primary="About Me" sx={{ color: '#ccd6f6' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/projects">
            <ListItemText primary="Projects" sx={{ color: '#ccd6f6' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/contact">
            <ListItemText primary="Contact" sx={{ color: '#ccd6f6' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '99.1vw',
        overflowX: 'hidden',
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: '100vw',
          background: 'linear-gradient(45deg, rgba(10, 25, 47, 0.95) 30%, rgba(23, 42, 69, 0.95) 90%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ ml: '2rem', color: '#ccd6f6', flexGrow: 1 }}>
            Portfolio
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Button
                sx={{
                  color: '#ccd6f6',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { color: '#00b4d8', background: 'rgba(0, 180, 216, 0.1)' },
                  transition: 'all 0.3s ease',
                }}
                color="inherit"
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                sx={{
                  color: '#ccd6f6',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { color: '#00b4d8', background: 'rgba(0, 180, 216, 0.1)' },
                  transition: 'all 0.3s ease',
                }}
                color="inherit"
                component={Link}
                to="/about-me"
              >
                About Me
              </Button>
              <Button
                sx={{
                  color: '#ccd6f6',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { color: '#00b4d8', background: 'rgba(0, 180, 216, 0.1)' },
                  transition: 'all 0.3s ease',
                }}
                color="inherit"
                component={Link}
                to="/projects"
              >
                Projects
              </Button>
              <Button
                sx={{
                  color: '#ccd6f6',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { color: '#00b4d8', background: 'rgba(0, 180, 216, 0.1)' },
                  transition: 'all 0.3s ease',
                }}
                color="inherit"
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Melhora a performance em dispositivos mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Toolbar />
      <Box sx={{ flexGrow: 1, width: '100%' }}>{children}</Box>

      <Box
        sx={{
          background: 'linear-gradient(45deg, #0a192f, #172a45)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        component="footer"
      >
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
