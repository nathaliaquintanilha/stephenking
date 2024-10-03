import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
  // Estado para gerenciar o modo escuro/ claro
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#f0f0f0",
        color: isDarkMode ? "#ffffff" : "#333333",
      }}
    >
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <main className="main">
        <Content isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
