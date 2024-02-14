import React, { useState } from 'react';
import axios from 'axios';

const Sendemail = ({ postId, postOwnerEmail }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/new/sendemail', {
                postId,
                postOwnerEmail,
                ...formData
            });
            setSuccessMessage(response.data.message);
        } catch (error) {
            setErrorMessage('Failed to send details. Please try again.');
        }
    };

    return (
        <div>
            <h2>Like this post?</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message to Owner:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Send Details to Owner</button>
            </form>
            {successMessage && <p className="success">{successMessage}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
};

export default Sendemail;
