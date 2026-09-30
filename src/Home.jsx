import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {

  
  return (
  <>
    <div className="container-home">
        <div className="polaroid">
            <img src="./src/assets/home_img.webp" alt="Bild von mir"/>
        </div>
        <div>
            <h1>Mein Portfolio</h1>
            <p id="p-home">Hi, ich bin Selina und studiere Medieninformatik. <br></br>
            Hier erfährst du mehr über mich, meine Skills und meine Interessen!</p>
            <NavLink to="/about">
              <button id="infos">Mehr Infos</button>
            </NavLink>
        </div>
    </div>
  </>
  );
}