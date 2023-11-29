import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="p-4 rounded border shadow-lg" style={{ maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name" onChange={handleInput} />
                    {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={handleInput} />
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" onChange={handleInput} />
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                </button>
                <p className="mt-3 text-center">
                    Already have an account? <Link to="/" className="link-primary">Log In</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;
