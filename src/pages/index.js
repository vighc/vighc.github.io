// pages/index.js
import Header from '../components/Header';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      {/* <Achievements /> */}
      {/* <Leadership /> */}
      <Contact />
      <Footer />
    </div>
  );
}

