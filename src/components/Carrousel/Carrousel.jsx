import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Data from "../../data/logements.json";
import "../Carrousel/Carrousel.scss";
import Error404 from "../../pages/Error404/Error404";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Recherchez le logement par ID dans le tableau Data
  useEffect(() => {
    const foundLogement = Data.find((appart) => appart.id === id);
    setLogement(foundLogement);
  }, [id]);

  if (!logement) {
    return (
      <div>
        <Error404 />
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {logement.pictures.map((pictures, index) => (
            <div className="carousel-item" key={index}>
              <img src={pictures} alt={logement.title}/>
            </div>
          ))}
        </div>
        <button className="carrousel-btn prev" onClick={prevSlide}>
        <img src={ArrowLeft} alt="arrowLeft" />{" "}
      </button>
      <button className="carrousel-btn next" onClick={nextSlide}>
        <img src={ArrowRight} alt="arrowRight" />{" "}
      </button>
      </div>
    </div>
  );
}
