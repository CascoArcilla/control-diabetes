import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // para saber si el usario esta autentificado
  const [user, setUser] = useState({}); // la informacion util del usario como nombre, usarname, correo, etc.
  const [isRegisterGlucosa, setIsRegisterGlucosa] = useState(false); // saber si el usario ya ha registrado su glucosa el dia actual
  const [update, setUpdate] = useState(false);

  const changeAuthenticat = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  const confirmRegisterGlucosa = () => {
    setIsRegisterGlucosa(!isRegisterGlucosa);
  };

  useEffect(() => {
    setUpdate(false);
  }, [update, user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isRegisterGlucosa,
        changeAuthenticat,
        changeUser,
        confirmRegisterGlucosa,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
