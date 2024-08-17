"use client";
import { useState } from "react";
import letterAndCategory from "../../../utils/letterAndCategory";
import "./fast.css";

export default function Fast() {
  const [result, setResult] = useState({ letter: "", category: "" });

  const handleClick = (categoryType) => {
    const { letter, category } = letterAndCategory(categoryType);
    setResult({ letter, category });
  };

  return (
    <main>
      <div>
        <h1>fast</h1>
        <p>
          Rules : Une catégorie, une lettre, et on vote pour la meilleure
          réponse.
        </p>
        <section>
          <div>
            <button onClick={() => handleClick("classic")}>
              Classic Category
            </button>
            <button onClick={() => handleClick("fun")}>Fun Category</button>
            <button onClick={() => handleClick("")}>Clear</button>
            <div className="container-result">
              {result.category && result.letter ? (
                <>
                  <div> {result.category}</div>
                  <div> avec la lettre {result.letter}</div>
                </>
              ) : (
                <div>Appuyez sur l'un des bouttons pour commencer.</div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
