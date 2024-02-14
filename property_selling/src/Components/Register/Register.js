import './Register.css';
import { useState,useEffect } from 'react';
import logo from '../../images/easyhomes.png'
import { Link, Navigate } from 'react-router-dom';
import intro from '../../images/intro1.jpeg'

import axios from 'axios';

export default function Register() {
    const [auth,setAuth]=useState(false)
    const [data,setData]=useState({
        name:'',
        email:'',
        phone:'',
        location:'',
        pincode:'',
        gender:'',
        password:'',
        confirmpassword:''
        })
        const changeHandler = e =>{
            setData({...data,[e.target.name]:e.target.value})
        }
        const submitHandler = e =>
        {
            e.preventDefault();
            axios.post('http://localhost:5000/register/register',data)
            
        .then(
             res => setAuth(true)   
        )
        alert("successfully registered");
        }
        if(auth)
        {
            return <Navigate to="/login" />
        }
    return (
        <>
        <div className='navbar'>
            <div className='left'>
                {/* <span>PROPERTY HUB</span> */}
             
                <img src={logo} width={300} height={90} className='logo'/>

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
            <div className="register-page">
                <div className="form oho">
                    <div className="register">
                        <div className="register-header">
                            <h3>REGISTER</h3>
                            <p>Please enter your details to Register</p>
                        </div>
                    </div>
                    <form className="register-form" onSubmit={submitHandler}>
                        <input type="text" name="name" placeholder="Full Name" onChange={changeHandler} />
                        <input type="email" name="email" placeholder="Email" onChange={changeHandler} />
                        <input type="text" name="phone" placeholder="Phone Number" onChange={changeHandler} />
                        <input type="text" name="location" placeholder="Location" onChange={changeHandler} />
                        <input type="text" name="pincode" placeholder="Pincode" onChange={changeHandler}/>
                        <select name="gender"  placeholder="Select your Gender" onChange={changeHandler} >
                        <option  >Gender</option> 
                        <option  name="gender" value="Male">Male</option>
                            <option name="gender" value="Female">Female</option>

                        </select>
                        <input type="password" name="password"  placeholder="Password" onChange={changeHandler} />
                        <input type="password" name="confirmpassword" placeholder="Confirm Password"onChange={changeHandler} />
                        <button>Register</button>
                        <p className="message">Already had Account <Link to="/login"> Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}


