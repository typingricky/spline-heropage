import { NavBar } from "../src/components/NavBar/NavBar";
import {BrowserRouter as Router} from 'react-router-dom'
import Home from "./components/Home";
import Skills from "../src/components/Skills/Skills";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Home/>
      <Skills />
    </Router>
  )
}

export default App;