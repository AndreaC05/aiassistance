import { useRef } from "react";
import "../style/Shortcuts.css";

export default function Shortcuts() {
  const shortcuts = [
    "Generate me the 5 minute talk",
    "Generate me the 10 minute talk"
  ];

  const containerRef = useRef(null);

  // Manejar el desplazamiento táctil
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    containerRef.current.dataset.startX = touchStartX;
  };

  const handleTouchMove = (e) => {
    const touchMoveX = e.touches[0].clientX;
    const startX = parseFloat(containerRef.current.dataset.startX);

    // Desplazar el contenedor horizontalmente
    containerRef.current.scrollLeft -= touchMoveX - startX;
    containerRef.current.dataset.startX = touchMoveX;
  };

  return (
    <div className="shortcuts-container flex">
      <h3>Shortcuts</h3>
      <div
        className="shortcuts-carousel"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {shortcuts.map((shortcut, index) => (
          <a key={index} href="#" className="shortcut-link">
            {shortcut}
          </a>
        ))}
      </div>
    </div>
  );
}
