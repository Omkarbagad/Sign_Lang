import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email and password
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      login(user.name); // Set user's name in Auth Context
      toast.success(`Welcome back, ${user.name}!`);
      navigate("/");
    } else {
      toast.error("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-10 rounded-xl shadow-2xl max-w-sm w-full"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-white text-center">
          Welcome Back
        </h2>
        <label className="block font-bold">
          E-Mail : 
          <input
            type="email"
            // placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300  focus:border-purple-500 focus:ring-2 focus:ring-purple-300 p-3 w-full rounded-lg mt-2 mb-5 outline-none text-white"
            required
          />
        </label>
        <label className="block mb-4 font-bold">
          Password :
          <input
            type="password"
            // placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 mt-2 p-3 w-full rounded-lg mb-6 outline-none text-white"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-purple-600 text-white w-full py-3 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
