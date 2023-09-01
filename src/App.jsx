import { useEffect } from "react";

export default function App() {
  // Methods
  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <h1>React Media Queries</h1>
      {isMobile ? <p>📱 mobile</p> : <p>🖥️ computer</p>}
    </div>
  );
}
