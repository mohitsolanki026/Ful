import Home from "./components/Home"
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import Part2 from "./components/Part2";
import Detail from "./components/details/Detail";
import Partner from "./components/Partner";
import Testimonials from "./components/Testimonials";
import SimpleAccordion from "./components/Accordion";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

// import { Detail } from "./components/details/Detail";

function App() {
  return (
    <div className="App" >
     <Home />
     <Part2 />
     <Detail />
     <Partner />
     <Testimonials />
     <Accordion />
     <Footer />
    </div>
  );
}

export default App;
