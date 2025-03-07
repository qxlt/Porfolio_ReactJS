import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Footer from "./Components/Footer";
import About from "./Components/AboutMe"
import Projects from "./Components/Projects";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}> </Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
