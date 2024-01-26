import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive'); // Set initial color state

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div className="h-screen w-screen bg-white" style={{ backgroundColor: color }}></div>
      <div className="fixed flex top-12 flex-wrap justify-center px-2">
        <div className="flex w-full flex-wrap justify-center gap-4 bg-white p-3 rounded-fulltext-black">
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => handleColorChange("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => handleColorChange("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => handleColorChange("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => handleColorChange("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "yellow" }}
            onClick={() => handleColorChange("yellow")}
          >
            Yellow
          </button>
          {/* Add more buttons with light colors */}
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "#FFD700" }} // Light Gold
            onClick={() => handleColorChange("#FFD700")}
          >
            Light Gold
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "#87CEEB" }} // Sky Blue
            onClick={() => handleColorChange("#87CEEB")}
          >
            Sky Blue
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "#98FB98" }} // Mint Green
            onClick={() => handleColorChange("#98FB98")}
          >
            Mint Green
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "#FFB6C1" }} // Light Pink
            onClick={() => handleColorChange("#FFB6C1")}
          >
            Light Pink
          </button>
          <button
            className="outline-none px-5 rounded-full"
            style={{ backgroundColor: "#FFFACD" }} // Lemon Chiffon
            onClick={() => handleColorChange("#FFFACD")}
          >
            Lemon Chiffon
          </button>
        </div>
      </div>
      <h1>PArth</h1>
    </>
  );
}

export default App;

