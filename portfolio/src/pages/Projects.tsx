import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, IconButton, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { GitHub, Visibility, Launch } from "@mui/icons-material";
import { Particles } from "react-tsparticles";
import { useTheme } from '@mui/material/styles';

// Animação melhorada
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const ProjectsContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(8, 2),
  position: "relative",
  background: "linear-gradient(45deg, #0a192f, #172a45)",
  overflow: "hidden",
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0, 179, 216, 0.3)",
  },
}));

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #00b4d8, #90e0ef)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const projectsData = [
  {
    id: 1,
    title: "MDK Studio Platform",
    description: "Complete web development platform with integrated design tools",
    image: "../public/mdk-studio.png",
    tech: ["React", "Node.js", "Tailwind CSS"],
    links: {
      demo: "https://mdkstudio.com.br/",
      code: "not-found"
    }
  },
  {
    id: 2,
    title: "Payroll System",
    description: "Optimized and automatic payroll platform",
    image: "../public/folha.png",
    tech: ["MUI", "React", "Nest.js", "PostgreSQL"],
    links: {
      demo: "not-found",
      code: "not-found"
    }
  },
  {
    id: 3,
    title: "Brazilian Jewelry Store",
    description: "Joias Lux is an institutional website that presents a collection of exclusive jewelry.",
    image: "../public/loja-joias.png",
    tech: ["Html", "Css", "Javascript", "Sass"],
    links: {
      demo: "https://macedoflp.github.io/loja-de-joias/",
      code: "https://github.com/macedoflp/loja-de-joias"
    }
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ProjectsContainer id="projects">
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

      <Container>
        <GradientText
          variant={isMobile ? "h3" : "h2"}
          align="center"
          gutterBottom
          sx={{
            mb: 8,
            fontWeight: 800,
            animation: `${fadeInUp} 0.8s ease-out`,
          }}
        >
          Featured Projects
        </GradientText>

        <Grid container spacing={6}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <ProjectCard
                sx={{
                  animation: `${fadeInUp} 0.8s ease-out`,
                  animationDelay: `${0.2 * index}s`,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "240px",
                    overflow: "hidden",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(180deg, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.4) 100%)",
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography variant="h6" sx={{ color: "#00b4d8", mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccd6f6", mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tech.map((tech, i) => (
                      <Typography
                        key={i}
                        variant="caption"
                        sx={{
                          color: "#90e0ef",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "4px",
                          background: "rgba(144, 224, 239, 0.1)",
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                  <Button
                    startIcon={<Visibility />}
                    href={project.links.demo}
                    target="_blank"
                    sx={{
                      color: "#00b4d8",
                      "&:hover": { background: "rgba(0, 180, 216, 0.1)" },
                    }}
                  >
                    Live Demo
                  </Button>
                  <IconButton
                    href={project.links.code}
                    target="_blank"
                    sx={{ color: "#90e0ef" }}
                  >
                    <GitHub />
                  </IconButton>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;