import { useState } from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="text-center d-flex flex-column justify-content-center align-items-center   text-white fw-bold px-2 "
      style={{ height: "100vh" }}
    >
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="text-decoration-none text-black border border-black px-2 shadow rounded bg-primary "
      >
        Ir a inicio!!!
      </Link>
    </div>
  );
}
