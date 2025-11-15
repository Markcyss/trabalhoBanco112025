import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, senha) {
    const resp = await axios.post("http://localhost:5010/login", { email, senha });

    const token = resp.data.token;
    localStorage.setItem("TOKEN", token);

    const payload = JSON.parse(atob(token.split('.')[1]));
    setUser({ 
      nome: payload.nome,
      email: payload.email,
      tipo: payload.role
    });

    return true;
  }

  function logout() {
    localStorage.removeItem("TOKEN");
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
