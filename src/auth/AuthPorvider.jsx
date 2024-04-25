import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  token: "",
  user: {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "Undefined",
    lastname: "Undefined",
    username: "Undifined",
    id: "error_id",
  });

  const handleAuthenticat = (value) => {
    let newAuth = !value == null && value;
    if (newAuth) {
      return { message: "Error al cambiar autenticacion" };
    }
    setIsAuthenticated(newAuth);
  };

  const handleUser = (value) => {
    let newUser = !value == null && value;
    if (newUser) {
      return { message: "Error al cambiar valores de usuario" };
    }
    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, handleAuthenticat, handleUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
