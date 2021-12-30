import { Link } from "react-router-dom";

const NavBar = () => {

  const refresh=() => {
    window.location("/")
    window.location.reload();
  }

  return(
    <nav className="navbar">
      <Link className="link" to={""} onClick={refresh}>Home</Link>
      <Link className="link" to={"/search"}>NASA  Image Search</Link>
    </nav>

  )
}

export default NavBar;