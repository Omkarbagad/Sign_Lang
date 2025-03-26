import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Home from "./pages/Home";
import Recognition from "./pages/Recognition";
import Dictionary from "./pages/Dictionary";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

// ✅ Exporting AuthContext
export const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Navbar user={user} logout={logout} />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recognition"
            element={user ? <Recognition /> : <Navigate to="/login" />}
          />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <Login login={login} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
