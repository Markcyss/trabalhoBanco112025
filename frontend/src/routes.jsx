import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginCadastro />}/>
        <Route path="/cadastro" element={<LoginCadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Navegacao;