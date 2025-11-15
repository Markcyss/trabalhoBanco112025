import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Inicio from "./pages/Inicio";
import { useAuth } from "./components/Autenticacao/Auth";
import CadastroADM from "./pages/CadastroAdm";

export default function Navegacao() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastroadm" element={<CadastroADM />} />
      <Route
        path="/inicio"
        element={user ? <Inicio /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
