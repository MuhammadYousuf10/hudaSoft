"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#9cfe4f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6b7280",
      contrastText: "#ffffff",
    },
    info: {
      main: "#6366f1",
      contrastText: "#ffffff",
    },
    success: {
      main: "#22c55e",
    },
    warning: {
      main: "#facc15",
      contrastText: "#000000",
    },
    error: {
      main: "#ef4444",
    },

    background: {
      default: "#000000", // Full black background
      paper: "#0a0a0a", // Slightly lighter than default for cards/sections
    },

    text: {
      primary: "#ffffff", // White headings
      secondary: "#9ca3af", // Muted gray for body text
      disabled: "#6b7280",
    },
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    fontSize: 15,

    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.1,
      color: "#ffffff",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      color: "#ffffff",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#ffffff",
    },
    h6: {
      fontWeight: 700,
      fontSize: "1.25rem",
      color: "#ffffff",
    },

    body1: {
      lineHeight: 1.8,
      fontSize: "1rem",
      color: "#9ca3af",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.95rem",
    },
  },

  shape: {
    borderRadius: 20, // smoother look
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "10px 26px",
          fontWeight: 600,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 20px rgba(156,254,79,0.4)", // green glow
          },
        },
        containedPrimary: {
          background: "linear-gradient(90deg,#9cfe4f,#22c55e)", // light green → darker green
          color: "#fff",
        },
        outlined: {
          borderColor: "#6b7280",
          color: "#fff",
          "&:hover": {
            borderColor: "#9cfe4f", // green hover
            color: "#9cfe4f", // green hover
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#fff",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#0a0a0a",
          borderRadius: 20,
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        },
      },
    },
  },
});

export default theme;
