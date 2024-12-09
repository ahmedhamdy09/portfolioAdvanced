import "./App.css";
import About from "./components/abouts/About";
import ContactMe from "./components/contactsMe/ContactMe";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Headers from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Headers />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
