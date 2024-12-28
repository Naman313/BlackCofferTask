import './Card.css'
import Card1 from '../assets/1.png';
import Card2 from '../assets/2.png';
import Card3 from '../assets/Card3.png';
import Card4 from '../assets/Card4.png';
import Card5 from '../assets/Card5.png';
import Card6 from '../assets/Card6.png';
import Card7 from '../assets/Card7.png';
import Card8 from '../assets/Card8.png';
export default function Card(){
    return(
        <>
        <div className="container11">
            <div className='card'>
                <img src={Card1} alt="" id="Card1"/>
                <div className="overlay">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, necessitatibus possimus vitafddf earum voluptas veniam delectus veritatis cum inventore sed, provident quasi. Culpa itaque rerum corrupti voluptatibus quo in.</div>
            </div>
            <div className='card'>
                <img src={Card2} alt="" />
                <div className="overlay">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, necessitatibus possimus vitae earum voluptas veniam delectus veritatis cum inventore sed, provident quasi. Culpa itaque rerum corrupti voluptatibus quo in.</div>
            </div>
            <div className="card">
                <img src={Card3} alt="" />
                <div className="overlay">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, necessitatibus possimus vitae earum voluptas veniam delectus veritatis cum inventore sed, provident quasi. Culpa itaque rerum corrupti voluptatibus quo in.</div>
            </div>
            <div className="card">
                <img src={Card4} alt="" />
                <div className="overlay">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium aperiam sunt dolor sed sequi qui fugit ratione fuga obcaecati autem blanditiis natus maxime maiores voluptas, libero minus, dolorem ad similique.</div>
            </div>
            <div className="card">
                <img src={Card5} alt="" />
                <div className="overlay">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae ex suscipit sed mollitia aut numquam? Recusandae commodi, perferendis repudiandae perspiciatis asperiores ex facere similique provident! Quia repellendus porro in.</div>
            </div>
            <div className="card">
                <img src={Card6} alt="" />
                <div className="overlay">Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis officiis facere expedita eaque minus quod? Fuga, vitae voluptate dolor deserunt sunt esse, labore quod eius ut sint, nostrum enim.</div>
            </div>
            <div className="card">
                <img src={Card7} alt="" />
                <div className="overlay">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptate qui earum architecto cum enim facilis mollitia praesentium voluptates ex dolores, minus, cupiditate harum perferendis voluptatibus, error tenetur et. Error.</div>
            </div>
            <div className="card">
                <img src={Card8} alt="" />
                <div className="overlay">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos soluta aliquid unde, facilis molestiae voluptatem est odio nihil molestias aut! Corporis eum repellat ea tenetur aliquid itaque voluptates sed?</div>
            </div>
        </div>
        </>
    )
}