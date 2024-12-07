import { useState } from "react";
import "../style/Ai.css";
import { InputText } from "primereact/inputtext";

export default function AiAssistance() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <div className="busqueda">
        <InputText
          placeholder="Ai Assistance"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="p-2"
        />
      </div>
    </>
  );
}
