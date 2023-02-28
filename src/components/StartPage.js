import React, { useState } from "react";
import { Link } from "react-router-dom";

function StartPage() {
  const [keyboards] = useState(['A', 'S', 'D', 'F'])
  return (
    <section className="start-section">
      <div className="keys">
        {keyboards.map((keyboard, keyboardIdx)=>(
          <span className="keys__individual" key={keyboardIdx}>{keyboard}</span>
        ))}
      </div>
      <h1>Typing Game</h1>
      <article className="start-section__content">
        <p>Click start and test out your typing skills!</p>
        <Link to="/typing-game">
          <button type="button" className="start-btn">Play game</button>
        </Link>
      </article>
    </section>
  );
}

export default StartPage;
