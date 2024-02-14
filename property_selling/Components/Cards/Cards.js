import './Cards.css'    
export default function Cards({emoji,heading,detail}){
    return(
        <>
        <div className='Cards'
        >
            <img src={emoji}/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className='learn'>Learn more</button>
        </div>
        </>
    )
    }