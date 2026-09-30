import { Link, NavLink } from "react-router-dom";
import "./App.css";

export default function Header() {
  return (
    <header>
      <div className="nav-logo">
              <Link to="/">Selina Reitinger</Link>
          </div>
          <div className="nav-header">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">Über mich</NavLink>
              
              <div className="dropdown">
              <NavLink to="/traveling">Reisen ▾</NavLink>
              <div className="dropdown-content">
                  <Link to="/amsterdam">Amsterdam</Link>
                  <Link to="/rome">Rom</Link>
                  <Link to="/sao_miguel">São Miguel</Link>
              </div>
          </div> 
        </div>
    </header>
  );

}