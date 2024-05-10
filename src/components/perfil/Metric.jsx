import { GoGear } from "react-icons/go";

export default function Metric({ value, nameMetric, unidMetric, isModify }) {
  const styleBorder = {
    borderWidth: "2PX",
    borderColor: "#224465",
    borderStyle: "solid",
    borderRadius: "5px",
  };

  return (
    <div
      className="d-flex flex-grow-1 align-items-center justify-content-around "
      style={styleBorder}
    >
      <div className="">
        <p className="m-0 p-0 fs-5 ">{nameMetric}</p>
        <p className="m-0 p-0 fst-italic ">{`${value} ${unidMetric}`}</p>
      </div>
      {isModify && (
        <div className="p-0 m-0 ">
          <button
            className="p-0 m-0 border-0 bg-transparent "
            style={{ fontSize: "26px" }}
          >
            <GoGear className="m-0 p-0 " />
          </button>
        </div>
      )}
    </div>
  );
}
