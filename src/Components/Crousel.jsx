import './Crousel.css';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img13 from '../assets/13.png';
import img14 from '../assets/14.png';
import img15 from '../assets/15.png';
import img16 from '../assets/16.png';

export default function Crousel() {
    return (
        <>
            <div className="text1">What Makes Us Different</div>
            <div className="container">
                <div className="contain">
                    <img src={img11} alt="" />
                    <div className="text2">Consistency</div>
                </div>
                <div className="contain">
                    <img src={img12} alt="" />
                    <div className="text2">Improvement</div>
                </div>
                <div className="contain">
                    <img src={img13} alt="" />
                    <div className="text2">Branching</div>
                </div>
                <div className="contain">
                    <img src={img14} alt="" />
                    <div className="text2">Expertise</div>
                </div>
                <div className="contain">
                    <img src={img15} alt="" />
                    <div className="text2">Security</div>
                </div>
                <div className="contain">
                    <img src={img16} alt="" />
                    <div className="text2">Transparency</div>
                </div>
            </div>
        </>
    );
}
