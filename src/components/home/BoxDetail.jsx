import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function BoxDetail({
  nameInfo,
  registerToday,
  dataInfo,
  setConfirm,
}) {
  return (
    <div className="d-flex flex-column text-center border border-2 p-2 rounded align-items-center flex-grow-1 ">
      <p className="m-0 text-capitalize ">{nameInfo}</p>
      {registerToday ? (
        <p className="m-0 ">{dataInfo}</p>
      ) : (
        <Link to="/registro/glucosa" onClick={setConfirm}>
          <FaPencil style={{ fontSize: "20px" }} />
        </Link>
      )}
    </div>
  );
}
