import { Outlet } from "react-router-dom";
import Header from "../components/header/Hedaer";
import Nav from "../components/navigation/Nav";
import { useAuth } from "../auth/AuthPorvider";
import { useState } from "react";

import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";

export default function ProtectedRoot() {
  const auth = useAuth();
  const path = window.location.pathname;
  console.log(path);

  return auth.isAuthenticated ? (
    <>
      <Header />
      <div className="container-sm">
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
      <Header position={position} changePosition={changePosition} />
      {position == "login" && <Login />}
      {position == "signup" && <SignUp />}
    </>
  );
}
