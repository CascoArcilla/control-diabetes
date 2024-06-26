import { Navigate } from "react-router-dom";
import Perfil from "../components/perfil/Perfil";
import LoginInterfaz from "../layaults/LoginInterface";
import { useAuth } from "../auth/AuthPorvider";

export default function PerfilRoot() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <LoginInterfaz>
      <Perfil />
    </LoginInterfaz>
  );
}
