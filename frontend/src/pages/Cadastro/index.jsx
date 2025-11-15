import "./index.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  const navigate = useNavigate();

    async function salvar() {
        try {
            await axios.post("http://localhost:5010/contauser", {
            nome,
            email,
            senha
            });
            alert("Usuário cadastrado!");
            navigate("/");
        } catch (err) {
            alert("Erro ao cadastrar");
        }
    }


  return (
    <div className="cadastro-page">
      <h1>Cadastrar</h1>

        <input type="text" placeholder="Nome" value={nome} onChange={(e)=> setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e)=> setSenha(e.target.value)} />


      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
