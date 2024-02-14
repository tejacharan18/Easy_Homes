import './Login.css';
import { Link, Navigate } from 'react-router-dom';
import intro from '../../images/intro1.jpeg'
import logo from '../../images/easyhomes.png'


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login() {
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/app/login', data)
            .then(
                res => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('id', res.data.id);
                    localStorage.setItem('email', res.data.email)
                    setAuth(true);
                }

            )

    }
    if (auth) {
        return <Navigate to='/dashboard' />
    }
    return (
        <>
            <div className='navbar'>
                <div className='left'>
                    {/* <span>PROPERTY HUB</span> */}

                    <img src={logo} width={300} height={90} className='logo' />

                    {/* <input className='search' type='text' name='location' placeholder='Location'/>
                <input type='button' className='sbutton' value='Search'/> */}

                </div>
                <div className='right'>
                    <div className='lists home login'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link> </li>


                            <li><Link to="/login">Login</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="login-page">
                <div className="form">
                    <div className="login">
                        <div className="login-header">
                            <h3>LOGIN</h3>
                            <p>Please enter your credentials to login.</p>
                        </div>
                    </div>
                    <form className="login-form" onSubmit={submitHandler}>
                        <input type="text" name='email' placeholder="username" onChange={changeHandler} autoComplete="username" />
                        <input type="password" name='password' placeholder="password" onChange={changeHandler} autoComplete="current-password" />
                        <button className='loginbutton'>login</button>
                        <p className="message">Not registered? <Link to="/register"> Create an account</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}


