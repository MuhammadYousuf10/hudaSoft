"use client";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedButton({ text = "Get Started" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      variant="contained"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        overflow: "hidden",
        textTransform: "none",
        fontWeight: 600,
        px: 4,
        py: 1.5,
        fontSize: "1rem",
        borderRadius: 2,
        minWidth: "160px",
      }}
    >
      <span
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "1em",
          lineHeight: 1,
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <motion.span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
          }}
          initial={{ y: "0%" }}
          animate={{ y: hovered ? "-100%" : "0%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {text}
        </motion.span>

        <motion.span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
          }}
          initial={{ y: "100%" }}
          animate={{ y: hovered ? "0%" : "100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </span>
    </Button>
  );
}
