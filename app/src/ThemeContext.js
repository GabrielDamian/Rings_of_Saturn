// src/ThemeContext.js

import { createContext } from "react";
import { theme } from "./theme"; // importă tema definită

const ThemeContext = createContext(theme); // creează contextul temei, inițializat cu tema definită

export default ThemeContext;
