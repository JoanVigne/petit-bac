"use client";
import { useState } from "react";
import letterAndCategory from "../../../utils/letterAndCategory";
import "./fast.css";
import CarouselOfIcons from "components/CarouselOfIcons";

export default function Fast() {
  const [result, setResult] = useState({ letter: "", category: "" });
  const [loading, setLoading] = useState(false);
  const handleClick = (categoryType) => {
    if (categoryType === "") {
      const { letter, category } = letterAndCategory(categoryType);
      setResult({ letter, category });
      return;
    }
    setLoading(true); // Set loading state to true
    setIsRunning(true);
    setTimeout(() => {
      const { letter, category } = letterAndCategory(categoryType);
      setResult({ letter, category });
      setLoading(false); // Set loading state to false after delay
      setIsRunning(false);
    }, 1000); // 2-second delay
  };

  const [isRunning, setIsRunning] = useState(false);
  return (
    <main className="page-fast">
      <div>
        <h1>fast</h1>
        <p>
          Rules : Une catégorie, une lettre, et on vote pour la meilleure
          réponse.
        </p>

        <section>
          <h2>Catégories :</h2>
          <div className="container-buttons">
            <button onClick={() => handleClick("classic")}>
              <img
                className="icon"
                src="/assets/icons/colonne-1.png"
                alt="Crazy Icon"
              />
              Classique{" "}
            </button>
            <button onClick={() => handleClick("fun")}>
              <img
                className="icon crazy"
                src="/assets/icons/crazy-1.png"
                alt="Crazy Icon"
              />
              Fun !{" "}
            </button>
          </div>

          <div className="container-result">
            {loading ? (
              <CarouselOfIcons isRunning={isRunning} />
            ) : result.category && result.letter ? (
              <>
                <div className="display-category">{result.category}</div>
                <div className="display-letter">
                  avec la lettre {result.letter}
                </div>
              </>
            ) : (
              <div>Appuyez sur l'un des bouttons pour commencer.</div>
            )}
          </div>

          <button onClick={() => setIsRunning(!isRunning)}>
            Toggle Carousel
          </button>
          <div className="container-buttons">
            <button onClick={() => handleClick("")}>Clear</button>
          </div>
        </section>
      </div>
    </main>
  );
}
