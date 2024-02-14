import './Buy.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Navigate } from 'react-router-dom';

export default function Buy() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filt, setFilt] = useState({ location: '' });

    useEffect(() => {
        fetchAllPosts();
    }, []);

    const fetchAllPosts = () => {
        axios.get('http://localhost:5000/new/allposts', {
            headers: {
                'token': localStorage.getItem('token')
            }
        })
            .then(res => {
                setData(res.data);
                setFilteredData(res.data); // Set filtered data initially to all posts
            })
            .catch(error => console.error('Error fetching all posts:', error));
    };

    if (!localStorage.getItem('token')) {
        return <Navigate to='/login' />;
    }

    const changeHandler = e => {
        setFilt({ ...filt, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        const { location } = filt;
        if (location.trim() !== '') {
            const filteredPosts = data.filter(post => post.location.toLowerCase() === location.toLowerCase());
            setFilteredData(filteredPosts);
        } else {
            setFilteredData(data);
        }
    };

    const formatDate = timestamp => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <>
            <Navbar />
            <div className='filter'>
                <form onSubmit={submitHandler}>
                    <input className='search' type='text' name='location' placeholder='Location' onChange={changeHandler} />
                    <input type='submit' className='sbutton' value='Search' />
                </form>
            </div>
            <div className='posts-container'>
                {filteredData.length >= 1 ? (
                    filteredData.map(post => (
                        <div className="carde" key={post.id}>
                            <div className="card-header">
                                <h1>A {post.bed_rooms} bhk house for {post.sale_rental} in {post.location}</h1>
                                <p>Posted on: {formatDate(post.createdAt)}</p>
                            </div>
                            <div className='price'>
                                <h1>{post.sale_rental}Price : {post.price} /-</h1>
                            </div>
                            <div className="card-body">
                                <div className='initials'>
                                    <p><strong>Owner Name:</strong> {post.owner_name}</p>
                                    <p><strong>Property Type:</strong> {post.prop_type}</p>
                                    <p><strong>Sale/Rental:</strong> {post.sale_rental}</p>
                                    <p><strong>Location:</strong> {post.location}</p>
                                    <p><strong>No of bedrooms:</strong> {post.bed_rooms}</p>
                                    <p><strong>House Area:</strong> {post.house_area}</p>
                                    <p><strong>Pincode:</strong> {post.pincode}</p>
                                    <p><strong>Email:</strong> {post.email}</p>
                                    <p><strong>Phone Number:</strong> {post.phone}</p>
                                </div>
                            </div>

                        </div>
                    )).reverse() // Reverse the array of posts before mapping
                ) : (
                    <div className='nopostsfound'>
                        <h3>No posts found in  {filt.location} </h3>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}
