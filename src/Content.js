import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Content.module.css";
import ToggleSwitch from "./ToggleSwitch";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

const books = [
  {
    id: 1,
    title: "O iluminado",
    img: "https://m.media-amazon.com/images/I/51wt58SEkUL._SY445_SX342_.jpg",
    synopsis:
      "Jack Torrance, um escritor em crise, aceita um trabalho como zelador de inverno do isolado Hotel Overlook, levando sua esposa Wendy e seu filho psíquico Danny. À medida que o inverno avança, forças sobrenaturais afetam a sanidade de Jack, revelando seu lado violento, enquanto Danny tenta proteger a família das ameaças do hotel e dos demônios internos de seu pai.",
  },
  {
    id: 2,
    title: "It - A coisa",
    img: "https://m.media-amazon.com/images/I/51z0s3GcvwL._SY445_SX342_.jpg",
    synopsis:
      "Em Derry, um grupo de crianças, conhecido como Os Perdidos, enfrenta um ser maligno que assume a forma de seus medos, incluindo o palhaço Pennywise. Anos depois, já adultos, eles se reúnem para confrontar novamente a criatura e os traumas de sua infância.",
  },
  {
    id: 3,
    title: "Carrie",
    img: "https://m.media-amazon.com/images/I/51ca8fuem0L._SY445_SX342_.jpg",
    synopsis:
      "Carrie White, uma adolescente isolada com poderes telecinéticos, busca vingança após ser humilhada em um baile escolar, desencadeando destruição na cidade enquanto enfrenta o abuso emocional de sua mãe fanática. O conflito entre seu poder e a opressão resulta em um final trágico e explosivo.",
  },
  {
    id: 4,
    title: "O cemitério",
    img: "https://m.media-amazon.com/images/I/41McBAhN-VL._SY445_SX342_.jpg",
    synopsis:
      "Louis Creed se muda com a família para uma casa próxima a um cemitério de animais, onde descobre um terreno que pode ressuscitar os mortos. Após uma tragédia, ele decide usar esse poder para trazer seu filho de volta, mas as consequências são horríveis e inesperadas, levando Louis a enfrentar o terror que acompanha a fronteira entre vida e morte.",
  },
  {
    id: 5,
    title: "A dança da morte",
    img: "https://m.media-amazon.com/images/I/51Wpx+aPtZS._SY445_SX342_.jpg",
    synopsis:
      "Após um erro de computação no Departamento de Defesa, um vírus é liberado, dando origem à doença que ficará conhecida como Capitão Viajante, ou 'supergripe'.",
  },
];
const moreBooks = [
  {
    id: 6,
    title: "Misery",
    img: "https://m.media-amazon.com/images/I/91ocgbfq55L._SY385_.jpg",
    synopsis:
      "Após um acidente, o escritor Paul Sheldon é resgatado por sua fã número um, Annie Wilkes, que o mantém prisioneiro e força-o a reescrever sua série favorita. À medida que Annie se torna cada vez mais instável, Paul deve lutar pela sua sobrevivência contra sua obsessão.",
  },
  {
    id: 7,
    title: "Sob a Redoma",
    img: "https://m.media-amazon.com/images/I/81U9KNYW4hL._SY385_.jpg",
    synopsis:
      "Uma cidade é repentinamente isolada do mundo por uma esfera invisível, levando seus habitantes a enfrentar conflitos, paranoia e a luta pela sobrevivência em um ambiente caótico.",
  },

  {
    id: 8,
    title: "Novembro de 63",
    img: "https://m.media-amazon.com/images/I/91icVNBMz0L._SY385_.jpg",
    synopsis:
      "Jake Epping descobre um portal no tempo que o leva a 1958 e decide usar essa oportunidade para impedir o assassinato de John F. Kennedy, mas sua missão se complica à medida que ele enfrenta desafios imprevistos e as consequências de alterar o passado.",
  },
  {
    id: 9,
    title: "À espera de um milagre",
    img: "https://m.media-amazon.com/images/I/81Gf+mEoYhL._SY385_.jpg",
    synopsis:
      "Em um corredor da morte, o guarda Paul Edgecomb desenvolve uma amizade com John Coffey, um prisioneiro com habilidades sobrenaturais, que foi condenado por um crime que não cometeu; à medida que Paul testemunha os milagres de Coffey, ele se vê confrontado com questões de justiça e compaixão.",
  },
  {
    id: 10,
    title: "O instituto",
    img: "https://m.media-amazon.com/images/I/71PXKjm2aDL._SY385_.jpg",
    synopsis:
      "O novo livro de Stephen King, o Mestre do Terror, traz uma história inesquecível sobre um grupo de crianças com talentos especiais que precisam se unir para derrubar um grande mal.",
  },
];

const trailers = [
  {
    id: 1,
    title: "O Iluminado (Trailer)",
    videoUrl: "https://www.youtube.com/embed/S014oGZiSdI?si=50ABMkUCR-dZPNg6",
  },
  {
    id: 2,
    title: "It (Trailer)",
    videoUrl: "https://www.youtube.com/embed/xKJmEC5ieOk",
  },
  {
    id: 3,
    title: "Carrie (Trailer)",
    videoUrl: "https://www.youtube.com/embed/j9Mg-GRS46Y?si=7Rf8vVctj8Qn4_G2",
  },
  {
    id: 4,
    title: "O Cemitério (Trailer)",
    videoUrl: "https://www.youtube.com/embed/VllcgXSIJkE",
  },
  {
    id: 5,
    title: "Misery (Trailer)",
    videoUrl: "https://www.youtube.com/embed/XHQ9CPRfDsw?si=Qxst1oKJaXuEnqMj",
  },
  {
    id: 6,
    title: "1922 (Trailer)",
    videoUrl: "https://www.youtube.com/embed/3E_fT0aTsjI?si=5sHZjSaNPyf1T8i4",
  },
];

