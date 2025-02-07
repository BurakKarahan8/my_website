import React from "react";
import { motion } from "framer-motion";
import "./blog.css";
import reactJpg from "../images/react.jpg"



function Blog(){
  const blogPosts = [
    {
      title: "React ile Modern Web Geliştirme",
      description: "React'in temel özellikleri ve modern web geliştirme teknikleri hakkında bilgiler.",
      date: "5 Şubat 2025",
      image: reactJpg,
      link: ""
    },
  ];

  return (
    <motion.div 
      className="blog"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="blog-container">
        <div className="blog-hero">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-description">
            İşte blog yazılarım.
          </p>
        </div>
          <div className="blog-list">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={index} 
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.25 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
              >
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <h2>{post.title}</h2>
                  <p className="blog-date">{post.date}</p>
                  <p>{post.description}</p>
                  <a href={post.link} className="blog-btn">Devamını Oku</a>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
      
    </motion.div>
  );
};

export default Blog;

  