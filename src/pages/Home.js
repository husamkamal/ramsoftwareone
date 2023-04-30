import './Home.css';
import RamLogo from'./images/RamLogo.jpg';
import imgg from './images/imgg.jpg';
import Berzerkball from './images/Berzerkball.jpg';
import Bombwar from'./images/bombwar.jpg';
import Setpoint from './images/SetPoint.jpg';
import Goodcar from'./images/Goodcar.jpg';
import Participate from'./images/Participate.jpg';
import Ayahshop from './images/AyahShop.jpg';
import Esolution from './images/Esolution.jpg';
import Technology from './images/technology.png'
// import Bckgrnd from './images/Bckgrnd.jpg';
import Lap from './images/Lap.jpg'
import { Link } from 'react-router-dom';
// import Slider from "infinite-react-carousel";
import Slide from '../components/Slide';

const Home = () => {   
    return(
        <div>
            <div className='homefirstpart'>
            <div className="background">
                <p>Ramahi Software</p>
                <div className="elements">
                    <div className="square sq1"></div>
                    <div className="square sq2"></div>
                    <div className="square sq3"></div>
                </div> 
            </div>
                <div className='aboutus' style={{backgroundImage: `url(${Lap})`}}>
                    <img className='img' alt='logo' src={RamLogo}/>
                        <span className='sbjct'>About Us</span>
                        <hr/>
                        <div className='cont' >
                            <div className='info'>
                                <span className='txt'>We are Ramahi software committed to innovation and excellence. Our team works tirelessly to develop cutting-edge solutions that address real-world problems and drive progress in multiple software fields. We believe that great software has the power to transform industries, and we are passionate about using our skills to create impactful and sustainable change. We are committed to achieving our goals through hard work, dedication, and a deep understanding of our clients' needs.</span>
                            </div>
                            <img alt='abutusimg' src={Technology}/>
                        </div>
                </div>
            </div>
            <div className='journey'> 
                <div className='scndimg'><img className='journeyimg' alt='imgg' src={imgg}/></div>
                <div className='journeytxt'>
                    <span className='journeyspan'>Our Journey</span>
                    <p>In 2016, our founder started helping IT students pass their exams and complete their graduation projects, for free, as a way to give back to the community. This led to a passion for mobile apps and game development. In 2021, our founder and team started working with Setpoint Engineering Company, broadening our skills and expertise in professional software development. We worked on various projects, including web and system development, and our reputation grew. In 2023, we launched our own software company, offering services in mobile game, web & app development, and system development. We're passionate about innovation and excellence, and committed to delivering high-quality solutions to our clients.</p>
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
                    <div className='box'><span className='details'>Online shop Ayah shop</span><img alt='stpnt' rel='noopener noreferrer' src={Ayahshop}/><Link className='link' to='https://www.ayahshop.com/' target='_blank'>Ayah Shop</Link></div>
                    <div className='box'><span className='details'>Mobile game Berz.Ball</span><img alt='bzball' rel='noopener noreferrer' src={Berzerkball}/><Link className='link' to='https://play.google.com/store/apps/details?id=com.MoRa.BerZerkBall&hl=en_US/' target='_blank'>Berzerk Ball</Link></div>
                    <div className='box'><span className='details'>Elearning app</span><img alt='bzball' rel='noopener noreferrer' src={Esolution}/><Link className='link' to='https://play.google.com/store/apps/details?id=com.abgroupdevfactory.esolution' target='_blank'>E solution</Link></div>
                    <div className='box'><span className='details'>Mobile game space war shooting</span><img alt='bmbwar' rel='noopener noreferrer' src={Bombwar}/><Link className='link' to='https://play.google.com/store/apps/details?id=com.mora.bombwar&hl=en_US/' target='_blank'>Bomb War</Link></div>
                    <div className='box'><span className='details'>Car trading project web app</span><img alt='gdcar' rel='noopener noreferrer' src={Goodcar}/><Link className='link' to='https://car-trade-client.vercel.app/' target='_blank'>Good Car</Link></div>
                    <div className='box'><span className='details'>IT support for setpoint engineering 2021</span><img alt='stpnt' rel='noopener noreferrer' src={Setpoint}/><Link className='link' to='https://set-point-engineering.business.site/' target='_blank'>SetPoint</Link></div>
                    <div className='box'><span className='details'>Participate/collaboration in NFT project</span><img alt='nft' rel='noopener noreferrer' src={Participate}/></div>
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