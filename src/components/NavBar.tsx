import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <div className="navbar-wrapper flex flex-row items-center place-content-between px-7 py-8">
        <div className="navbar-logo">
          <img
            className="rounded-full"
            src="http://placekitten.com/50/50"
            alt="logo for Columbus Code & Coffee"
          />
        </div>
        <div className="navbar-links">
          <ul className="flex flex-row gap-14">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <a href="http://localhost:5173/">Community Groups</a>
            </li>
            <li className="cursor-pointer">
              <Link to="get-involved" smooth={true} duration={500}>
                Get Involved
              </Link>
            </li>
            <li>
              <button className="btn-blue-bg">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
