import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import styles from "./Menu1.module.css";
import Link from "next/link";

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
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Toolbar>
        <div className={styles.logo}>
          <Link href="/">Casuța Mea</Link>
        </div>
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
              <Link href="/">Acasă</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/rooms">Rooms</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/galerie">Galerie</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/contact">Contact</Link>
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={handleClose}>
              <Link href="/test">Not found</Link>
            </MenuItem>
          </div>
        </Drawer>
        {!isMobile && (
          <ul className={styles.desktopNav}>
            <li>
              <Link href="/" className={styles.navLink}>
                Acasă
              </Link>
            </li>
            <li>
              <Link href="/camere" className={styles.navLink}>
                Camere
              </Link>
            </li>
            <li>
              <Link href="/galerie" className={styles.navLink}>
                Galerie
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/test" className={styles.navLink}>
                Not found
              </Link>
            </li>
          </ul>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BurgerMenu;
