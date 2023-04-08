import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience';
import Footer from './Pages/Footer/Footer';
import LandingPage from './Pages/LandingPage/LandingPage';
import Proficiency from './Pages/Proficiency/Proficiency';
import Project from './Pages/Project/Project';

function App() {
  return (
    <>
      <LandingPage />
      <About/>
      <Proficiency/>
      {/* <Education/> */}
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
