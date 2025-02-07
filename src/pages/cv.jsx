import React from "react";
import { motion } from "framer-motion";
import "./cv.css"; // CSS dosyanı dahil etmeyi unutma

function CV() {
  return (
    <div className="cv">
      <motion.div 
        className="cv-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="cv-title">CV</h1>
        <p className="cv-intro">
          Merhaba! Benim CV'mi incelemek için aşağıdaki bilgileri kullanabilirsiniz. 
          Hedefim, yazılım geliştirme ve web teknolojilerinde kendimi sürekli geliştirmek.
        </p>

        <div className="cv-details">
          <section>
            <h2>Eğitim</h2>
            <p><strong>Fırat Üniversitesi</strong> - Yazılım Mühendisliği (2022 - 2026/Devam Ediyor.)</p>
          </section>

          <section>
            {/*<h2>Deneyim</h2>
            <p><strong>Yazılım Geliştirici Stajyer</strong> - ABC Teknoloji (2022)</p>
            <p><strong>Web Geliştirici</strong> - XYZ Firması (2023 - Devam Ediyor)</p>*/}
          </section>

          <section>
            <h2>Yetenekler</h2>
            <ul>
              <li>Java Spring Boot</li>
              <li>React & Next.js</li>
              <li>UI/UX Tasarımı</li>
              <li>Veritabanı Yönetimi</li>
            </ul>
          </section>

          <section>
            <h2>İletişim Bilgileri</h2>
            <p>📧 brkkarahan288@gmail.com</p>
            {/*<p>📞 +90 552 250 0028</p>*/}
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default CV;

  