import './Intro.css'
import intro from '../../images/intro1.jpeg'
import salehouse from '../../images/salehouse.jpeg'
import rentalhouse from '../../images/renthouse.jpeg'
import saleland from '../../images/landsale.jpeg'
import Cards from '../Cards/Cards'
export default function Intro()
{
    return(
        <>
        <div className='intro'>
        <div className='i-left'>
            <span>PROPERTY<br/>
            HUB
            </span><br/>
            <br/>
            <span className='content'>
            A one-stop platform for buying, selling, and renting diverse
            real <br/>
            estate,including houses, lands, homes, and shops. Streamline<br/> 
            your property transactions with 
            this user-friendly hub, simplifying<br/>
             your search for the perfect home or investment opportunity. <br/>
            Experience the convenience of Property Hub, your centralized destination for all your real estate needs.
            </span>
        
        </div>
        <div className='i-right'>
        <img src={intro}></img>
        </div>
        </div>
            {/* <div className="Cards">
                <div className='div'>

                </div>
            </div> */}

        </>
    )
}