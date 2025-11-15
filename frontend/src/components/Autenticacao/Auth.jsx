import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, senha) {
    if (email === "adm@teste.com" && senha === "123") {
      setUser({ tipo: "adm", nome: "Administrador" });
    } else {
      setUser({ tipo: "usuario", nome: "Usuário" });
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
