import { useAuth } from "../../auth/AuthPorvider";

export default function Header({ position, changePosition }) {
  const auth = useAuth();

  return (
    <header className="container-lg border bg-body pt-1 p-0 ">
      <div>
        <div className="container-fluid d-flex justify-content-between p-1 ">
          <h2 className="fw-bolder">DiabeTics</h2>
          {!auth.isAuthenticated ? (
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
            ""
          )}
        </div>
      </div>
    </header>
  );
}
