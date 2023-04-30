import './Navbar.css';
// import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Navbar = ()=>{
    // const { t, i18n } = useTranslation();
    // const {pathname}= useLocation();
    return(
        <div className="navbar"> 
            <div className="barcontent">
                <Link to="/"><h3>Ramahi software </h3></Link>
                <Link to="/contactus" className='link'><span>Contact us{/*{t('contact')}*/}</span></Link>
                <Link to="/ourteam" className='link'><span>Our team{/*{t('contact')}*/}</span></Link>
            </div>
            
            {/* <div className="btns">
                { i18n.language==='en' &&
                    <button onClick={()=>{ i18n.changeLanguage('ar');}}>AR</button>
                }
                { i18n.language==='ar' &&
                    <button onClick={()=>{ i18n.changeLanguage('en');}}>EN</button> 
                }
            </div> */}
        </div>
    )
}

export default Navbar;