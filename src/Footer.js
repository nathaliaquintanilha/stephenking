import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
  background-color: #b22222;
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#333333")};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem; /* Tamanho menor */
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }

  @media (max-width: 368px) and (max-height: 448px) {
    display: none; /* Esconde o conteúdo em ambos os tamanhos de tela do Apple Watch Series 6 */
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#333333")};
  margin-right: 12px; 
  font-size: 1.5rem; 

  @media (max-width: 768px) {
    font-size: 1.2rem; 
  }
`;

const Footer = ({ isDarkMode }) => {
  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <Icon icon={faBook} isDarkMode={isDarkMode} />
      Biblioteca S.K. Brasil
    </FooterContainer>
  );
};

export default Footer;
