
import './App.css';
import React from "react";
import ThemeToggleButton from "./components/ThemeToggleButton"; // Import ThemeToggleButton
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Welcome to React!</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
