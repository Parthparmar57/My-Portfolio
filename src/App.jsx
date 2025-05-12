import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero Section/hero';
import Project from './components/projects/project_sec'
import About from './components/about/about_sec'
import Contact  from './components/contact/contact_sec';
import Footer from './components/footer Sec/footer';

function App() {
  return (<div>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    <hr />
    <Footer></Footer>
    </div>
  )
}

export default App;
