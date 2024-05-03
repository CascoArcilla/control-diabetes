import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthPorvider";

export default function Header() {
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
            <Link className="btn btn-primary" to="/">
              Login
            </Link>
            <Link to="/sign-up" className="btn btn-primary ">
              Sign Up
            </Link>
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
