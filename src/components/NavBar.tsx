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
              <a href="http://localhost:5173/">Home</a>
            </li>
            <li>
              <a href="http://localhost:5173/">About</a>
            </li>
            <li>
              <a href="http://localhost:5173/">Community Groups</a>
            </li>
            <li>
              <a href="http://localhost:5173/">Get Involved</a>
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
