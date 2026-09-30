import { NavLink } from "react-router-dom";
import "./Traveling.css";

export default function Traveling() {
  return (
    <>
      <h1 id="h1-traveling">Meine Reisen</h1>
      <div className="grid-travel">
        
        <NavLink to="/amsterdam" className="destination-link">
            <figure className="grid-item" id="card-amsterdam">
                <img src="./src/assets/amsterdam/amsterdam-1.webp" alt="Bild von Häusern in Amsterdam"/>
                <figcaption>Amsterdam</figcaption>
            </figure>
        </NavLink>

        <NavLink to="/rome" className="destination-link">
            <figure className="grid-item" id="card-rome">
                <img src="./src/assets/rom/rom-1.webp" alt="Bild von Kolosseum in Rom"/>
                <figcaption>Rom</figcaption>
            </figure>
        </NavLink>

        <NavLink to="/sao_miguel" className="destination-link">
            <figure className="grid-item" id="card-sao-miguel">
                <img src="./src/assets/sao-miguel/sao-miguel-1.webp" alt="Bild von blauer Hortensie auf den Azoren"/>
                <figcaption>São Miguel</figcaption>
            </figure>
        </NavLink>

        <NavLink className="destination-link">
            <figure className="grid-item">
                <img src="./src/assets/dublin/dublin-1.webp" alt="Bild eines Gebäudes in Dublin"/>
                <figcaption>Dublin</figcaption>
            </figure>
        </NavLink>

        <NavLink className="destination-link">
            <figure className="grid-item">
                <img src="./src/assets/nizza/nizza-1.webp" alt="Aussicht über Nizza und das Meer"/>
                <figcaption>Nizza</figcaption>
            </figure>
        </NavLink>

      </div>
    </>
  );
}