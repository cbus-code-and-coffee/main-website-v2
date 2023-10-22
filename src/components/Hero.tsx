const Hero = (props: { title: string; subtitle: string; btnText: string }) => {
  return (
    <>
      <div className="hero-wrapper flex flex-col justify-center items-center w-screen h-screen">
        <div className="hero-headers-wrapper flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl">{props.title}</h1>
          <h2 className="text-2xl">{props.subtitle}</h2>
        </div>
        <div className="hero-btn-wrapper mt-8">
          <button>{props.btnText}</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
