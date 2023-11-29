import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1>Welcome to My App</h1>
                <p>This is a simple homepage.</p>
                <Link to="/signup" className="btn btn-primary mx-2">Sign Up</Link>
                <Link to="/" className="btn btn-secondary mx-2">Log In</Link>
            </div>
        </div>
    );
}

export default Homepage;
