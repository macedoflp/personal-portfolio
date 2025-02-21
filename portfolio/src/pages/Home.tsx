import { Container, Typography, Button, Box, IconButton, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { ArrowDownward, LinkedIn, GitHub, Description } from "@mui/icons-material";
import { Particles } from "react-tsparticles";
import { useTheme } from "@mui/material/styles";

const theme = useTheme();

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  background: "linear-gradient(45deg, #0a192f, #172a45, #203354)",
  backgroundSize: "400% 400%",
  animation: `${gradientAnimation} 15s ease infinite`,
  color: "#fff",
  position: "relative",
  overflow: "hidden",
}));

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const ScrollIndicator = styled(Box)({
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  animation: `${fadeInUp} 2s infinite`,
});

const Home = () => {
  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroSection id="home">
      <Particles
        options={{
          particles: {
            number: { value: 50 },
            color: { value: "#90e0ef" },
            opacity: { value: 0.5 },
            size: { value: 1 },
            move: { enable: true, speed: 1 },
          },
        }}
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      <Container maxWidth="md">
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant={isMobile ? "h5" : "h6"}
            sx={{
              color: "#00b4d8",
              letterSpacing: "3px",
              mb: 2,
              animation: `${fadeInUp} 0.8s ease-out`,
            }}
          >
            Hi, my name is
          </Typography>

          <GradientText
            variant={isMobile ? "h3" : "h1"}
            fontWeight="800"
            gutterBottom
            sx={{
              mb: 3,
              animation: `${fadeInUp} 0.8s ease-out`,
              animationDelay: "0.2s",
            }}
          >
            Evanildo Macêdo
          </GradientText>

          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{
              color: "#ccd6f6",
              mb: 4,
              animation: `${fadeInUp} 0.8s ease-out`,
              animationDelay: "0.4s",
            }}
          >
            I build digital experiences.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "#8892b0",
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: 1.6,
              mb: 4,
              animation: `${fadeInUp} 0.8s ease-out`,
              animationDelay: "0.6s",
            }}
          >
            Software developer and UI/UX designer specializing in creating exceptional digital experiences. Currently focused on building innovative solutions through MDK Studio.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
            <Button
              variant="contained"
              startIcon={<Description />}
              href="projects"
              sx={{
                background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
                color: "#0a192f",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(0, 180, 216, 0.3)",
                },
                transition: "all 0.3s ease",
                animation: `${fadeInUp} 0.8s ease-out`,
                animationDelay: "0.8s",
              }}
            >
              View Work
            </Button>

            <Button
              variant="outlined"
              href="contact"
              sx={{
                color: "#00b4d8",
                borderColor: "#00b4d8",
                "&:hover": {
                  background: "rgba(0, 180, 216, 0.1)",
                  borderColor: "#90e0ef",
                },
                animation: `${fadeInUp} 0.8s ease-out`,
                animationDelay: "1s",
              }}
            >
              Get in Touch
            </Button>
          </Box>

          <Box sx={{ mt: 4, animation: `${fadeInUp} 0.8s ease-out`, animationDelay: "1.2s" }}>
            <IconButton href="https://www.linkedin.com/in/macedoflp" target="_blank">
              <LinkedIn sx={{ color: "#90e0ef", fontSize: 32 }} />
            </IconButton>
            <IconButton href="https://github.com/macedoflp" target="_blank">
              <GitHub sx={{ color: "#90e0ef", fontSize: 32 }} />
            </IconButton>
          </Box>
        </Box>

        <ScrollIndicator>
          <ArrowDownward sx={{ color: "#90e0ef", fontSize: 40, animation: `${fadeInUp} 2s infinite` }} />
        </ScrollIndicator>
      </Container>
    </HeroSection>
  );
};

export default Home;