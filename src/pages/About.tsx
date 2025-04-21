import AboutCard from "../components/AboutCard";
import SectionCard from "../components/SectionCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavBar />
      <AboutCard
        isNotReversed={true}
        title={"About Us"}
        image={"https://dummyimage.com/600x400/eeeeee/fff"}
        subTitle={"Our Mission"}
        pText={
          "Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <AboutCard
        isNotReversed={false}
        image={"https://dummyimage.com/600x400/eeeeee/fff"}
        subTitle={"Our Story"}
        pText={
          "Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />

      <div className="p-5">
        <h3 className="text-2xl text-center p-7 "> Our Team</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
          nihil deserunt quaerat ullam tenetur quibusdam dignissimos dolor porro
          eligendi neque culpa, temporibus at. Delectus provident corporis, sunt
          qui magni nihil!
        </p>
        <div className="flex gap-4 justify-center">
          <SectionCard
            image="https://dummyimage.com/600x400/eeeeee/fff"
            imgWrapperStyle="flex justify-center p-2"
            imageStyle="rounded-xl w-56"
            isButton={false}
          />
          <SectionCard
            image="https://dummyimage.com/600x400/eeeeee/fff"
            imgWrapperStyle="flex justify-center p-2"
            imageStyle="rounded-xl w-56"
            isButton={false}
          />
          <SectionCard
            image="https://dummyimage.com/600x400/eeeeee/fff"
            imgWrapperStyle="flex justify-center p-2"
            imageStyle="rounded-xl w-56"
            isButton={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
