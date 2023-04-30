import { Link } from "react-router-dom";
import"./Ourteam.css";

const Ourteam = () => {
    return(
        <div className="contai">
            <div className="team"><h1>Our team</h1></div>
            <div className="Mod"><p>Mohammad Alramahi</p><span>Founder & CEO</span></div>
            <div className="tm"><p>Ahmad Alramahi</p></div>
            <div className="tm"><p>Hussameddin Kamal</p></div>
            <div className="tm"><p>Jane Doe</p></div>
            <div className="desin"><p>Islam Yazouri:</p> <Link className="link2" to='https://www.behance.net/islamyazory/projects' target="_blank"> <span>Designer profile</span></Link></div>
        </div>
    )
}

export default Ourteam;