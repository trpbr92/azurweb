import { Link } from "react-router-dom";

import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-links">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/music">music</Link>
          <Link to="/photos">photos</Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
