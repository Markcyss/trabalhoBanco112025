import "./index.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroADM() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  const navigate = useNavigate();

    async function salvar() {
        try {
            await axios.post("http://localhost:5010/contaadm", {
            nome,
            email,
            senha
            });
            alert("Admin cadastrado!");
            navigate("/");
        } catch (err) {
            alert("Erro ao cadastrar");
        }
    }


  return (
    <div className="container-cadastroadm">
        <div className="cadastroadm-main">
            <h1>Cadastro de Admin</h1>

                <input type="text" placeholder="Nome" value={nome} onChange={(e)=> setNome(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={senha} onChange={(e)=> setSenha(e.target.value)} />

            <button onClick={salvar}>Salvar</button>

            <p onClick={() => navigate("/cadastro")}>Cadastro de Usuario</p>
            <p onClick={() => navigate("/")}>Logar</p>
        </div>
    </div>
  );
}
