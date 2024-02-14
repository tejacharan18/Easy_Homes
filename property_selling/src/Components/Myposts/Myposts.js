import './Myposts.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { Link, Navigate } from 'react-router-dom';

export default function Myposts() {
    const locemail = localStorage.getItem('email');
    const [crud, setCrud] = useState({
        defaultemail: locemail
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        setCrud({ defaultemail: locemail }); // Update state inside useEffect
    }, [locemail]); // Add Email as a dependency

    useEffect(() => {
        axios.get('http://localhost:5000/new/myposts', {
            params: { defaultemail: crud.defaultemail } // Use crud.defaultemail
        })
        .then(res => setData(res.data))
        .catch(err => console.error('Error fetching posts:', err));
    }, [crud.defaultemail]);

    if (!localStorage.getItem('token')) {
        return <Navigate to='/login' />;
    }

    const handleDelete = (postId) => {
        axios.delete(`http://localhost:5000/new/deletepost/${postId}`)
        .then(res => {
            // Refresh the posts after deletion
            axios.get('http://localhost:5000/new/myposts', {
                params: { defaultemail: crud.defaultemail }
            })
            .then(res => setData(res.data))
            .catch(err => console.error('Error refreshing posts after deletion:', err));
        })
        .catch(err => console.error('Error deleting post:', err));
    };
    const Data = [...data].reverse();
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    return (
        <>
            <Navbar />
            <div className='posts'>
                <h1 className='heading'>MY POSTS</h1>
                {Data.length >= 1 ?
                    Data.map(post =>
                        <div className="carde hit" key={post._id}>
                            <div className="card-header">
                                <h1>A {post.bed_rooms} bhk house for {post.sale_rental} in {post.location}</h1>
                                <p>Posted on: {formatDate(post.createdAt)}</p>
                            </div>
                            <div className='price'>
                                <h1>{post.sale_rental} Price : {post.price} /-</h1>
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
                            <button onClick={() => handleDelete(post._id)} className='deletepost'>Delete Post</button>

                        </div>
                    )
                    :
                    <div className='nopost'>
                        <h1>NO POSTS TO SHOW</h1>
                        <p>Upload your new post</p>
                        <Link to='/newpost'><button className="profile-button new-post">New Post</button></Link>
                    </div>
                }
            </div>
        </>
    )
}
