import { header_menu } from "../export_img";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="nav_logo">
        <p className="header_logo">Logo</p>
      </Link>
      <div className="nav_list">
        <Link to={"/"} className="nav_list_link">
          Home
        </Link>
        <Link to={"/projects"} className="nav_list_link1">
          Projects
        </Link>
        <Link to="/aboutme" className="nav_list_link1">
          About Me
        </Link>
      </div>
    </header>
  );
}
