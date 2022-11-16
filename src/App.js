import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitStats from "./components/GitStats";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <GitStats></GitStats>
      <Contact></Contact>
      <Footer></Footer>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