const Content = ({ isDarkMode, setDarkMode }) => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [showAllBooks, setShowAllBooks] = useState(false);

  const nextSlide = () => {
    setCurrentBookIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentBookIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const h2Style = {
    color: isDarkMode ? "white" : "#333",
  };

  return (
    <div
      className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <label
          style={{ marginRight: "10px", color: isDarkMode ? "white" : "#333" }}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </label>
        <ToggleSwitch isChecked={isDarkMode} onChange={toggleTheme} />
      </div>

      <section className={`${styles.section} ${styles.carouselSection}`}>
        <h2 className={styles.title}>Em Destaque</h2>
        <div className={styles.carousel}>
          <button onClick={prevSlide} className={styles.carouselButton}>
            {"<"}
          </button>
          <div className={styles.carouselSlide}>
            <img
              src={books[currentBookIndex].img}
              alt={books[currentBookIndex].title}
              className={styles.carouselImage}
            />
            <h3>{books[currentBookIndex].title}</h3>
          </div>
          <button onClick={nextSlide} className={styles.carouselButton}>
            {">"}
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <div id="livros">
          <h2 className={styles.title} style={h2Style}>
            Livros
          </h2>
        </div>
        <div className={styles.bookGrid}>
          {(showAllBooks ? moreBooks.concat(books) : books).map((book) => (
            <div
              key={book.id}
              className={styles.card}
              onMouseEnter={(e) => {
                const synopsisElement = e.currentTarget.querySelector(
                  `.${styles.synopsis}`
                );
                if (synopsisElement) {
                  synopsisElement.style.display = "block";
                  synopsisElement.classList.add(styles.show);
                }
              }}
              onMouseLeave={(e) => {
                const synopsisElement = e.currentTarget.querySelector(
                  `.${styles.synopsis}`
                );
                if (synopsisElement) {
                  synopsisElement.classList.remove(styles.show);
                  synopsisElement.style.display = "none";
                }
              }}
            >
              <img
                src={book.img}
                alt={book.title}
                className={styles.bookImage}
              />
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <div className={styles.synopsis}>{book.synopsis}</div>
            </div>
          ))}
        </div>
        <Button
          primary={true} // Aqui está o botão primário
          size="large" // Definido como grande
          onClick={() => setShowAllBooks((prev) => !prev)}
        >
          {showAllBooks ? "Mostrar Menos" : "Mostrar Mais"}
        </Button>
      </section>

      <section className={styles.section}>
        <div id="trailers">
          <h2 className={styles.title} style={h2Style}>
            Adaptações
          </h2>
        </div>
        <div className={styles.trailerGrid}>
          {trailers.map((trailer) => (
            <div key={trailer.id} className={styles.card}>
              <h3 className={styles.trailerTitle}>{trailer.title}</h3>
              <iframe
                width="100%"
                height="315"
                src={trailer.videoUrl}
                title={trailer.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div id="sobre">
          <h2 className={styles.title} style={h2Style}>
            Sobre o Autor
          </h2>
        </div>
        <div className={styles.authorSection}>
          <img
            src="https://s2-oglobo.glbimg.com/om6u8RRUYDJBZmhQf8lWAoA4T48=/0x101:2880x3146/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/A/h/IhAEEURSavow3m7rc49w/108017304-the-author-stephen-king-in-bridgton-maine-on-friday-may-28-2021-ive-held-onto-it-the-way-1-.jpg"
            alt="Stephen King"
            className={styles.authorImage}
          />
          <div className={styles.authorBio}>
            <h3>Stephen King</h3>
            <p>
              Stephen Edwin King (Portland, 21 de setembro de 1947) é um
              escritor norte-americano de terror, ficção sobrenatural, suspense,
              ficção científica e fantasia. Os seus livros já venderam mais de
              400 milhões de cópias,[1] com publicações em mais de 40 países. É
              o 9º autor mais traduzido no mundo.[2] Muitas de suas obras foram
              adaptadas em filmes, minisséries, séries de televisão e
              quadrinhos. King já publicou 60 romances, incluindo 7 sob o
              pseudônimo de Richard Bachman, 12 coletâneas de contos e 6 livros
              de não ficção. Ele já escreveu cerca de 200 contos, a maioria dos
              quais foram publicados em coleções de livros.
            </p>

            <div className={styles.progressContainer}>
              <h3 className={styles.progressLabel}>
                Quantidade de livros traduzidos no Brasil
              </h3>
              <ProgressBar progress={85} color="red" />
            </div>

            <div className={styles.iconContainer}>
              <FaFacebook className={styles.icon} />
              <FaTwitter className={styles.icon} />
              <FaInstagram className={styles.icon} />
            </div>
          </div>
        </div>
      </section>

      <Button
        className={styles.buttonHover}
        primary={false} // Botão secundário
        size="large"
        onClick={() =>
          (window.location.href = "https://stephenking.com/works/index.html")
        }
      >
        Ver Todas as Obras
      </Button>
    </div>
  );
};

export default Content;
