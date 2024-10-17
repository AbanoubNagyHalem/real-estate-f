import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove session data like tokens stored in localStorage or sessionStorage
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Redirect user to the login page
    navigate("/login");
  };

  return handleLogout;
};

export default useLogout;
