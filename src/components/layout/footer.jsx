"use client";
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 6, borderTop: 1, borderColor: "divider" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Agenko* — Built with Next.js + MUI
        </Typography>
      </Container>
    </Box>
  );
}
