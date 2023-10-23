import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero
        title={"Columbus Code & Coffee"}
        subtitle={"The software engineering community for devs by devs"}
        btnText={"Join the Community"}
      />
      <Footer />
    </>
  );
};

export default Home;
