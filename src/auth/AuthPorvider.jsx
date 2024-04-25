import { createContext, useContext, useEffect, useState } from "react";

import { createToken, getToken, deleteToken } from "../storage/sesiones";
import { getUser, getUsers, getUserByUserName } from "../storage/users";

export async function creandoUserToken(userName) {
  const user = await getUserByUserName(userName);
  const chainTokenPart1 = Math.random().toString(36).substring(2, 9);
  const chainTokenPart2 = Math.random().toString(36).substring(2, 9);

  const token = {
    token: `${chainTokenPart1}${user.id}${chainTokenPart2}${user.username}`,
    userid: user.id,
  };

  const newToken = await createToken(token);
  if (!newToken) {
    return false;
  }

  return token.token;
}

export async function borrarToken(idToken) {
  const isDelete = await deleteToken(idToken);
  if (isDelete) {
    console.log("Se borro el token");
  } else {
    console.log("Error al borrar token");
  }
}

const AuthContext = createContext({
  isAuthenticated: false,
  token: "",
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
