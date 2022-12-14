import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/1.jpg";
import Footer from "../Components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}
export default Service;
