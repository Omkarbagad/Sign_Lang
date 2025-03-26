// pages/Home.jsx
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRecognitionStart = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/recognition");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Sign Language Recognition
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Bridging the communication gap using machine learning and computer vision.
      </p>

      <div className="flex gap-6">
        <button
          onClick={handleRecognitionStart}
          className="border-2 border-white px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-indigo-600 transition duration-300"
        >
          Start Recognition
        </button>
        {/* <Link
          to="/dictionary"
          className="border-2 border-white px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-indigo-600 transition duration-300"
        >
          Gesture Dictionary
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
