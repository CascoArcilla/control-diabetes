import { FaPencil } from "react-icons/fa6";

export default function BoxDetail({ nameInfo, registerToday, dataInfo }) {
  const [isRegister, setIsRegister] = useState(registerToday);

  return (
    <div className="d-flex flex-column text-center border p-2 rounded align-items-center ">
      <p className="m-0 text-capitalize ">{nameInfo}</p>
      {isRegister ? (
        <p className="m-0 ">{dataInfo}</p>
      ) : (
        <FaPencil style={{ fontSize: "20px" }} />
      )}
    </div>
  );
}
