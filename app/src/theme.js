export const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ff00ff",
    background: "#f0f0f0",
    text: "#333333",
    accent: "#ff6347",
  },
  fonts: {
    body: "Arial, sans-serif",
    headings: "Roboto, sans-serif",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  boxShadow: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px rgba(0, 0, 0, 0.1)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
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
