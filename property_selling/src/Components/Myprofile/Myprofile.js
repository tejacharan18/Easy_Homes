import './Myprofile.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import Footer from '../Footer/Footer'
import { useState,useEffect } from 'react'
import { Link,Navigate } from 'react-router-dom'
import userlogo from  '../../images/user-logo.jpeg'
import Sendemail from '../Sendemail/Sendemail'
let Email = null;
export default function Myprofile(){
  const [data,setData] = useState(null);
  useEffect(()=>
  {
    axios.get('http://localhost:5000/register/reg',
    {
      headers:{
        'token':localStorage.getItem('token'),
        'locemail':localStorage.getItem('email')
      }
      
    }).then(res=>setData(res.data))
  },[]
  
  )
 Email = data && data.email;
    if(!localStorage.getItem('token')){
         return <Navigate to='/login'/>
    }
    return(
        <>
        <Navbar/>
        {data && 
        <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={userlogo} width={100} className='img'/>
        </div>
        <div className='information'>
        <div className='intials'>
         <table>
          <tr>
              <td>Name</td>
              <td>:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>:</td>

              <td>{data.gender}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>

              <td>{data.email}</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>:</td>

              <td>{data.phone}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>:</td>

              <td>{data.location}</td>
            </tr>

          </table>
          </div>
                                    {/* <p><strong>Name:</strong></p>
                                    <p><strong>Gender:</strong></p>
                                    <p><strong>Email:</strong> </p>
                                    <p><strong>Phone: </strong></p>
                                    <p><strong>Location:</strong></p>
                                  
                                </div>
                                <div className='sols'>
                                    <p>{data.name}</p>
                                    <p>{data.gender}</p>
                                    <p> {data.email}</p>
                                    <p>{data.phone}</p>
                                    <p> {data.location}</p >
                                </div > */}
        {/* <h3>Name: {data.name}</h3>
        <h3>Gender: {data.gender}</h3>
        <h3>Email: {data.email}</h3>
        <h3>Phone: {data.phone}</h3>
        <h3>Location: {data.location}</h3> */}
        </div>
      </div>

      <div className="profile-buttons">
        {/* <button className="profile-button update-profile">Update</button> */}
        <Link to='/newpost'><button className="profile-button new-post">New Post</button></Link> &nbsp;&nbsp;
        <Link to='/myPosts'><button className="profile-button my-posts">My Posts</button></Link> &nbsp;&nbsp;
        <Link to='/update'><button className="profile-button update">Update</button></Link>&nbsp;&nbsp;
        <Link to='/delete'><button className="profile-button delete-account">Delete Account</button></Link>&nbsp;&nbsp;
      </div>
    </div>
}
<br/>
<br/>
<br/>
<Footer/>
        </>
    )
}
export { Email };