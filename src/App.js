import React from "react";
import StartPage from "./components/StartPage";
import {Routes, Route} from 'react-router-dom'
import TypingGame from "./components/TypingGame";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" exact element={<StartPage/>}/>
      <Route path="/typing-game" element={<TypingGame/>}/>
    </Routes>
    </>
    )
    
}

export default App;
