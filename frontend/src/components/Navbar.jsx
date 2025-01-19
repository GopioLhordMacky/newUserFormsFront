import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    setUser(null); // Clear the user context
    alert("You have logged out.");
    navigate("/"); // Redirect to the homepage
  };

  return (
    <nav className="navbar">
      <h1></h1>
      <div>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
