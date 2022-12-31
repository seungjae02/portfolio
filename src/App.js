import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './landing/Landing';
import About from './about/About';
import Experience from './experience/Experience';
import Stars from './components/background/Stars';
import Projects from './projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Stars/>
      <Landing/>
      <About/> 
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
