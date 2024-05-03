import Header from "../components/header/Hedaer";
import Nav from "../components/navigation/Nav";

export default function LoginInterfaz({ children }) {
  return (
    <>
      <Header />
      <div
        className="container-sm container-max-600 bg-body d-flex flex-column align-items-center flex-grow-1 pt-2 "
        style={{ marginBottom: "50px" }}
      >
        {children}
      </div>
      <Nav />
    </>
  );
}
