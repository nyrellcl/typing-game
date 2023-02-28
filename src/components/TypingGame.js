import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function TypingGame() {
  const [quotes] = useState([
    "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    "There is nothing more deceptive than an obvious fact.",
    "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
    "I never make exceptions. An exception disproves the rule.",
    "What one man can invent another can discover.",
    "Nothing clears up a case so much as stating it to another person.",
    "Education never ends, Watson. It is a series of lessons, with the greatest for the last."
  ]);

  const [words, setWords] = useState([]);
  const [typedQuote, setTypedQuote] = useState("");
  let [currentQuote, setCurrentQuote] = useState("");
  const [startTime, setStartTime] = useState(Date.now());
  const [isWin, setIsWin] = useState(false);
  const [isWrongCharacter, setIsWrongCharacter] = useState(false)

  function getQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    const quoteChars = quote.split("");
    setWords(quoteChars);
    setStartTime(Date.now() / 1000);
    setIsWin(false);
    setIsWrongCharacter(false)
  }

  const handleOnInput = (e) => {
    const typedValue = e.target.value;
    setTypedQuote(typedValue);
    currentQuote = words[0];
    if (typedValue === currentQuote) {
      setCurrentQuote(currentQuote);
      //deletes the characters of each word in quote
      setWords(words.slice(1));
      setTypedQuote("");
      if (words.length === 1) {
        setIsWin(true);
      }
    }
    (typedValue !== currentQuote ? setIsWrongCharacter(true) : setIsWrongCharacter(false))
  };

  return (
    <section className="typing-section">
        <Link to="/typing-game"><button type="button">Exit game</button></Link>
      <h1>Practice your typing</h1>
      <article className="typing-section__area">
        <div className="typing-section__area__quote">
          {isWin ? <p>Nice Job! Let's keep practicing!</p> : <p>{words}</p>}
        </div>
        <fieldset className="user-area">
          <input
            onChange={handleOnInput}
            type="text"
            value={typedQuote}
            aria-label="current word"
            id="typed-value"
          />
          {isWrongCharacter ? <p>Oops! Wrong letter</p> : null}
          <button type="button" onClick={getQuote}>
            Generate quote
          </button>
        </fieldset>
      </article>
    </section>
  );
}

export default TypingGame;
