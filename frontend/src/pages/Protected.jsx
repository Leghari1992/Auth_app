import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Protected = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="center-box">
        <h2>Welcome to the Protected Page</h2>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Protected;
