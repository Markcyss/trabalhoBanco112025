import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../components/Autenticacao/Auth";

export default function Inicio() {
  const { user, logout } = useAuth();
  const [usuarios, setUsuarios] = useState([]);
  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    if (user?.tipo === "admin") {
      buscarUsuarios();
      buscarContagem();
    }
  }, []);

  async function buscarUsuarios() {
    const token = localStorage.getItem("TOKEN");
    const resp = await axios.get("http://localhost:5010/usuarios", {
      headers: { "x-access-token": token }
    });
    setUsuarios(resp.data);
  }

  async function buscarContagem() {
    const token = localStorage.getItem("TOKEN");
    const resp = await axios.get("http://localhost:5010/contagem", {
      headers: { "x-access-token": token }
    });
    setContagem(resp.data[0].contagem);
  }

  return (
    <div className="inicio-page">
      <h1>
        {user?.tipo === "admin" ? "Área do Administrador" : "Hello World"}
      </h1>

      {user?.tipo === "admin" && (
        <div>
          <h2>Total de usuários: {contagem}</h2>
          <ul>
            {usuarios.map((u, i) => (
              <li key={i}>{u.nome} - {u.email}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={logout}>Sair</button>
    </div>
  );
}
