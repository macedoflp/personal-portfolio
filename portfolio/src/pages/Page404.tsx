import { Container, Typography, Button, Box, Grid, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { styled, keyframes } from "@mui/system";
import { Particles } from "react-tsparticles";
import { useTheme } from "@mui/material/styles";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Page404 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme as any).breakpoints.down('sm'));

  return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #0a192f, #172a45)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Particles
          options={{
            particles: {
              number: { value: 30 },
              color: { value: "#90e0ef" },
              opacity: { value: 0.5 },
              size: { value: 1 },
              move: { enable: true, speed: 1 },
            },
          }}
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <GradientText
                variant={isMobile ? "h1" : "h1"}
                sx={{
                  fontSize: isMobile ? '8rem' : '12rem',
                  fontWeight: 800,
                  animation: `${float} 4s ease-in-out infinite`,
                }}
              >
                404
              </GradientText>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                sx={{
                  color: '#ccd6f6',
                  mb: 2,
                  fontWeight: 'bold',
                }}
              >
                Oops! Page Not Found
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 4,
                  fontSize: isMobile ? '1rem' : '1.1rem',
                }}
              >
                The page you're looking for might be private or doesn't exist. 
                Please check the URL or contact the administrator for access.
              </Typography>

              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  background: 'linear-gradient(45deg, #00b4d8, #90e0ef)',
                  color: '#0a192f',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 15px rgba(0, 180, 216, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Return to Home
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
};

export default Page404;