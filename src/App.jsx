import { useState } from "react";
import Mirror from "./components/Mirror";
import "./components/style.css";

function App() {
  const [color, setColor] = useState("red");

  const handleChangeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <Mirror messageColor={color} />
      <br />
      <button onClick={handleChangeColor}>Change Color from parent</button>
    </div>
  );
}

export default App;
