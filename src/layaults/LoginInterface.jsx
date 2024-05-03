import Header from "../components/header/Hedaer";
import Nav from "../components/navigation/Nav";

export default function LoginInterfaz({ children }) {
  return (
    <>
      <Header />
      <main
        className="container-sm container-max-600 bg-body d-flex flex-column align-items-center flex-grow-1 pt-2 pb-4 "
        style={{ marginBottom: "60px" }}
      >
        {children}
      </main>
      <Nav />
    </>
  );
}
