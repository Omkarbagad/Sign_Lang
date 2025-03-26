import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CameraView from "../components/CameraView";
import SpeechOutput from "../components/SpeechOutput";

const Dashboard = () => {
  // State for dashboard statistics
  const [stats, setStats] = useState({
    totalTranslations: 0,
    modelAccuracy: 0,
    recentTranslations: [],
  });

  // Simulate fetching data (replace with API call)
  useEffect(() => {
    const fetchDashboardData = async () => {
      // Simulated data (replace with actual API call)
      const data = {
        totalTranslations: 132,
        modelAccuracy: 96.5,
        recentTranslations: [
          { id: 1, input: "Hello", output: "👋" },
          { id: 2, input: "Thank You", output: "🙏" },
          { id: 3, input: "Goodbye", output: "👋" },
        ],
      };
      setStats(data);
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-indigo-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Total Translations</h2>
          <p className="text-4xl">{stats.totalTranslations}</p>
        </div>

        <div className="bg-green-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Model Accuracy</h2>
          <p className="text-4xl">{stats.modelAccuracy}%</p>
        </div>

        <div className="bg-yellow-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Active Users</h2>
          <p className="text-4xl">42</p>
        </div>
      </div>

      {/* Recent Translations */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-6">Recent Translations</h2>
        <ul className="space-y-4">
          {stats.recentTranslations.map((item) => (
            <li
              key={item.id}
              className="bg-gray-700 p-4 rounded-lg flex justify-between items-center"
            >
              <span>{item.input}</span>
              <span className="text-2xl">{item.output}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <Link
        to="/"
        className="bg-indigo-500 hover:bg-indigo-700 py-3 px-6 rounded-lg text-lg transition"
      >
        Back to Home
      </Link>
          <div>

    </div>
    </div>
  );
};

export default Dashboard;
