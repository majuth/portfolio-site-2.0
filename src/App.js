import './App.css';
import Description from './components/description/description';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Title from './components/title/title';
import ProgressBar from './components/common/progress-bar';
import Quote from './components/common/quote';
import Question from './components/common/question';
import { gsap, ScrollTrigger } from 'gsap/all';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="App">
      <ProgressBar/>
      <header className="App-header">
        <Header/>
      </header>
        <main className='flex-col flex'>
          <Title/>
          <Description/>
          <Projects/>
          <Quote />
          <Skills/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Experience/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Question />
          <Footer/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>
    </div>
  );
}

export default App;
