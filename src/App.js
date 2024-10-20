import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import Skills from "./components/skills"; // Use Skills with an uppercase "S"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Footer } from './components/footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills /> 
      <Projects/> 
      <Footer/>
    </div>
  );
}

export default App;
