import { Form, Navigate, useActionData } from "react-router-dom";
import { useAuth } from "../../auth/AuthPorvider";
import { useEffect } from "react";
import { calcularCaloriasDiabetesTipo1 } from "../../functions/calculos/calcularCalorias.js";
import { getMacroNutrientes } from "../../functions/calculos/calcularMacro.js";

export default function Login() {
  const action = useActionData();
  const { changeUser, changeAuthenticat, isAuthenticated } = useAuth();

  useEffect(() => {
    if (action) {
      if (action.state) {
        let newUser = action ? action.user : null;
        if (newUser) {
          let calories = calcularCaloriasDiabetesTipo1(
            newUser.peso,
            newUser.altura,
            newUser.edad,
            newUser.genero,
            newUser.actividad_fisica
          );

          let macroNuntri = getMacroNutrientes(
            calories,
            newUser.actividad_fisica
          );

          let addExtraInfo = {
            calorias_esperadas: calories,
            macronutrientes: macroNuntri,
          };

          newUser = { ...newUser, ...addExtraInfo };

          changeUser(newUser);
          changeAuthenticat();
        }
      }
    }
  }, [action]);

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <Form
      method="post"
      className="bg-body-secondary rounded  p-3 container-sm container-max-400 d-flex flex-column gap-4  align-items-center justify-content-center "
    >
      <h1 className="fw-bolder ">Login</h1>
      {action ? (
        <div className="p-2 border  border-danger ">
          <p className="p-0 m-0 fw-bolder text-danger">{action.message}</p>
        </div>
      ) : (
        ""
      )}
      <div className="container-fluid ">
        <label htmlFor="inputEmail4" className="form-label fw-bold ">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail4"
          name="username"
        />
      </div>
      <div className="container-fluid ">
        <label htmlFor="inputPassword4" className="form-label fw-bold ">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          name="password"
        />
      </div>
      <div className="container-fluid ">
        <button type="submit" className="btn btn-primary w-100 fw-bold ">
          Ingresar
        </button>
      </div>
    </Form>
  );
}
