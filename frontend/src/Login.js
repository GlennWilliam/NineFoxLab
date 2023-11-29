import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios'

function Login(){
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/homepage');
                }
                else{
                    alert("No user existed");
                }
            })
            .catch(err => console.log(err));
        }
    }

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form action ="" onSubmit={handleSubmit} className="p-4 rounded border shadow-lg" style={{ maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" name='email' onChange={handleInput} />
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" name='password' onChange={handleInput}  />
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Log in
                </button>
                <p className="mt-3 text-center">
                    Don't have an account? <Link to="/signup" className="link-primary">Create Account</Link>
                </p>
            </form>
        </div>

    )
}

export default Login;