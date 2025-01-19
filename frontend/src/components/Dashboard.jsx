import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h1>Please log in to access your dashboard.</h1>;
  }

  return (
    <div className="dashboard-container">
            <h1 className="dashboard-title">Welcome to Your Dashboard! 🎉</h1>

            {!!user && (
                <div className="dashboard-welcome">
                    <h2 className="dashboard-greeting">Hi, {user.name}! 😊</h2>
                    <p className="dashboard-thank-you">
                        We are incredibly grateful for your donation of <span className="donation-highlight">P{user.donation}</span>. ❤️ <br />
                        Your generosity helps us create a brighter and better community for everyone! 🌟
                    </p>
                </div>
            )}

            <p className="dashboard-message">
                You’ve successfully logged in to your personal account. 💼 <br />
                Take your time and explore everything we’ve prepared for you. 🚀
            </p>

            <p className="dashboard-footer">
                Thank you for being part of our community. Together, we’re making a difference! 🌍 💪
            </p>
        </div>
  );
}
