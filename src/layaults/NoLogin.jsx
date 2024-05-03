import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/header/Hedaer";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";

export default function NoLogin() {
  const [position, setPosition] = useState("login");

  const changePosition = () => {
    position == "login" ? setPosition("signup") : setPosition("login");
  };

  return (
    <>
      <Navigate to="/" />
      <Header position={position} changePosition={changePosition} />
      <div className="container-sm container-max-600 bg-body d-flex flex-column align-items-center flex-grow-1  pt-4 ">
        {position == "login" && <Login />}
        {position == "signup" && <SignUp />}
      </div>
    </>
  );
}
