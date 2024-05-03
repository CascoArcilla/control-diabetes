import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Hedaer";
import Login from "../components/login/Login";

export default function NoLogin() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="container-sm container-max-600 bg-body d-flex flex-column align-items-center flex-grow-1 pt-4 ">
        {location.pathname == "/" && <Login />}
        {location.pathname == "/sign-up" && <Outlet />}
      </div>
    </>
  );
}
