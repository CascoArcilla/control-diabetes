import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [update, setUpdate] = useState(false);

  const changeAuthenticat = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    setUpdate(false);
  }, [update, user]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, changeAuthenticat, changeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
