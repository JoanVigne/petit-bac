import React, { useState, useEffect } from "react";
import "./carouselOfIcons.css";

const CarouselOfIcons = ({ isRunning }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 100); // Change image every 100ms
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="container-carousel-icons">
      <img
        src={"/assets/icons/" + images[currentIndex] + ".png"}
        alt="Carousel Icon"
        width="300"
        height="200"
      />
    </div>
  );
};

export default CarouselOfIcons;

const images = [
  "brocoli",
  "chien",
  "colonne-1",
  "crazy-1",
  "colonne-2",
  "football",
  "guitare",
  "kiwi",
  "livre",
  "note",
  "planete",
  "robe",
  "rose",
  "visage",
];
