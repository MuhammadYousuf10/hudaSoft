"use client";
import { Toolbar, Button, Box, Container, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AnimatedButton from "../common/button/AnimatedButton";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const nav = [
    { href: "/", label: "Home" },
    { href: "#pages", label: "Pages", hasMenu: true },
    { href: "#services", label: "Services", hasMenu: true },
    { href: "#project", label: "Project", hasMenu: true },
    { href: "#blog", label: "Blog", hasMenu: true },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (event, label) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <Box>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            href="/"
            style={{ fontWeight: 800, fontSize: 22, color: "#ffffff" }}
          >
            Agenko
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {nav?.map((n) =>
              n.hasMenu ? (
                <div key={n.label}>
                  <Button
                    color="inherit"
                    onClick={(e) => handleClick(e, n.label)}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{ color: "#fff" }}
                  >
                    {n.label}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={activeMenu === n.label}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        sx: {
                          minWidth: 200,
                          bgcolor: "white",
                          borderRadius: 1,
                          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                        },
                      },
                    }}
                  >
                    <MenuItem
                      sx={(theme) => ({
                        color: "#000",
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                          // transform: "translateX(4px)",
                        },
                      })}
                      onClick={handleClose}
                    >
                      Link 1
                    </MenuItem>

                    <MenuItem
                      sx={(theme) => ({
                        color: "#000",
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                          // transform: "translateX(4px)",
                        },
                      })}
                      onClick={handleClose}
                    >
                      Link 2
                    </MenuItem>

                    <MenuItem
                      sx={(theme) => ({
                        color: "#000",
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                          // transform: "translateX(4px)",
                        },
                      })}
                      onClick={handleClose}
                    >
                      Link 3
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button
                  key={n.href}
                  component={Link}
                  href={n.href}
                  color="inherit"
                  sx={{ color: "#fff" }}
                >
                  {n.label}
                </Button>
              )
            )}
          </Box>

          <AnimatedButton text="Let's Talk" />
        </Toolbar>
      </Container>
    </Box>
  );
}
