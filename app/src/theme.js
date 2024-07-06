// src/theme.js
import { createTheme } from "@mui/material/styles";

// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      main: "red", // Culoare principală
      light: "magenta", // Culoare deschisă pentru accentuare
      dark: "blue", // Culoare închisă pentru accentuare
      contrastText: "green", // Text contrastant pentru culoare principală
    },
    secondary: {
      main: "#f50057", // Culoare secundară
      light: "#ff5983", // Culoare deschisă pentru accentuare
      dark: "#c51162", // Culoare închisă pentru accentuare
      contrastText: "#fff", // Text contrastant pentru culoare secundară
    },
    background: {
      default: "#f8f9fa", // Culoare de fundal implicită
      paper: "#fff", // Culoare de fundal pentru hârtie (ex: carduri, panouri)
    },
    text: {
      primary: "#333", // Culoare text primar
      secondary: "#666", // Culoare text secundar
      disabled: "#ccc", // Culoare text dezactivat
    },
    error: {
      main: "#f44336", // Culoare pentru erori
    },
    success: {
      main: "#4caf50", // Culoare pentru succese
    },
    warning: {
      main: "#ff9800", // Culoare pentru avertizări
    },
    info: {
      main: "#2196f3", // Culoare pentru informații
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Font principal
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: "1.5rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      marginBottom: "1.25rem",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: "1rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.5,
      marginBottom: "0.75rem",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.6,
      marginBottom: "0.5rem",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.7,
      marginBottom: "0.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.8,
      marginBottom: "0.75rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.9,
      marginBottom: "0.5rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.8,
      marginBottom: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.9,
      marginBottom: "1rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 2,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
      lineHeight: 2,
    },
  },
  shape: {
    borderRadius: 8, // Bordura de colț pentru componente rotunjite
  },
  spacing: 8, // Spațierea implicită între componente (folosită în margini și padding)
});

export default theme;
