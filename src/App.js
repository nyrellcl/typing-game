import React from "react";
import StartPage from "./components/StartPage";
import { Route, Routes } from 'react-router-dom'
import TypingGame from "./components/TypingGame";
import "./index-sass/index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/typing-game" element={<StartPage />} />
        <Route path="/typing-game/game" element={<TypingGame />} />
      </Routes>
    </>
  );
}

export default App;
