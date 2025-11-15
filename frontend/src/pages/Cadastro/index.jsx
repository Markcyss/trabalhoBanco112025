import "./index.scss";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  function salvar() {
    alert("Usuário cadastrado! (falta conectar ao backend)");
    navigate("/");
  }

  return (
    <div className="cadastro-page">
      <h1>Cadastrar</h1>

      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />

      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
