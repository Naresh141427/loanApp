import { Navigate } from "react-router-dom";
import { getLocalData } from "../utils/storage";

const ProtectedRoute = ({ children }) => {
  const user = getLocalData("currentUser");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
