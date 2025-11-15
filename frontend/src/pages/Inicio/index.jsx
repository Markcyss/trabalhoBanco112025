import "./index.scss";
import { useAuth } from "../../components/Autenticacao/Auth";

export default function Inicio() {
  const { user, logout } = useAuth();

  const usuariosMock = [
    { nome: "João", email: "joao@gmail.com" },
    { nome: "Maria", email: "maria@gmail.com" }
  ];

  return (
    <div className="inicio-page">
      <h1>
        {user.tipo === "adm" ? "Área do Administrador" : "Hello World"}
      </h1>

      {user.tipo === "adm" && (
        <div>
          <h2>Total de usuários: {usuariosMock.length}</h2>
          <ul>
            {usuariosMock.map((u, i) => (
              <li key={i}>{u.nome} - {u.email}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={logout}>Sair</button>
    </div>
  );
}