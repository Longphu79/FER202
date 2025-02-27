import React, { createContext, useState } from "react";

export const themes = {
  light: { foreground: "#000000", background: "#ffffff" },
  dark: { foreground: "#ffffff", background: "#000000" },
};

const ThemeContexts = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContexts.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContexts.Provider>
  );
}

export default ThemeContexts;
