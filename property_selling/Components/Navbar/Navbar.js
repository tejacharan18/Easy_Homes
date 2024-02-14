import './Navbar.css'
export default function Navbar()
{
    return(
        <>
        <div className='navbar'>
            <div className='left'>
                {/* <span>PROPERTY HUB</span> */}
                <input className='search' type='text' name='location' placeholder='Location'/>
                <input type='button' className='sbutton' value='Search'/>
            </div>
            <div className='right'>
                <div className='lists'>
                    <ul>
                        <li>HOME</li>
                        <li>BUY</li>
                        <li>SELL</li>
                        <li>CONTACT</li>
                        <li>ABOUT</li>
                        <li>LOGIN</li>
                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}