import { FaLinkedinIn, FaInstagramSquare, FaTwitter} from 'react-icons/fa';

import './Footer.css'

export default function Footer() {
    return (
        <div id="footer">
            <div id='left-footer'>
                <p>
                    <a href='mailto:bhadoriyaaryan746@gmail.com' className='mailId'>bhadoriyaaryan746@gmail.com</a></p>
                   <p>+91 9913167579</p>
                <hr />
                <p id='copyright'>&copy; Aryan Singh Bhadoriya, All rights reserved.</p> 

            </div>
            <div id='right-footer'>
                <div className='social-media'>
                    <span><FaLinkedinIn/></span>
                    <span><FaInstagramSquare/></span>
                    <span><FaTwitter/></span>
                </div>
            </div>

        </div>
    );
}