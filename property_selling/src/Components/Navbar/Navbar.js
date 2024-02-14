import './Navbar.css'
import logo from '../../images/easyhomes.png'
import { Link } from 'react-router-dom'
import { Margin } from '@mui/icons-material'
export default function Navbar()
{
    return(
        <>
        <div className='navbar'>
            <div className='left'>
                {/* <span>PROPERTY HUB</span> */}
             
                <img src={logo} width={300} height={90} className='logo'/>

                {/* <input className='search' type='text' name='location' placeholder='Location'/>
                <input type='button' className='sbutton' value='Search'/> */}

            </div>
            <div className='right'>
                <div className='lists'>
                    <ul>
                        <li>
                            <Link to="/dashboard">HOME</Link> </li>
                        <li><Link to="/buy">BUY</Link></li>
                        {/* <li>CONTACT</li>
                        <li><Link to="/post">ABOUT</Link></li> */}
                        <li><Link to="/myprofile">MYPROFILE</Link></li>
                        <li><Link to="/" onClick={()=>localStorage.removeItem('token')}>LOGOUT</Link></li>
                        {/* <li><Link to="/login">Login</Link> </li> */}
                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}