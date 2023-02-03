import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/navbar/home/Home";
import Blog from "./components/navbar/blog/Blog";
import Service from "./components/navbar/service/Service";
import Categroy from "./components/navbar/home/category/Categroy";
import About from "./components/navbar/about_us/About";
import Reachout from "./components/navbar/reach_out/Reachout";
import Jobs from "./components/navbar/jobs/job files/jobComponent/Job";

function App() {
  return (
      <>
          <Router>

          <Navbar />
              <Routes >
                  <Route path="/" element={<Home />} exact />
                  <Route path="/Blog" element={<Blog />} exact />
                  <Route path="/Service" element={<Service />} exact />
                  <Route path="/ReachOut" element={<Reachout />} exact />
                  <Route path="/AboutUs" element={<About />} exact />
                  <Route path="/Jobs" element={<Jobs />} exact />
                  <Route path="/Category" element={<Categroy />} exact />
              </Routes >
          </Router>
        {/*<Slider />*/}
      </>
  );
}

export default App;
