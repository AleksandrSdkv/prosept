import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const authenticated = localStorage.getItem("authenticated");
  return authenticated ? children : <Navigate to="/signin" replace />;
}
