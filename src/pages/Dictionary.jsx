import { useState } from "react";
import { Link } from "react-router-dom";

const gestures = [
  { sign: "🤟", meaning: "I Love You" },
  { sign: "✌️", meaning: "Victory" },
  { sign: "👍", meaning: "Thumbs Up" },
  { sign: "👋", meaning: "Hello" },
  { sign: "👌", meaning: "Okay" },
  { sign: "✋", meaning: "Stop" },
];

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter gestures based on search term
  const filteredGestures = gestures.filter((gesture) =>
    gesture.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center p-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-8">Gesture Dictionary</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a gesture..."
        className="p-3 rounded-lg text-black w-full max-w-lg mb-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Gesture List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGestures.length > 0 ? (
          filteredGestures.map((gesture, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-indigo-800 p-6 rounded-xl shadow-lg"
            >
              <span className="text-6xl mb-4">{gesture.sign}</span>
              <p className="text-xl font-semibold">{gesture.meaning}</p>
            </div>
          ))
        ) : (
          <p className="text-xl col-span-full">No gestures found.</p>
        )}
      </div>

      {/* Navigation Button */}
      <Link to="/">
        <button className="mt-8 bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Dictionary;
