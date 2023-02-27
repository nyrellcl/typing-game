import React from "react";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <section className="start-section">
      <h1>Typing Game</h1>
      <article>
        <p>Click start to play the game and test your typing skills!</p>
        <Link to="/typing-game">
          <button type="button">Play game</button>
        </Link>
      </article>
    </section>
  );
}

export default StartPage;
