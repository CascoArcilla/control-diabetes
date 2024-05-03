import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthPorvider";
import Home from "../components/home/Home";
import LoginInterfaz from "../layaults/LoginInterface";

export default function HomeRoot() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <LoginInterfaz>
      <Home />
    </LoginInterfaz>
  );
}
