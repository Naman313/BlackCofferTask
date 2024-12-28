import './Footer.css'
import footer from '../assets/Footer.png'
import gif from '../assets/giffy.gif';
export default function Footer(){
    return(
        <>
        <div className='FooterContainer'>
        <img src={footer} alt="" />
        <img src= {gif} alt="loading...." className='giffy' />
        </div>
        </>
    )
}