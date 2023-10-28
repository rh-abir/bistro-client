import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const loaction = useLocation();

  if (loading) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>;
};

export default PrivateRoute;
