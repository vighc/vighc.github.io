// pages/index.js
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Leadership />
      <Footer />
    </div>
  );
}
