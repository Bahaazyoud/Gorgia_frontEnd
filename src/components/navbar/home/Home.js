import React, {useState} from "react";
import Slider from "../../silder/Slider";
import Interest from "./interested/interest";
import BlogSection from "./blog_section/BlogSection";
import About from "../about_us/About";
import Reachout from "../reach_out/Reachout";
import Jobs from "../jobs/job files/jobComponent/Job";

const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Interest />
            <Jobs />
            <BlogSection />
            <Jobs />
            <Reachout />
        </>
    );
}
export default Home;