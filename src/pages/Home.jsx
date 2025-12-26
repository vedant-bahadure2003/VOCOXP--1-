import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FrontComponent from "../component/FrontComponent";
import AboutTabs from "../component/AboutTabs";
import Video from "../component/Video";
import VocoXpVidForm from "../component/VocoXpVidForm";
import AboutVocoInfo from "../component/AboutVocoInfo";
import UseCards from "../component/UseCards";
import UseCases from "../component/InnerAbout"

const Home = () => {
  return (
    <>
      <Navbar />

      {/* PAGE CONTENT */}
      <main>
        <section id="home">
          <FrontComponent />
        </section>
        
        <section>
          {/* <Carasoul /> */}
          <UseCards />
        </section>
        <section id="about">
          <AboutTabs />
        </section>
        <section id="usecases">
          <Video />
        </section>
        <section >
          <UseCases />
        </section>
        <AboutVocoInfo />
        <section id="contact">
          <VocoXpVidForm />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
