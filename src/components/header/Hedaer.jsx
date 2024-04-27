import { useAuth } from "../../auth/AuthPorvider";

export default function Header({ position, changePosition }) {
  const { isAuthenticated, changeAuthenticat } = useAuth();

  return (
    <header
      className="container-sm container-max-600 border bg-body p-2 "
      style={{ maxHeight: "70px" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center p-0">
        <h2 className="fw-bolder">DiabeTics</h2>
        {!isAuthenticated ? (
          <div className="d-flex gap-1 ">
            <button
              className="btn btn-primary "
              disabled={position == "login"}
              onClick={changePosition}
            >
              Login
            </button>
            <button
              className="btn btn-primary "
              disabled={position == "signup"}
              onClick={changePosition}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-secondary " onClick={changeAuthenticat}>
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
