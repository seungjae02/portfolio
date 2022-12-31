import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stars from './components/background/Stars';
import Landing from './landing/Landing';
import About from './about/About';
import Projects from './projects/Projects';
import Experience from './experience/Experience';
import GetInTouch from './getintouch/GetInTouch'

import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Stars/>
      <Landing/>
      <About/> 
      <Experience/>
      <Projects/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
