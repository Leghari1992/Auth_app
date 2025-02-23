import { Link } from "react-router-dom";
import "../styles.css"; // Ensure correct styling

const Home = () => {
  return (
    <div className="container">
      <div className="center-box">
        <h1>Welcome to Auth App</h1>
        <div className="buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
