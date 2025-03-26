import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Feedback = () => {
  // Feedback form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");

  // Handle feedback submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!name || !email || !comments) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Store feedback in local storage (can be extended to backend API)
    const feedbackData = { name, email, rating, comments, date: new Date() };
    const existingFeedback = JSON.parse(localStorage.getItem("feedback")) || [];
    localStorage.setItem("feedback", JSON.stringify([...existingFeedback, feedbackData]));

    // Reset form and show success message
    setName("");
    setEmail("");
    setRating(5);
    setComments("");
    toast.success("Feedback submitted successfully!");
  };

  return (
    <div className="h-screen w-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8">We Value Your Feedback</h1>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-xl mb-2">Your Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-xl mb-2">Email Address:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
            required
          />
        </div>

        {/* Rating Field */}
        <div className="mb-6">
          <label className="block text-xl mb-2">Rate Our System (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
          />
        </div>

        {/* Comments Field */}
        <div className="mb-6">
          <label className="block text-xl mb-2">Your Feedback:</label>
          <textarea
            placeholder="Share your experience or suggestions..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
            required
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg"
          >
            Submit Feedback
          </button>

          <Link to="/">
            <button className="bg-indigo-600 hover:bg-indigo-800 px-6 py-3 rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
