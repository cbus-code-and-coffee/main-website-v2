const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-4 gap-10 py-20 bg-gray-100">
        <div className="grid place-items-center">
          <img
            className="rounded-full"
            src="http://placekitten.com/100/100"
            alt="logo of Columbus Code & Coffee"
          />
        </div>
        <div>
          <nav>
            <ul className="flex flex-col md:flex-row justify-center gap-7">
              <li>
                <a href="http://localhost:5173/">Home</a>
              </li>
              <li>
                <a href="http://localhost:5173/">Privacy Notice</a>
              </li>
              <li>
                <a href="http://localhost:5173/">Community Guidelines</a>
              </li>
              <li>
                <a href="http://localhost:5173/">Accessibility Statement</a>
              </li>
              <li>
                <a href="http://localhost:5173/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav className="grid place-items-center">
            <ul className="flex flex-row gap-3">
              <li>
                <a href="http://localhost:5173/">Meetup</a>
              </li>
              <li>
                <a href="http://localhost:5173/">LinkedIn</a>
              </li>
              <li>
                <a href="http://localhost:5173/">Twitter</a>
              </li>
              <li>
                <a href="http://localhost:5173/">Discord</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:font-normal text-sm flex flex-col justify-center text-center items-center gap-2">
          <p>© 2023 Columbus Code & Coffee. All rights reserved.</p>
          <p>NPO Tax ID: XX-XXXXXX</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
