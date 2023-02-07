import React, {useState} from "react";
import Slider from "../../silder/Slider";
import Interest from "./interested/interest";
import BlogSection from "./blog_section/BlogSection";
import About from "../about_us/About";
import Jobs from "./jobs/Jobs";
import Footer from "../../footerComponent/Footer";

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Interest />
            <Jobs />
            <BlogSection />
            <Jobs />
            {/*<Reachout />*/}
                <Footer />

        </>
    );
}
export default Home;