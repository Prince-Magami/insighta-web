import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
   
    const isLoggedIn = true;

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return children;
}
