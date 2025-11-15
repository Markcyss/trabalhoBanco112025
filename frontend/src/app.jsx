import AppRoutes from "./routes";
import { AuthProvider } from "./components/Autenticacao/Auth";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}