import React from "react";
import "./Navbar.css";
import profilepic from "../images/profile.jpeg"
import logo from "../images/applogo.png"

export default function NavBar() {
    // Function to handle user dropdown
    const handleDropdown = () => {
        // Implement the dropdown functionality here
    };

    // Function to handle sign in
    const handleSignIn = () => {
        // Implement the sign in functionality here
        window.location.href = '/Login'
    };

    return (
        <nav className="navbar h-30 bg-gradient-to-br from-yellow-400 to-blue-70">
            <div className="navbar__left">
                <img src={logo} alt="Logo"className="navbar__logo" />
                <span className="navbar__app-name">Noti</span>
            </div>
            <div className="navbar__right">
                    <button className="navbar__sign-in" onClick={handleSignIn}>
                        Sign In
                    </button>
                <div className="navbar__user-dropdown" onClick={handleDropdown}>
                    
                     <img src={profilepic}  alt="User Photo" className="navbar__user-photo" /> 
                    <div className="navbar__dropdown-content">
                        <a href="/Profile">Profile</a>
                        <a href="/Courses">Courses</a>
                        <a href="/Makenotes">Make Notes</a>
                    </div>
                </div>

            </div>
        </nav>
    );
};

