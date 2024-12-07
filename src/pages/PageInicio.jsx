import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../style/PageInicio.css";
import Bot from "../assets/bot_icon.svg";
import { useNavigate } from "react-router-dom";

export default function PageInicio() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login"); // Redirige a "/page2" después de 3 segundos
        }, 3000);

        return () => clearTimeout(timer); // Limpieza del temporizador
    }, [navigate]);

    return(
        <>

        <div className="container_principal">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="contenido_page">
                <div className="imges_bot">
                    <img src={Bot} alt="" />
                </div>
                <div className="letters_bot">
                    <h1>G DOT</h1>
                    <h1>BOT</h1>
                </div>
            </div>
        </div>
        
        </>
    );
}