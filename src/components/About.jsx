import './About.css'
import Aim from '../assets/Aim.jpg'

export default function Aboutus() {
    return (
        <div id="aboutUs">
            <div className='aboutus-content'>
                <img src={Aim} alt='About-us'></img>
                <div className='aboutMain'>
                    <h3>Our Aim </h3>
                    <code id='content'>At A3D, we bring your ideas to life through high-quality 3D printing. Founded by a passionate Engineer with a love
                        for design and innovation, we offer customized printing solutions for individuals, designers, and small businesses.
                        <br /><br />Whether it's a prototype, a personalized gift, or a custom part — we&apos;re here to turn your vision into reality, layer by layer. As a startup, we focus on detail, reliability, and personal service to make your 3D experience smooth and satisfying.
                        <br /><br />Let&apos;s create something amazing together.</code>
                </div>
            </div>

        </div>
    );
}