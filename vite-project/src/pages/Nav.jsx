import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import '../styles/Menu.css';



function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="nav-container">
      <img
        className="nav"
        src="src/assets/navicon.svg"
        alt=""
        onClick={() => setIsNavOpen(!isNavOpen)}
      />
      {isNavOpen && (
        <div className="nav-menu">
          <div className="close" onClick={() => setIsNavOpen(false)}>
            X
          </div>
          <Link to="/menu" onClick={() => setIsNavOpen(false)}>
            Meny
          </Link>
          <Link to="/about" onClick={() => setIsNavOpen(false)}>
            Vårt Kaffe
          </Link>
          <Link to="/orderstatus" onClick={() => setIsNavOpen(false)}>
            Orderstatus
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
