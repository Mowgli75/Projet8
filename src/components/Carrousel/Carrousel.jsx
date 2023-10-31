import React, { useState } from "react";
import Data from "../../data/logements.json";
import "../Carrousel/Carrousel.scss";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";
import { useParams } from "react-router";

export default function Carrousel() {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const logement = Data.find((appart) => appart.id === id);


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
  const showNavigation = logement.pictures.length > 1;

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
        {showNavigation && (
          <div>
        <button className="carrousel-btn prev" onClick={prevSlide}>
        <img src={ArrowLeft} alt="arrowLeft" />{" "}
      </button>
      <button className="carrousel-btn next" onClick={nextSlide}>
     
        <img src={ArrowRight} alt="arrowRight" />{" "}
      </button></div>
      )}
      </div>
      <p className="numberSlide"> {currentIndex + 1} / {logement.pictures.length} </p>
    </div>
  );
}
