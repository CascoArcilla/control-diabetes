import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthPorvider";
import NoLogin from "../layaults/NoLogin";

export default function Root() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/home" />;

  return <NoLogin />;
}
