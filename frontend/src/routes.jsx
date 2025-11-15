import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Inicio from "./pages/Inicio";
import { useAuth } from "./components/Autenticacao/Auth";

export default function Navegacao() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/inicio"
        element={user ? <Inicio /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
