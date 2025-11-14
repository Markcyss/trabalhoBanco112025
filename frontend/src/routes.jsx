import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Navegacao;