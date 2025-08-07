import { useState, useEffect, useRef } from "react";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [isHamburgerButton, setIsHamburgerButton] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setDropDownMenu(false);
        setIsHamburgerButton(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setIsHamburgerButton(false);
    setDropDownMenu(true);
  };

  const handleClose = () => {
    setIsHamburgerButton(true);
    setDropDownMenu(false);
  };

  return (
    <>
      <div className="navbar-wrapper flex flex-row items-center place-content-between px-7 py-8">
        <div className="hidden md:block">
          <img
            className="rounded-full"
            src="http://placekitten.com/50/50"
            alt="logo for Columbus Code & Coffee"
          />
        </div>
        <div className="md:hidden">
          {isHamburgerButton ? (
            <button className="border-none" onClick={handleOpen}>
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="85" height="15"></rect>
                <rect y="30" width="85" height="15"></rect>
                <rect y="60" width="85" height="15"></rect>
              </svg>
            </button>
          ) : (
            <button className="border-none" onClick={handleClose}>
              <svg viewBox="0 0 100 80" width="40" height="40">
                <path
                  d="M20 20 L80 60 M80 20 L20 60"
                  stroke="#005"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          )}

          {dropDownMenu ? (
            <div ref={dropDownRef}>
              <NavBarLinks className="flex flex-col md:hidden" />
            </div>
          ) : null}
        </div>
        <div className="navbar-links">
          <NavBarLinks className="hidden md:flex flex-row gap-14" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
