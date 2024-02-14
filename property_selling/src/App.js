import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Newpost from './Components/Newpost/Newpost';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Buy from './Components/Buy/Buy';
import Myprofile from './Components/Myprofile/Myprofile';
import Post from './Components/Posts/Post';
import Delete from './Components/Delete/Delete';
import Myposts from './Components/Myposts/Myposts';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Sendemail from './Components/Sendemail/Sendemail';
const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
 
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/myprofile' element={<Myprofile/>}></Route>
  <Route path='/' element={<Intro/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/post' element={<Post/>}></Route>
  <Route path='/buy' element={<Buy/>}></Route>
  <Route path='/delete' element={<Delete/>}></Route>
  <Route path='/myposts' element={<Myposts/>}></Route>
  <Route path='/newpost' element={<Newpost/>}></Route>
  <Route path='/update' element={<UpdateProfile/>}></Route>
  <Route path='/footer' element={<Footer/>}></Route>
  <Route path='/sendemail' element={<Sendemail/>}></Route>

</Routes>
</BrowserRouter>
  </>
  )
}

export default App