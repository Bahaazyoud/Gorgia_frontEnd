import React from "react";
import Slider from "../../silder/Slider";
import PrimaryBlog from "./primary_blog/PrimaryBlog";
import BlogSection from "./primary_blog/blog_section/BlogSection";
const Blog = () => {
    return (
        <>
            <Slider content={{
                title : 'Blog'
            }}/>

            <BlogSection />
            <PrimaryBlog />
        </>
    );
}
export default Blog;