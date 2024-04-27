import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [registerGlucosaToday, setRegisterGlucosaToday] = useState(false);
  const [update, setUpdate] = useState(false);

  const changeAuthenticat = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  const registerGlucosa = () => {
    setRegisterGlucosaToday(!registerGlucosaToday);
  };

  useEffect(() => {
    setUpdate(false);
  }, [update, user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        registerGlucosaToday,
        changeAuthenticat,
        changeUser,
        registerGlucosa,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
