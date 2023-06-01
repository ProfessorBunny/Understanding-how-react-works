import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState();
  const paragraphToggleHandler = () => {
    setShowParagraph((prevSate) => {
      return !prevSate;
    });
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Toggel Paragraph</p>}
      <Button onClick={paragraphToggleHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
