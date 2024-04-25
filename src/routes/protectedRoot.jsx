import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Hedaer";
import Nav from "../components/navigation/Nav";
import { useAuth } from "../auth/AuthPorvider";
import { useEffect, useState } from "react";

import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
import Home from "../components/home/Home";

export default function ProtectedRoot() {
  const auth = useAuth();
  const [home, setHome] = useState(<Home />);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      setHome(<Home />);
    } else {
      setHome("");
    }
  }, [location.pathname]);

  return auth.isAuthenticated ? (
    <>
      <Header />
      <div className="container-sm">
        {home}
        <Outlet />
      </div>
      <Nav />
    </>
  ) : (
    <DefaultInterface />
  );
}

function DefaultInterface({ children }) {
  const [position, setPosition] = useState("login");

  const changePosition = () => {
    position == "login" ? setPosition("signup") : setPosition("login");
  };

  return (
    <>
      <Navigate to="/" />
      <Header position={position} changePosition={changePosition} />
      <div className="container-sm bg-body d-flex flex-column align-items-center justify-content-center ">
        {position == "login" && <Login />}
        {position == "signup" && <SignUp />}
      </div>
    </>
  );
}
