import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    // Simulate form submission (You can integrate a backend here)
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");

    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg p-8 shadow-lg">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-lg mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-lg mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-800 py-3 rounded-lg text-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Navigation */}
        <div className="text-center mt-8">
          <Link to="/" className="text-indigo-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
