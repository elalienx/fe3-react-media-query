import { useEffect, useState } from "react";

export default function App() {
  // Local state
  const [readWidth, setReadWidth] = useState(0);

  // Properties
  const tabledWidthInPixels = 750;
  const isMobile = readWidth < tabledWidthInPixels;

  // Methods
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    const result = window.innerWidth;

    console.log("Width", result);
    setReadWidth(result);
  }

  return (
    <div className="App">
      <h1>React Media Queries</h1>
      {isMobile ? <p>📱 mobile</p> : <p>🖥️ computer</p>}
    </div>
  );
}
