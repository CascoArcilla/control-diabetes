import { FaHouse, FaPenToSquare } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="fixed-bottom bg-body container-lg p-0 ">
      <ul
        className="border d-flex flex-row justify-content-around fs-5 "
        style={{ margin: "0", padding: "0", minHeight: "40px" }}
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
