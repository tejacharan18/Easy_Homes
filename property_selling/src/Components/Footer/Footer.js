import React from 'react'
import './Footer.css'
const Footer = () => {
    return (

        <section>
            <div className='footer'>



                <div className="aboutus">

                    <h4 className='same'>About Us</h4>
                    <p className='same'>About Our Company</p>
                    <p className='same'>Our Team</p>
                    <p className='same'>Contact Us</p>
                </div>

                <div className="quicklinks">

                    <h4 className='same'>Quick Links</h4>
                    <p className='same'>Home</p>
                    <p className='same'>Search Home</p>
                    <p className='same'>List Your Properties</p>
                </div>
                <div className="Relatedprops">

                    <h4 className='same'>Related Props</h4>
                    <p className='same'>Find Shops</p>
                    <p className='same'>Explore Houses</p>
                    <p className='same'>Discover Commercial Spaces</p>
                </div>
                <div className="legal">

                    <h4 className='same'>Legal</h4>
                    <p className='same'>Privacy Policy</p>
                    <p className='same'>Terms of Services</p>
                </div>

                <div className="social">
                    <h4 className='same'>Follow Us On</h4>

                    <div className="social">
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-square-instagram "></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>

            </div>
            <div className="copyright">
                <hr />
                <center>
                    <p>&copy;2024 Your Home Finder. All rights reserved. </p>

                </center>
            </div>

        </section>

    )
}

export default Footer;