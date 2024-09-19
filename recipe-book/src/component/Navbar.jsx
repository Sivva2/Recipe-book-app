import logo from "../assets/spatule-livre-recettes-creation-logo-vectoriel-livre_530862-377.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="recipe-logo" className="logo" />
      <p>Recipe book</p>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
