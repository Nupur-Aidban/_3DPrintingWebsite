import InputBox from './InputBox'
import { FaUser, FaEnvelope, FaPhone, FaFacebookMessenger} from 'react-icons/fa';
import './Contact.css'

export default function Contact()
{
    return(
        <div id="contactus">
            <h3>Get started with 3Deology, Where Ideas Take Form!</h3>
            <form>
               <InputBox icon={<FaUser/>} placeholder="Enter Your Name"></InputBox>
               <InputBox icon={<FaEnvelope/>} placeholder="Enter Your Email"></InputBox>
               <InputBox icon={<FaPhone/>} placeholder="Enter Your Mobile Number"></InputBox>
               <InputBox icon={<FaFacebookMessenger/>} placeholder="Enter Your Message"></InputBox>
               <div>
                <button>Submit Enquiry</button>
               </div>
            </form>
        </div>
    );
}