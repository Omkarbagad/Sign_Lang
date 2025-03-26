import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
  
      toast.success("Signup successful! Redirecting to login.");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8">Sign Up</h2>

        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 mt-2"
          />
        </label>

        <label className="block mb-4">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 mt-2"
          />
        </label>

        <label className="block mb-6">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 mt-2"
          />
        </label>

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 py-3 px-6 rounded-lg w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
