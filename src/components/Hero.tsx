interface HeroProps {
  title: string;
  subtitle: string;
  btnText?: string;
  btnHref?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Hero = (props: HeroProps) => {
  return (
    <>
      <div
        id="home"
        className="hero-wrapper flex flex-col justify-center items-center w-screen p-44 bg-gray-300"
      >
        <div className="hero-headers-wrapper flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl">{props.title}</h1>
          <h2 className="text-2xl">{props.subtitle}</h2>
        </div>
        <div className="hero-btn-wrapper mt-8">
          <button
            onClick={props.onClick}
            className="btn-black-text"
            data-testid="hero-button"
          >
            Join the Community
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
