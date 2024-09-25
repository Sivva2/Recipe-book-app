import logo from "../assets/spatule-livre-recettes-creation-logo-vectoriel-livre_530862-377.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src={logo} alt="recipe-logo" className="logo" />

          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/">Dashboard</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <p>Recipe book</p>
      </div>
    </nav>
  );
}
export default Navbar;
