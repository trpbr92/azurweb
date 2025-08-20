import { Link } from "react-router-dom";

import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-links">
          <Link to="/">
            <img
              style={{ width: "50px", height: "auto", borderRadius: "8px" }}
              src="../src/assets/icons/home.png"
              alt="Home"
              className="nav-home"
            />
          </Link>
          <Link to="/about">about</Link>
          <Link to="/music">music</Link>
          <Link to="/albums">photos</Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
