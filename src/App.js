import React from "react";
import StartPage from "./components/StartPage";
import {Routes, Route} from 'react-router-dom'
import TypingGame from "./components/TypingGame";
import "./index-sass/index.css"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/start-page" exact element={<StartPage/>}/>
      <Route path="/typing-game" element={<TypingGame/>}/>
    </Routes>
    </>
    )
    
}

export default App;
