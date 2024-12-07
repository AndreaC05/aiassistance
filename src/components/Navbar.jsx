import { useState, useEffect } from "react";
import "../style/Navbar.css";
import señal from "../assets/Group 1.svg";
import batery from "../assets/Group 3.svg";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup para evitar fugas de memoria
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container_navbar flex">
      <div className="hora">
        {/* Formato de hora sin segundos */}
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="icon_line">
        <i className="pi pi-minus"></i>
      </div>
      <div className="icons_inter flex">
        <div className="señal">
          <img src={señal} alt="" />
        </div>
        <div className="wifi">
          <i className="pi pi-wifi" />
        </div>
        <div className="bateria">
          <img src={batery} alt="" />
        </div>
      </div>
    </div>
  );
}
