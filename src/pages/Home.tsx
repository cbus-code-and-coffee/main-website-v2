import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Section from "../components/Section";
import WhatToExpect from "../components/WhatToExpect";
import GetInvolved from "../components/GetInvolved";
// import SiteForm from "../components/SiteForm";

const handleClick = () => {
  window.open("https://www.meetup.com/columbus-code-and-coffee/", "_blank");
};

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero
        title={"Columbus Code & Coffee"}
        subtitle={"The software engineering community for devs by devs"}
        btnText={"Join the Community"}
        btnHref={"https://www.meetup.com/columbus-code-and-coffee/"}
        onClick={handleClick}
      />
      <>
        <Section>
          <Card
            image={"https://dummyimage.com/600x400/eeeeee/fff"}
            imageAlt={"Image"}
            title={"About Us"}
            pText={
              "Lorem ipsum demo demoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            btnText={"Learn more"}
          />
        </Section>
        <WhatToExpect />
        <GetInvolved />
      </>
      {/* <SiteForm title="Get in Touch" subtitle="Please contact us" /> */}
      <Footer />
    </>
  );
};

export default Home;
