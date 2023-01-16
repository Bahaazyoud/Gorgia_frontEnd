import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/silder/Slider";
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import Home from "./components/navbar/home/Home";
import Blog from "./components/navbar/blog/Blog";
import Service from "./components/navbar/service/Service";
import Contact from "./components/navbar/contact_us/Contact";
import Job from "./components/navbar/job/Job";
import Interested from "./components/navbar/home/interested_in/Interested";

function App() {
  return (
      <>
          <Router>

          <Navbar />
              <Routes >
                  <Route path="/" element={<Home />} exact />
                  <Route path="/Blog" element={<Blog />} exact />
                  <Route path="/Service" element={<Service />} exact />
                  <Route path="/Contact" element={<Contact />} exact />
                  <Route path="/Job" element={<Job />} exact />
              </Routes >
          </Router>
        {/*<Slider />*/}
      </>
  );
}

export default App;
