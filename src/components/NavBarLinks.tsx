import { Link } from "react-scroll";

interface LinksProps {
  className: string;
}

const NavBarLinks = (props: LinksProps) => {
  return (
    <>
      <ul className={props.className}>
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
          <Link to="get-involved" smooth={true} duration={500}>
            Get Involved
          </Link>
        </li>
        <li className="cursor-pointer p-1">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBarLinks;
