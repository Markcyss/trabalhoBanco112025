import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function entrar() {
    login(email, senha);
    navigate("/inicio");
  }

  return (
    <div className="login-page">
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={entrar}>Entrar</button>

      <p onClick={() => navigate("/cadastro")}>Criar conta</p>
    </div>
  );
}
