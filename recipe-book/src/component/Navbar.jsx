import logo from "../assets/spatule-livre-recettes-creation-logo-vectoriel-livre_530862-377.jpg";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="recipe-logo" className="logo" />
      <p>Recipe book</p>
    </nav>
  );
}
export default Navbar;
