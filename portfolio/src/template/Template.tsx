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

  // Função para rolagem suave ao clicar em links com ID
  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
      <a
        href='#home'
        onClick={handleSmoothScroll}
        style={{ textDecoration: 'none', marginTop: 2, marginBottom: 2, color: '#ccd6f6', fontSize: '1.5rem' }}
      >
        Portfolio
      </a>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href='#home' onClick={handleSmoothScroll}>
            <ListItemText primary="Home" sx={{ color: '#ccd6f6' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href='#about-me' onClick={handleSmoothScroll}>
            <ListItemText primary="About Me" sx={{ color: '#ccd6f6' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href='#projects' onClick={handleSmoothScroll}>
            <ListItemText primary="Projects" sx={{ color: '#ccd6f6' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} href='#contact' onClick={handleSmoothScroll}>
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
          <a
            href="#home"
            onClick={handleSmoothScroll}
            style={{ textDecoration: 'none', marginLeft: '2rem', color: '#ccd6f6', flexGrow: 1, fontSize: '1.5rem' }}
          >
            Portfolio
          </a>
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
                href='#home'
                onClick={handleSmoothScroll}
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
                href='#about-me'
                onClick={handleSmoothScroll}
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
                href='#projects'
                onClick={handleSmoothScroll}
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
                href='#contact'
                onClick={handleSmoothScroll}
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
