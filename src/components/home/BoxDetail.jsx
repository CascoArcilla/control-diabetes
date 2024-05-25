import { FaPencil } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BoxDetail({
  nameInfo = "Info Mostrar",
  registerToday = false,
  dataInfo = "Valor",
  setConfirm = null,
  to = "",
  showButton,
  isVertical = false,
  className = "",
}) {
  const toForm = to.toLowerCase();
  let borderDevide = "";
  if (showButton) {
    borderDevide = isVertical ? "border-bottom" : "border-end";
  }

  const showHorizontal = isVertical ? "flex-column gap-2 p-2" : "";

  return (
    <article
      className={`d-flex text-center align-items-center flex-grow-1 justify-content-around ${showHorizontal}`}
      style={{
        borderColor: "#8088c0",
        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "6px",
      }}
    >
      <div className={`flex-grow-1 p-1 border-black ${borderDevide} `}>
        <div>
          <p className="m-0 text-capitalize fw-bold ">{nameInfo}</p>
          {registerToday ? (
            <p className="m-0 fst-italic ">{dataInfo}</p>
          ) : (
            <Link to={`/registro/${toForm}`} onClick={setConfirm}>
              <FaPencil style={{ fontSize: "20px" }} />
            </Link>
          )}
        </div>
      </div>
      {showButton && (
        <div className="flex-grow-1 p-1">
          <Link to={`/registro/${toForm}`}>
            <FiPlusCircle style={{ fontSize: "40px" }} />
          </Link>
        </div>
      )}
    </article>
  );
}
