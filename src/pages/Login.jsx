import { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/Login.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  return (
    <>
      <div className="container_principal">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="contenido_page">
          <div className="letters_welcome">
            <h1>
              Hola, <br /> de nuevo
            </h1>
          </div>
          <div className="section mt-5">
            <InputText
              placeholder="Ingresa tu correo institucional"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="p-2"
            />
          </div>
          <div className="section mt-3">
            <InputText
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="p-2"
            />
          </div>
          <div className="letters_contra mt-3">
            <p>¿Olvidaste tu contraseña?</p>
          </div>
          <div className="button_inicio_sesion mt-3">
            <Link to="/inicio">
              <Button label="Iniciar Sesión" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
