import { useAuth } from "../../auth/AuthPorvider";
import BoxDetail from "./BoxDetail";

export default function DetailToday({ registersToday }) {
  const { isRegisterGlucosa, confirmRegisterGlucosa } = useAuth();

  const setConfirmGlucosa = () => {
    confirmRegisterGlucosa(!isRegisterGlucosa);
  };

  return (
    <div className="container-fluid d-flex justify-content-around gap-3 ">
      <BoxDetail
        nameInfo="Glucosa"
        registerToday={isRegisterGlucosa}
        dataInfo={registersToday.glucosa ?? 0}
        setConfirm={setConfirmGlucosa}
      />
    </div>
  );
}
