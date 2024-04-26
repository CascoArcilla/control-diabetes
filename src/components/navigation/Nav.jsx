import { FaHouse, FaPenToSquare } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="fixed-bottom container-max-600 bg-body container-lg p-0 "
      style={{ maxHeight: "70px" }}
    >
      <ul
        className="border d-flex flex-row justify-content-around fs-1 "
        style={{ margin: "0", padding: "0", minHeight: "3.5rem" }}
      >
        <Link to="/" style={{ padding: "0" }}>
          <FaHouse className="" />
        </Link>
        <Link to="/registro" style={{ padding: "0" }}>
          <FaPenToSquare className="" />
        </Link>
        <Link to="/perfil" style={{ padding: "0" }}>
          <FaUser className="" />
        </Link>
      </ul>
    </nav>
  );
}
