import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from './components/projects/Projects'

const App = ()=> {
  return(
    <>
      <Header />
      <Nav/>
      <About />
      <Projects />
      <Contact />
    </>

  )

}

export default App;
