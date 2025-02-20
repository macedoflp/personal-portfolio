// Template.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      {/* Navbar fixa com largura total da viewport */}
      <AppBar position="fixed" sx={{ width: '100vw' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Meu Projeto
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about-me">
            Sobre Mim
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projetos
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contato
          </Button>
        </Toolbar>
      </AppBar>

      {/* Espaçador para compensar a navbar fixa */}
      <Toolbar />

      {/* Conteúdo principal */}
      <Box sx={{ flexGrow: 1, width: '100%' }}>{children}</Box>

      {/* Footer com largura total da viewport */}
      <Box
        component="footer"
        sx={{
          width: '100vw',
          py: 2,
          backgroundColor: (theme) => theme.palette.primary.main,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Meu Projeto. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Template;
