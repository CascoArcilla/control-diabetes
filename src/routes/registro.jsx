import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthPorvider";
import MenuForm from "../components/forms/MenuForm";
import LoginInterfaz from "../layaults/LoginInterface";

export default function RegistroRoot() {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <LoginInterfaz>
      {pathname == "/registro" && <MenuForm />}
      <Outlet />
    </LoginInterfaz>
  );
}
