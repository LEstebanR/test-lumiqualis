import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <nav className="navbar">
      <Link className="link" to={"/"}>Home</Link>
      <Link className="link" to={"/search"}>NASA  Image Search</Link>
    </nav>

  )
}

export default NavBar;