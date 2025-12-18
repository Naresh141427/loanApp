import { Navigate } from "react-router-dom";
import { getLocalData } from "../utils/storage";

const PublicRoute = ({ children }) => {
  const user = getLocalData("currentUser");

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
