"use client";
import { Container, Grid, Typography, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedButton from "../common/button/AnimatedButton";
import ServiceList from "../serviceList";
import Image from "next/image";

export default function HeroBanner() {
  const MotionImage = motion.create(Image);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
        py: { xs: 12, md: 18 },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ position: "relative" }}>
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mt: 2,
                    mb: 2,
                    fontSize: { xs: "2rem", md: "8.75rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Digital Modern
                </Typography>
                <Chip
                  label="Pro"
                  sx={(theme) => ({
                    fontSize: { xs: "0.75rem", md: "1.5rem" },
                    height: { xs: 40, md: 60 },
                    px: { xs: 1.5, md: 3 },
                    borderRadius: "40px",
                    fontWeight: 600,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "-100px",
                    backgroundColor: "transparent",
                    border: `1px solid ${theme.palette.primary.main}`,
                    color: theme.palette.primary.main,
                  })}
                  variant="outlined"
                />
              </Box>
              <Box sx={{ position: "absolute", right: "0" }}>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, color: "text.secondary", maxWidth: 500 }}
                >
                  A{" "}
                  <span style={{ color: "#fff", fontWeight: 400 }}>
                    Digital Modern Agency
                  </span>{" "}
                  specializing in innovative web app design branding, and
                  marketing solutions to elevate your business.
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <AnimatedButton text="Learn More" />
                </Box>
              </Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mt: 2,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "8.75rem" },
                  lineHeight: 1.2,
                }}
              >
                Agency
              </Typography>
              <MotionImage
                src="/leaf.webp"
                alt="leaf"
                width={50}
                height={50}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                style={{ position: "absolute", top: 30, left: -100, zIndex: 2 }}
              />
              <MotionImage
                src="/half-circle.webp"
                alt="leaf"
                width={40}
                height={80}
                animate={{
                  y: [0, -10, 0, 10, 0], // up & down
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: -100,
                  zIndex: 2,
                }}
              />
            </Box>
          </motion.div>
        </Box>

        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <ServiceList />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <MotionImage
              src="https://agenko-nextjs.vercel.app/assets/images/digital-agency/hero/hero-img1.jpg"
              alt="Hero visual"
              width={850}
              height={450}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 24,
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
