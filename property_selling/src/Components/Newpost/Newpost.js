import './Newpost.css'
import Navbar from '../Navbar/Navbar'
import { Email } from '../Myprofile/Myprofile'
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Myprofile from '../Navbar/Navbar';
export default function Newpost() {
    const locemail = localStorage.getItem('email');
    const [hi, setHi] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/register/reg',
            {
                headers: {
                    'token': localStorage.getItem('token')


                }

            }).then(res => setHi(res.hi))
    }, []

    )
    const [cred, setCred] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:5000/register/reg',
            {
                headers: {
                    'token': localStorage.getItem('token'),
                    'locemail': localStorage.getItem('email')


                }

            }).then(res => setCred(res.cred))
    }, []

    )
    const [auth, setAuth] = useState(false)
    const [data, setData] = useState({
        owner_name: '',
        prop_type: '',
        sale_rental: '',
        location: '',
        price: '',
        bed_rooms: '',
        house_area: '',
        pincode: '',
        email: '',
        phone: '',
        defaultemail: locemail

    })
    console.log(cred);
    setData.defaultemail = locemail;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/new/post', data)
            .then(
                res => setAuth(true)
            )
    }
    if (auth) {
        return <Navigate to="/myposts"></Navigate>
    }
    console.log({ Email })
    return (

        <>

            <Navbar />

            <div className="register-page">
                <div className="form oho">
                    <div className="register">
                        <div className="register-header">
                            <h3>New Post </h3>
                            <p>Please enter Post details to sell </p>
                        </div>
                    </div>
                    <form className="register-form" onSubmit={submitHandler}>
                        <input type="text" name="owner_name" placeholder="Owner Name" onChange={changeHandler} />
                        <input type="text" name="prop_type" placeholder="prop_type" onChange={changeHandler} />
                        <select name="sale_rental" placeholder="Sale or Rental" onChange={changeHandler} >
                            <option  >Sale or Rental</option>
                            <option name="sale_rental" value="Sale">Sale</option>
                            <option name="sale_rental" value="Rental">Rental</option>
                        </select>
                        <input type="text" name="location" placeholder="Location" onChange={changeHandler} />
                        <input type="text" name="price" placeholder="Price in Rs" onChange={changeHandler} />
                        <input type="text" name="bed_rooms" placeholder="Number of Bed rooms" onChange={changeHandler} />
                        <input type="text" name="house_area" placeholder="House Area in sqfts" onChange={changeHandler} />
                        <input type="text" name="pincode" placeholder="Pincode" onChange={changeHandler} />
                        <input type="email" name="email" placeholder="Email" onChange={changeHandler} />
                        <input type="text" name="phone" placeholder="Phone Number" onChange={changeHandler} />
                        {/* <input type="text" name="defaultemail" disabled value={locemail} /> */}


                        <button>Post</button>

                    </form>
                </div>
            </div>

        </>
    )
}