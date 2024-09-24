import logo from "../assets/spatule-livre-recettes-creation-logo-vectoriel-livre_530862-377.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="recipe-logo" className="logo" />
        <p>Recipe book</p>
      </div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
export default Navbar;
