import React from 'react';
import { motion } from 'framer-motion';
import "./portfolio.css";
import yenilenebilirJpg from "../images/yenilenebilir_enerji.jpg"
import myWebsiteJpg from "../images/my_website.jpg"

function Portfolio() {
  const projects = [
    {
      title: "Türkiye Yenilenebilir Enerji Analizi Sistemi",
      description: "Türkiye'nin yenilenebilir enerji üretim verilerini analiz eden modern web uygulaması.",
      image: yenilenebilirJpg,
      link: "https://github.com/BurakKarahan8/Turkey-renewable-energy-analysis",
      target: "_blank"
    },
    {
      title: "Kişisel Web Sitesi",
      description: "Kendi CV ve projelerimi içeren profesyonel bir React tabanlı web sitesi.",
      image: myWebsiteJpg,
      link: ""
    }
  ];

  return (
    <motion.div 
      className="portfolio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="portfolio-container">
        <div className="portfolio-hero">
          <h1 className="portfolio-title">Portfolyo</h1>
          <p className="portfolio-description">
            İşte üzerinde çalıştığım bazı projeler. Daha fazlası için iletişime geçebilirsin!
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="portfolio-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.25 }}
            >
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-content">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-description">{project.description}</p>
                <a href={project.link} className="portfolio-btn" target={project.target}>Detayları Gör</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
  