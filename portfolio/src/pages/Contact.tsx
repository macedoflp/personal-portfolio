import { Container, Typography, Box, TextField, Button, Grid, IconButton, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { Send, Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import { Particles } from "react-tsparticles";
import { useTheme } from '@mui/material/styles';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  position: "relative",
  background: "linear-gradient(45deg, #0a192f, #172a45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: theme.spacing(2),
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  paddingBottom: theme.spacing(6),
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 16px 30px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(3),
    margin: theme.spacing(2),
    maxWidth: "calc(100% - 32px)", // Garante que a box não extrapole a tela
  },
}));

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Contact = () => {
  const theme = useTheme();
  // Utiliza o breakpoint "sm" para dispositivos móveis
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ContactContainer id="contact">
      <Particles
        options={{
          particles: {
            number: { value: 40 },
            color: { value: "#90e0ef" },
            opacity: { value: 0.5 },
            size: { value: 1 },
            move: { enable: true, speed: 1 },
          },
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />

      <Container>
        <FormBox>
          <GradientText
            variant={isMobile ? "h4" : "h2"}
            align="center"
            gutterBottom
            sx={{
              mb: 4,
              fontWeight: 800,
              animation: `${fadeInUp} 0.8s ease-out`,
            }}
          >
            Get in Touch
          </GradientText>

          <Grid container spacing={isMobile ? 2 : 6} sx={{ padding: isMobile ? 2 : 4,}} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  "& .MuiTextField-root": {
                    marginBottom: 2,
                    "& label": { color: "#90e0ef" },
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": { borderColor: "rgba(144, 224, 239, 0.3)" },
                      "&:hover fieldset": { borderColor: "#00b4d8" },
                      "&.Mui-focused fieldset": { borderColor: "#00b4d8" },
                    },
                  },
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ animation: `${fadeInUp} 0.8s ease-out` }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ animation: `${fadeInUp} 0.8s ease-out` }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  InputLabelProps={{ shrink: true }}
                  sx={{ animation: `${fadeInUp} 0.8s ease-out` }}
                />
                <Button
                  variant="contained"
                  endIcon={<Send />}
                  fullWidth
                  sx={{
                    background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
                    color: "#0a192f",
                    fontWeight: "bold",
                    py: isMobile ? 1.5 : 2,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 5px 15px rgba(0, 180, 216, 0.3)",
                    },
                    transition: "all 0.3s ease",
                    animation: `${fadeInUp} 0.8s ease-out`,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  pl: isMobile ? 0 : 6,
                  animation: `${fadeInUp} 0.8s ease-out`,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <Typography variant="h5" sx={{ color: "#00b4d8", mb: 3 }}>
                  Contact Information
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Button
                    startIcon={<Email sx={{ color: "#90e0ef" }} />}
                    href="mailto:macedooflp@gmail.com"
                    sx={{ color: "#ccd6f6", textTransform: "none" }}
                  >
                    macedooflp@gmail.com
                  </Button>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Button
                    startIcon={<Phone sx={{ color: "#90e0ef" }} />}
                    href="tel:+55098987382328"
                    sx={{ color: "#ccd6f6", textTransform: "none" }}
                  >
                    +55 (98) 987382328
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}
                >
                  <IconButton href="https://www.linkedin.com/in/macedoflp" target="_blank">
                    <LinkedIn sx={{ color: "#90e0ef", fontSize: 32 }} />
                  </IconButton>
                  <IconButton href="https://github.com/macedoflp" target="_blank">
                    <GitHub sx={{ color: "#90e0ef", fontSize: 32 }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </FormBox>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
