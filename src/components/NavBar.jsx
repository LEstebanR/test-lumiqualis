import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>NASA  Image Search</Link>
    </nav>

  )
}

export default NavBar;