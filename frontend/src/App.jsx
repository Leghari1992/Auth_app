import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./pages/Protected";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/protected" /> : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/protected" /> : <Register />}
      />
      <Route
        path="/protected"
        element={user ? <Protected /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
