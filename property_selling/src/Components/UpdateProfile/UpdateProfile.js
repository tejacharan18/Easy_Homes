import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function UpdateProfile() {
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        pincode: '',
        gender: '',
        password: '',
        confirmpassword: ''
    });

    useEffect(() => {
        // Fetch user data to pre-fill the form fields
        axios.get('http://localhost:5000/register/reg', {
            headers: {
                'token': localStorage.getItem('token')
            }
        }).then(res => {
            setData(res.data);
        }).catch(error => console.error('Error fetching user data:', error));
    }, []);

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = e => {
        e.preventDefault();
        // Submit updated user data
        axios.put('http://localhost:5000/users/update', data, {
            headers: {
                'token': localStorage.getItem('token')
            }
        }).then(res => {
            setAuth(true);
            alert("Profile updated successfully!");
        }).catch(error => console.error('Error updating profile:', error));
    }

    if (auth) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Navbar />
            <div className="register-page">
                <div className="form oho">
                    <div className="register">
                        <div className="register-header">
                            <h3>UPDATE PROFILE</h3>
                            <p>Please update your details</p>
                        </div>
                    </div>
                    <form className="register-form" onSubmit={submitHandler}>
                        <input type="text" name="name" placeholder="Full Name" value={data.name} onChange={changeHandler} />
                        <input type="email" name="email" placeholder="Email" value={data.email} onChange={changeHandler} />
                        <input type="text" name="phone" placeholder="Phone Number" value={data.phone} onChange={changeHandler} />
                        <input type="text" name="location" placeholder="Location" value={data.location} onChange={changeHandler} />
                        <input type="text" name="pincode" placeholder="Pincode" value={data.pincode} onChange={changeHandler} />
                        <select name="gender" value={data.gender} onChange={changeHandler}>
                            <option value="">Select your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="password" name="password" placeholder="Password" onChange={changeHandler} />
                        <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={changeHandler} />
                        <button >Update Profile</button>
                        <p className="message">Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
