import { Link } from "react-router-dom";

export default function Navbar({ user, logout }) {
  return (
    <nav className="fixed top-0 left-0 w-full p-7 bg-black flex justify-evenly items-center">
      <Link to="/" className="text-4xl font-bold text-white">Sign Language Recognition</Link>

      <div className="space-x-4 flex items-center text-white">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/feedback" className="hover:underline">Feedback</Link>

        {/* Show username and logout if logged in */}
        {user ? (
          <div className="flex items-center gap-4">
            <p>Welcome {user}</p>
            <button onClick={logout} className="hover:underline">Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
