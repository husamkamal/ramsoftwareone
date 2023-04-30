import './Slide.css';
import Slider from "infinite-react-carousel";
import Sketch from './images/Sketch.jpg';
import Music from './images/Music.jpg';
import Coffeshop from './images/Coffeshop.jpg';
import Graph from './images/Graph.jpg';
import Parkapp from './images/Parkapp.jpg';
import Resturant from './images/Resturant.jpg'
const Slide= ()=> {
    return(
        <div className="slde">
            <Slider dots slidesToShow={3}>
                <div className='imgdv'><img className='imgs' alt='Resturant' src={Resturant}/></div>
                <div className='imgdv'><img className='imgs' alt='musc' src={Music}/></div>
                <div className='imgdv'><img className='imgs' alt='cffshp' src={Coffeshop}/></div>
                <div className='imgdv'><img className='imgs' alt='sktch' src={Parkapp}/></div>
                <div className='imgdv'><img className='imgs' alt='grph' src={Graph}/></div>
                <div className='imgdv'><img className='imgs' alt='prkapp' src={Sketch}/></div>                               
            </Slider>
        </div>
    )
}
export default Slide;