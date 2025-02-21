import { Container, Typography, Box, Avatar, Grid, Button, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { LinkedIn, GitHub, Description, Code, DesignServices, Palette, DataObject } from "@mui/icons-material";
import { Particles } from "react-tsparticles";
const theme = useTheme();

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled(Box)({
  minHeight: "100vh",
  position: "relative",
  background: "linear-gradient(45deg, #0a192f, #172a45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  padding: theme.spacing(4),
  borderRadius: "24px",
  boxShadow: "0 16px 30px rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  animation: `${fadeInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1)`,
}));

const AnimatedAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  border: "4px solid",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const SkillBadge = styled(Box)({
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  background: "rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    background: "rgba(255, 255, 255, 0.2)",
  },
});

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const handleDownload = () => {
    // Cria um link temporário
    const link = document.createElement('a');
    link.href = '../data/curriculum-Evanildo.pdf'; // Certifique-se de que o caminho esteja correto
    link.download = 'curriculum-Evanildo.pdf';

    // Adiciona o link ao documento e aciona o clique
    document.body.appendChild(link);
    link.click();

    // Remove o link do documento
    document.body.removeChild(link);
  };

const AboutMe = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Lista de habilidades direto no componente
  const skills = [
    { icon: <Code sx={{ color: "#00b4d8" }} />, name: "Web Development" },
    { icon: <DesignServices sx={{ color: "#00b4d8" }} />, name: "UI/UX Design" },
    { icon: <Palette sx={{ color: "#00b4d8" }} />, name: "Graphic Design" },
    { icon: <DataObject sx={{ color: "#00b4d8" }} />, name: "APIs" },
    { icon: <Code sx={{ color: "#00b4d8" }} />, name: "Mobile Apps" },
    { icon: <DesignServices sx={{ color: "#00b4d8" }} />, name: "Prototyping" },
  ];

  return (
    <AboutContainer>
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

      <Container>
        <ContentBox>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4} textAlign="center">
              <AnimatedAvatar
                src="https://avatars.githubusercontent.com/u/141750211?v=4"
                alt="Evanildo Macêdo"
              />
              <Box mt={3}>
                <IconButton href="https://www.linkedin.com/in/macedoflp" target="_blank">
                  <LinkedIn sx={{ color: "#90e0ef", fontSize: 32 }} />
                </IconButton>
                <IconButton href="https://github.com/macedoflp" target="_blank">
                  <GitHub sx={{ color: "#90e0ef", fontSize: 32 }} />
                </IconButton>
                <Button
                  variant="contained"
                  startIcon={<Description />}
                  sx={{
                    mt: 2,
                    background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
                    "&:hover": { transform: "translateY(-2px)" },
                    transition: "all 0.3s ease",
                  }}
                  onClick={handleDownload}
                >
                  Download CV
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <GradientText
                variant={isMobile ? "h4" : "h2"}
                fontWeight="800"
                gutterBottom
              >
                About Me
              </GradientText>

              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  color: "#ccd6f6",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Hi, I'm <strong style={{ color: "#00b4d8" }}>Evanildo Macêdo</strong>, a passionate Software Developer and UI/UX Designer dedicated to creating engaging digital experiences. I founded MDK Studio to help businesses transform their online presence through innovative design and robust web development.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#ccd6f6",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                With a background in both front-end and back-end technologies, I strive for excellence in every project. Whether it’s designing intuitive interfaces or developing high-performance applications, my goal is to deliver quality and creativity in every line of code.
              </Typography>

              <Grid container spacing={2}>
                {skills.map((skill, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <SkillBadge>
                      {skill.icon}
                      <Typography variant="body2" sx={{ color: "#fff", ml: 1 }}>
                        {skill.name}
                      </Typography>
                    </SkillBadge>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </ContentBox>
      </Container>
    </AboutContainer>
  );
};

export default AboutMe;