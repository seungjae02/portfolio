import './App.css';
import Landing from './landing/Landing';
import About from './about/About';
import Experience from './experience/Experience';
import Stars from './components/Stars'

function App() {
  return (
    <div className="App">
      <Stars/>
      <Landing/>
      <About/> 
    </div>
  );
}

export default App;
