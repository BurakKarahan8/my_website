import React from "react";
import { motion } from "framer-motion";
import "./about.css"; // CSS dosyanı dahil etmeyi unutma

function About(){
  return (
    <div className="about">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="about-title">Hakkımda</h1>
        <p className="about-text">
          Merhaba! Ben Burak Karahan, yazılım geliştirme ve web tasarımı ile ilgileniyorum. 
          Özellikle backend teknolojileri, ve kullanıcı deneyimi tasarımı konusunda 
          kendimi geliştiriyorum. Projelerimde modern teknolojiler kullanarak 
          estetik ve işlevsel çözümler üretmeyi hedefliyorum.
        </p>
        <div className="about-details">
          <p>&nbsp;📍 &nbsp;&nbsp;&nbsp; Lokasyon: &nbsp; Elazığ</p>
          <p>🎓 &nbsp; Eğitim: &nbsp; Fırat Üniversitesi / Yazılım Mühendisliği</p>
          <p>💻 &nbsp; İlgi Alanları: &nbsp; Java Spring Boot*, &nbsp; React, &nbsp; Next.js, &nbsp; UI/UX</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
