import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

import PageInicio from "./pages/PageInicio";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import DetalleClase from "./pages/DetalleClase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<PageInicio />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/detalleclase" element={<DetalleClase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
