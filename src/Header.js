import React, { useState } from "react";
import "./Header.css";

const Header = ({ isDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const headerStyle = {
    backgroundColor: isDarkMode ? "#b22222" : "#b22222", // vermelho para ambos os modos
    color: "#ffffff",
    display: "flex",
    padding: "1rem",
    fontSize: "2rem",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    whiteSpace: "nowrap",
  };

  const menuStyle = {
    color: "#ffffff",
  };

  const logoStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <header style={headerStyle}>
      <div className="logo">
        <a href="#home">
          <img src="/king.png" alt="Logo" style={logoStyle} />
        </a>
      </div>
      <div className="library-title">Biblioteca SK</div>

      {/* Ícone do menu hambúrguer - alterna a exibição do menu ao ser clicado */}
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" style={menuStyle}>
            Início
          </a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="content.js#livros" style={menuStyle}>
            Livros
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="#romances">Romances</a>
              </li>
              <li>
                <a href="#contos">Contos</a>
              </li>
              <li>
                <a href="#nao-ficcao">Não-ficção</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="content.js#trailers" style={menuStyle}>
            Adaptações
          </a>
        </li>
        <li>
          <a href="content.js#sobre" style={menuStyle}>
            Sobre o Autor
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
