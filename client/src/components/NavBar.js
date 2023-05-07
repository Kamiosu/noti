import React from "react";
import "./Navbar.css";

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


    const handleSignOut = () => { 
        localStorage.removeItem('user_data');
        localStorage.removeItem('signedin', false);
        window.location.href = '/Login';
    }


    var signedin = localStorage.getItem('signedin');

    return (
        <nav className="navbar h-30 bg-gradient-to-br from-yellow-400 to-blue-70">
            <div className="navbar__left">
                {/* <img src="../images/logo.jpeg" alt="Logo" className="navbar__logo" /> */}
                <span className="navbar__app-name">Noti</span>
            </div>
            <div className="navbar__right">
                    { signedin ? (

                    <button className="navbar__sign-in" onClick={handleSignOut}>
                        Sign Out
                    </button>
                    ) : (
                    <button className="navbar__sign-in" onClick={handleSignIn}>
                        Sign In
                    </button>

                    )}
                <div className="navbar__user-dropdown" onClick={handleDropdown}>

                    {/* <img src="../images/profile.jpeg"  alt="User Photo" className="navbar__user-photo" /> */}
                    <div className="navbar__dropdown-content">
                        <a href="">Profile</a>
                        <a href="#">Courses</a>
                        <a href="#">Make Notes</a>
                        <a href="#">Connect</a>
                    </div>
                </div>

            </div>
        </nav>
    );
};

