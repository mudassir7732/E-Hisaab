import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoutes: FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/loading");
    }
  });
  return children;
}
export default ProtectedRoutes;