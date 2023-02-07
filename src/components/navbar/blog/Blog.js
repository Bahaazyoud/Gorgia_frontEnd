import React from "react";
import Slider from "../../silder/Slider";
import PrimaryBlog from "./primary_blog/PrimaryBlog";
import BlogSection from "./primary_blog/blog_section/BlogSection";
import Footer from "../../footerComponent/Footer";
const Blog = () => {
    return (
        <>
            <Slider content={{
                title : 'Blog'
            }}/>

            <BlogSection />
            <PrimaryBlog />
            <Footer />

        </>
    );
}
export default Blog;