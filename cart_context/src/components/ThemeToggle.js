import React, { useContext } from "react";
import ThemeContext, { themes } from "./ThemeContexts"; //import themes để so sánh

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Lấy giá trị theme và hàm toggleTheme từ context

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === theme.background,
        color: theme.foreground,
      }}
    >
      Current Theme: {theme === themes.light ? "Light" : "Dark"}{" "}
      {/* Hiển thị "Light" hoặc "Dark" */}
    </button>
  );
}

export default ThemeToggle;