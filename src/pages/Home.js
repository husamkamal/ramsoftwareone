import { useState } from 'react';
import './Home.css';
import RamLogo from'./images/RamLogo.jpg';
import imgg from './images/imgg.jpg';
import Berzerkball from './images/Berzerkball.jpg';
import Bombwar from'./images/bombwar.jpg';
import Setpoint from './images/SetPoint.jpg';
import Petscare from './images/PetsCare.jpg';
import Goodcar from'./images/Goodcar.jpg';
import Participate from'./images/Participate.jpg';
import Ayahshop from './images/AyahShop.jpg';
import Esolution from './images/Esolution.jpg';
// import Sketch from './images/Sketch.jpg';
// import Music from './images/Music.jpg';
// import Coffeshop from './images/Coffeshop.jpg';
// import Graph from './images/Graph.jpg';
// import Parkapp from './images/Parkapp.jpg';
import { Link } from 'react-router-dom';
// import Slider from "infinite-react-carousel";
import Slide from '../components/Slide';

const Home = () => {
    const [value, setValue]=useState(0);
    const [fact, setFact]=useState('');
    
    const changeHandler = (e)=>{
        setValue(e.target.value);
        console.log(value)
    }

     const result = () => {
        fetch(`http://numbersapi.com/${value}`).then(response=>response.text()).then(data =>setFact(JSON.stringify(data)));
        console.log(fact)
    }

    return(
        <div>
            <div className='notification'> we are working hard to build innovative solutions that will make a positive impact in our industry  </div>
            <div className='homefirstpart'>
                <div className='aboutus'>
                    <img className='img' alt='logo' src={RamLogo}/>
                        <span className='sbjct'>About Us</span>
                        <hr/>
                        <span className='txt'>We are Ramahi software committed to innovation and excellence. Our team works tirelessly to develop cutting-edge solutions that address real-world problems and drive progress in multiple software fields. We believe that great software has the power to transform industries, and we are passionate about using our skills to create impactful and sustainable change. We are committed to achieving our goals through hard work, dedication, and a deep understanding of our clients' needs.</span>
                </div>
                <div className='fungame'>
                    <div>
                        <h4> boring day? let's have some fun</h4>
                        <h6>give me any number from 0 to 9999</h6>
                        <input id='num' type='number' placeholder='0000' 
                        min='-9999' max='9999' onChange={changeHandler}/>
                        <button onClick={result}>Go...</button>
                    </div>
                    <span className='factspan'><strong>'!{fact}'</strong></span>
                </div>
            </div>
            <div className='journey'> 
                <div className='scndimg'><img className='journeyimg' alt='imgg' src={imgg}/></div>
                <div className='journeytxt'>
                    <span className='journeyspan'>Our Journey</span>
                    <p>Our journey began in 2016, when our founder started helping IT students to pass their exams and complete their graduation projects. He did this for free, as a way to give back to the community and help aspiring developers and IT professionals get a foothold in the industry. It wasn't long before he discovered a passion for mobile apps and game development, and began creating games just for fun.

In 2021, our founder and his team began working with Setpoint Engineering Company as their IT support. This experience helped to broaden our team's skills and expertise, and introduced us to the world of professional software development.

From there, we began working on a variety of projects, including web development and system development. As our skills and reputation grew, so did our ambitions. In 2023, we decided to take the next step in our journey and made the first launch of our own software company.

Today, we are proud to offer a wide range of software development services, including mobile game development, web & app development, and system development. We are driven by a passion for innovation and excellence, and are committed to delivering the highest quality solutions to our clients.</p>
                </div>
            </div>
            <div className='ourservices'>
                <div className='services'>{`Our services`}</div>
                <ul>
                    <li>IT support</li>
                    <li>mobile games development</li>
                    <li>Web apps development</li>
                    <li>mobile apps development</li>
                    <li>web & apps designing</li>
                </ul>
            </div>
            <div className='references container'>
                <h2>References Background</h2>
                <div className='projects grid-wrapper'>
                    <div className='box'><span className='details'>OnlineShop Ayashop</span><img alt='stpnt' rel='noopener noreferrer' src={Ayahshop}/><Link className='link' to='https://www.ayahshop.com/' target='_blank'>go to Ayahshop</Link></div>
                    <div className='box'><span className='details'>Android game Berzerk ball</span><img alt='bzball' rel='noopener noreferrer' src={Berzerkball}/><Link className='link' to='https://play.google.com/store/apps/details?id=com.MoRa.BerZerkBall&hl=en_US/' target='_blank'>go to BerzerkBall</Link></div>
                    <div className='box'><span className='details'>Elearning app</span><img alt='bzball' rel='noopener noreferrer' src={Esolution}/><Link className='link' to='https://play.google.com/store/apps/details?id=com.abgroupdevfactory.esolution' target='_blank'>go to esolution</Link></div>
                    <div className='box'><span className='details'>Bomb war space war shooting game</span><img alt='bmbwar' rel='noopener noreferrer' src={Bombwar}/><Link className='link' to='https://play.google.com/store/apps/details?id=com.mora.bombwar&hl=en_US/' target='_blank'>go to BombWar</Link></div>
                    <div className='box'><span className='details'>Car trading project web app</span><img alt='gdcar' rel='noopener noreferrer' src={Goodcar}/><Link className='link' to='https://car-trade-client.vercel.app/' target='_blank'>go to GoodCar</Link></div>
                    <div className='box'><span className='details'>Participate/collaboration in NFT project</span><img alt='nft' rel='noopener noreferrer' src={Participate}/><span>No link</span></div>
                    <div className='box'><span className='details'>Pets care project mobile app</span><img alt='ptscre' rel='noopener noreferrer' src={Petscare}/><span>Not released yet</span></div>
                    <div className='box'><span className='details'>IT support for setpoint engineering 21/22</span><img alt='stpnt' rel='noopener noreferrer' src={Setpoint}/><Link className='link' to='https://set-point-engineering.business.site/' target='_blank'>contact SetPoint</Link></div>
                </div>
            </div>
                <div className='thrdprt'>
                    <div className='design'>
                    <pre>our designing work and our collaboration projects</pre>
                    </div>
                    
                    <Slide/>
                </div>

        
    </div>
    )
}

export default Home;