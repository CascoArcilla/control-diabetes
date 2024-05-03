import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthPorvider";
import MenuForm from "../components/forms/MenuForm";
import LoginInterfaz from "../layaults/LoginInterface";
import { useEffect, useState } from "react";

export default function RegistroRoot() {
  const { isAuthenticated } = useAuth();
  const [menu, setmenu] = useState(<MenuForm />);

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <LoginInterfaz>
      {menu ? menu : ""}
      <Outlet />
    </LoginInterfaz>
  );
}
