import './Dashboard.css'
// import intro from '../../images/home.jpg'
import Navbar from '../Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import homeimage from '../../images/homepage.jpg'
import fsp from '../../images/find_your_perfect.jpg'
import explore from '../../images/explore_values.jpg'
import coc from '../../images/connecting_owners.jpg'
import lpwu from '../../images/list_your_property.jpg'
import main from '../../images/finding_home.jpg'
import Footer from '../Footer/Footer'
// import salehouse from '../../images/salehouse.jpeg'
// import rentalhouse from '../../images/renthouse.jpeg'
// import saleland from '../../images/landsale.jpeg'
// import Cards from '../Cards/Cards'
export default function Dashboard() {
    // if(!localStorage.getItem('token')){
    //     return <Navigate to='/login'/>
    // }
    return (
        <>
            <Navbar />

            <div className='body'>
                <center>
                    <img src={homeimage} alt='top' className='headimage' />
                    <pre className='ii'>Find Your Next <br />
                        Perfect Place To <br />
                        Live</pre>
                </center>

            </div>

            <div className="hp1">
                <div className="content">
                    <h1>Find Your Perfect Space</h1>
                    <p>Discover a seamless platform connecting renters with a diverse range of properties. Whether it's a home, shop, or warehouse, your ideal rental space is just a click away.</p>
                </div>
                <img src={fsp} alt='fsp' className='fsp' />
            </div>


            <div className="hp2">
                <img src={explore} alt='fsp' className='fsp' />

                <div className="content">
                    <h1>Explore Homes, Shops, and More</h1>

                    <p>Browse through a curated collection of rental properties, including homes, shops, godowns, and more. Find the perfect space that suits your needs and preferences.</p>
                </div>
            </div>

            <div className="hp2">
                <div className="content">
                    <h1>Connecting Owners and Renters</h1>
                    < p>Our platform bridges the gap between property owners and those seeking rental spaces. Easily connect with verified owners and find the property that matches your requirements.</p>
                </div>
                <img src={coc} alt='fsp' className='fsp' />
            </div>
            <div className="hp2">
                <img src={lpwu} alt='fsp' className='fsp' />

                <div className="content">
                    <h1>List Your Property with Ease</h1>
                    <p>Are you a property owner? List your home, shop, or commercial space effortlessly on our platform. Showcase your property to a wide audience of potential renters.</p>
                </div>
            </div>
            <div className="hp2">

                <div className="content">
                    <h1>Renting Made Easy</h1>
                    <p>Simplify your rental journey with our intuitive platform. Explore a variety of properties, communicate directly with owners, and secure your ideal space without the hassle.</p>
                </div>
                <img src={main} alt='fsp' className='fsp' />


            </div>



            <br />
            <br />
            <br />
            <br />

            <Footer />



        </>
    )
}