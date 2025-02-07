import { useState, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css"; 

const Navbar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar" ref={ref}>
      <div className="container">
        <div className="logo">Burak Karahan - Yazılım Mühendisi</div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"} {/* Menü açıkken "X", kapalıyken "☰" simgesi */}
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link 
              to="/" 
              onClick={() => handleLinkClick("/")} 
              className={location.pathname === "/" ? "active" : ""}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link 
              to="/cv" 
              onClick={() => handleLinkClick("/cv")} 
              className={location.pathname === "/cv" ? "active" : ""}
            >
              CV - Özgeçmiş
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              onClick={() => handleLinkClick("/portfolio")} 
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolyo
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              onClick={() => handleLinkClick("/blog")} 
              className={location.pathname === "/blog" ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              onClick={() => handleLinkClick("/about")} 
              className={location.pathname === "/about" ? "active" : ""}
            >
              Hakkımda
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              onClick={() => handleLinkClick("/contact")} 
              className={location.pathname === "/contact" ? "active" : ""}
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
