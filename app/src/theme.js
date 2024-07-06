export const theme = {
  colors: {
    primary: "#0070f3", // culoarea principală a website-ului
    secondary: "#ff00ff", // o altă culoare secundară
    background: "#f0f0f0", // culoarea de fundal generală
    text: "#333333", // culoarea textului principal
    accent: "#ff6347", // culoarea de accent
  },
  fonts: {
    body: "Arial, sans-serif", // fontul pentru textul principal
    headings: "Roboto, sans-serif", // fontul pentru titluri și antete
  },
  breakpoints: {
    mobile: "576px", // breakpoint pentru dispozitive mobile
    tablet: "768px", // breakpoint pentru tablete
    desktop: "992px", // breakpoint pentru desktop
  },
  spacing: {
    xs: "4px", // spațiere extra mică
    sm: "8px", // spațiere mică
    md: "16px", // spațiere medie
    lg: "24px", // spațiere mare
    xl: "32px", // spațiere extra mare
  },
  borderRadius: {
    sm: "4px", // colțuri rotunjite mici
    md: "8px", // colțuri rotunjite medii
    lg: "12px", // colțuri rotunjite mari
  },
  boxShadow: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)", // umbra mică
    md: "0 4px 8px rgba(0, 0, 0, 0.1)", // umbra medie
    lg: "0 8px 16px rgba(0, 0, 0, 0.1)", // umbra mare
  },
};

export function flattenObject(obj, parentKey = "", separator = "-") {
  const flattened = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `--${parentKey}${separator}${key}` : key;

      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        Object.assign(flattened, flattenObject(obj[key], newKey, separator));
      } else {
        flattened[newKey] = obj[key];
      }
    }
  }

  return flattened;
}
