import { Link } from "react-router-dom";

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
            <li>
              {/* <a href="http://localhost:5173/">Home</a> */}
              <Link to="/">home</Link>
            </li>
            <li>
              {/* <a href="http://localhost:5173/">About</a> */}
              <Link to="/About">About</Link>
            </li>
            <li>
              {/* <a href="http://localhost:5173/">Community Groups</a> */}
              <Link to="/Community Groups">Community Groups</Link>
            </li>
            <li>
              {/* <a href="http://localhost:5173/">Get Involved</a> */}
              <Link to="/GetInvolved">Get Involved</Link>
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
