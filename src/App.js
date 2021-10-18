import "./App.css";
import { useState } from "react";
import Number from "./Number";
import Button from "./Button";

function App() {
  const [texts, setText] = useState([1, 2, 3, 4, 5]);

  const increment = () => {
    if (texts[4] < 20) {
      const newArray = texts.map((text) => (text += 1));
      setText(newArray);
    }
  };

  const decrement = () => {
    if (texts[0] > 0) {
      const newArray = texts.map((text) => text - 1);
      setText(newArray);
    }
  };

  return (
    <>
      <Button text="<<" actionOnClick={decrement} />
      {texts.map((text) => (
        <Number key={text} text={text} />
      ))}
      <Button text=">>" actionOnClick={increment} />
    </>
  );
}

export default App;
