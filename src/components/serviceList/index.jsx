"use client";

import { Box, Typography, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import CampaignIcon from "@mui/icons-material/Campaign";
import TimelineIcon from "@mui/icons-material/Timeline";

const services = [
  {
    label: "Website Design Service",
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
  },
  {
    label: "Web Development Service",
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
  },
  {
    label: "Brand Strategy Solutions",
    icon: <TimelineIcon sx={{ fontSize: 32 }} />,
  },
  {
    label: "Digital Marketing Solution",
    icon: <CampaignIcon sx={{ fontSize: 32 }} />,
  },
];

export default function ServiceList() {
  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {services?.map((svc, i) => (
        <motion.div
          key={svc.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <Paper
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: 3,
              py: 3,
              borderRadius: "60px",
              bgcolor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.primary.main}`,
              color: theme.palette.text.primary,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: `rotate(${i % 2 === 0 ? "-3deg" : "3deg"})`,
              "&:hover": {
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              },
            })}
          >
            <Box>{svc?.icon}</Box>
            <Typography variant="h6">{svc?.label}</Typography>
          </Paper>
        </motion.div>
      ))}
    </Stack>
  );
}
