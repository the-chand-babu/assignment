import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nab-conatainer">
      <div></div>
      <ul>
        <li>
          <Link to={"/home"} className="link-tag">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link-tag">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };
