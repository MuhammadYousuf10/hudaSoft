import { Stack, AppBar } from "@mui/material";
import Image from "next/image";
import React from "react";
import AnimatedButton from "../common/button/AnimatedButton";

const AppBarLayer = () => {
  return (
    <AppBar
      sx={{ py: 1, px: 2, bgcolor: "#262626" }}
      position="sticky"
      color="transparent"
      elevation={0}
    >
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image
          src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
          alt="Logo"
          width={152}
          height={18}
        />
        <AnimatedButton text="Buy Now" />
      </Stack>
    </AppBar>
  );
};

export default AppBarLayer;
