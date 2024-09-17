interface HeroProps {
  title: string;
  subtitle: string;
  handleClick: MouseEvent;
}

const handleClick = () => {
  window.open("https://www.meetup.com/columbus-code-and-coffee/", "_blank");
};

const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="hero-wrapper flex flex-col justify-center items-center w-screen p-44 bg-gray-300">
        <div className="hero-headers-wrapper flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl">{props.title}</h1>
          <h2 className="text-2xl">{props.subtitle}</h2>
        </div>
        <div className="hero-btn-wrapper mt-8">
          <button onClick={handleClick} className="btn-black-text">
            Join the Community
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
