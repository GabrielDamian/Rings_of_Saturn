import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import styles from "./Menu1.module.css";

const BurgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        borderBottom: "2px solid white",
        backgroundColor: "transparent",
        backdropFilter: "blur(2px)",
      }}
    >
      <Toolbar>
        <div className={styles.logo}>Casuța Mea</div>
        {isMobile && (
          <IconButton
            className={styles.iconButton}
            size="large"
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer anchor="top" open={isDrawerOpen} onClose={handleClose}>
          <div role="presentation" onClick={handleClose} onKeyDown={handleClose}>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              Acasă
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              Despre
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              Servicii
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              Contact
            </MenuItem>
          </div>
        </Drawer>
        {!isMobile && (
          <ul className={styles.desktopNav}>
            <li>
              <a href="/" className={styles.navLink}>
                Acasă
              </a>
            </li>
            <li>
              <a href="/" className={styles.navLink}>
                Despre
              </a>
            </li>
            <li>
              <a href="/" className={styles.navLink}>
                Servicii
              </a>
            </li>
            <li>
              <a href="/" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BurgerMenu;
