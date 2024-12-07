import "../style/Inicio.css";
import AiAssistance from "../components/AiAssistance";
import Navbar from "../components/Navbar";
import Shortcuts from "../components/Shortcuts";

export default function Inicio() {
    return(
        <>

        <div className="container_principal">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="ai">
                <AiAssistance />
            </div>
            <div className="shortcuts">
                <Shortcuts />
            </div>
        </div>
        
        </>
    );
}