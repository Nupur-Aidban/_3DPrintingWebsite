import './Header.css'
import Logo from '../assets/Aryan3DLogo.png'

export default function Header()
{
    return(
        <header id='header'>
            <div>
           <img src={Logo} alt='Aryan3D'></img>
            </div>
           <div>
            <ul>
                <li><a href="header">Home</a></li>
                <li><a href="#aboutUs">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
           </div>
        </header>

    );
}