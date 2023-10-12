import { NavLink } from "react-router-dom";

import "../Navigation/navigation.scss";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header>
      
      <div className="navigation">
        <Logo /> 
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
