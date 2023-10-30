import buttonColorClasses from "../ui/buttonColorClasses";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle: string;
  btnText: string;
  btnHref: string;
}

const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="hero-wrapper flex flex-col justify-center items-center w-screen p-44 bg-gray-300">
        <div className="hero-headers-wrapper flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl">{props.title}</h1>
          <h2 className="text-2xl">{props.subtitle}</h2>
        </div>
        <div className="hero-btn-wrapper mt-8">
          <Button
            class={buttonColorClasses.blackTextBtn}
            label={props.btnText}
            href={props.btnHref}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
