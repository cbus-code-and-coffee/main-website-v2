import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setDropDownMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setDropDownMenu((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  return (
    <>
      <div className="navbar-wrapper flex flex-row items-center place-content-between px-7 py-8">
        <div className="hidden md:navbar-logo">
          <img
            className="rounded-full"
            src="http://placekitten.com/50/50"
            alt="logo for Columbus Code & Coffee"
          />
        </div>
        <div className="md:hidden">
          <button className="border-none" onClick={handleClick}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="85" height="15"></rect>
              <rect y="30" width="85" height="15"></rect>
              <rect y="60" width="85" height="15"></rect>
            </svg>
          </button>
          {dropDownMenu ? (
            <div
              ref={dropDownRef}
              className=" absolute bg-gray-200 w-30 h-70 px-5 py-5"
            >
              <ul className="flex-col">
                <li className="cursor-pointer p-1">
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer p-1">
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li className="cursor-pointer p-1">
                  <a href="http://localhost:5173/">Community Groups</a>
                </li>
                <li className="cursor-pointer p-1">
                  <Link to="get-involved" smooth={true} duration={500}>
                    Get Involved
                  </Link>
                </li>
                <li>
                  <button className="border-none p-1">Contact</button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="navbar-links">
          <ul className="hidden md:flex flex-row gap-14">
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
