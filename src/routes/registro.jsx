import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthPorvider";
import MenuForm from "../components/forms/MenuForm";
import LoginInterfaz from "../layaults/LoginInterface";

export default function RegistroRoot() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" />;

  const location = useLocation();

  return (
    <LoginInterfaz>
      {location.pathname == "/registro" ? <MenuForm /> : ""}
      <Outlet />
    </LoginInterfaz>
  );
}
