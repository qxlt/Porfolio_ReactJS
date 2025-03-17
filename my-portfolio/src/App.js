
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="background">
      <Header/>
      <Navbar home="Home" about="About" project="Projects"/>
      <div className="mx-40">
        <HomePage/>
        <AboutMe/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
