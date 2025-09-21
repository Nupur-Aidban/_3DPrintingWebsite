import MainImg from '../assets/3DMain1.jpeg'
import './Main.css'

export default function Main()
{
    return(
        <>
        <div id='mainImg'> 
        <img src={MainImg} alt='3DPrinting'></img>
        <div className="center">3D Printing Services <br /><span className='slogan'>Design | Print | Deliver</span> </div> 
         </div>

        </>
    );
}