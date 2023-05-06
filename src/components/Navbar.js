import React from "react";
import "./Navbar.css";

const Navbar = () => {
    // Function to handle user dropdown
    const handleDropdown = () => {
        // Implement the dropdown functionality here
    };

    // Function to handle sign in
    const handleSignIn = () => {
        // Implement the sign in functionality here
    };

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <img src="../images/logo.jpeg" alt="Logo" className="navbar__logo" />
                <span className="navbar__app-name">App Name</span>
            </div>
            <div className="navbar__right">
                    <button className="navbar__sign-in" onClick={handleSignIn}>
                        Sign In
                    </button>
                <div className="navbar__user-dropdown" onClick={handleDropdown}>
                    
                    <img
                        src="../images/profile.jpeg"
                        alt="User Photo"
                        className="navbar__user-photo"
                    />
                    <div className="navbar__dropdown-content">
                        <a href="#">Profile</a>
                        <a href="#">Courses</a>
                        <a href="#">Make Notes</a>
                        <a href="#">Connect</a>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
