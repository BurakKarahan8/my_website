import React from "react";
import { motion } from "framer-motion";
import "./contact.css"; // CSS dosyanı dahil etmeyi unutma

function Contact() {
  return (
    <div className="contact">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="contact-title">İletişim</h1>
        <p className="contact-text">
          Bana ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz. 
          Hızlıca geri dönmek için her zaman hazır olacağım!
        </p>
        
        <div className="contact-details">
          <p>📧 &nbsp; E-posta: &nbsp; brkkarahan288@gmail.com</p>
          {/*<p>📞 &nbsp; Telefon: &nbsp; +90 552 250 0028 </p>*/}
          <p>
            💼 &nbsp; LinkedIn: &nbsp; <a href="https://www.linkedin.com/in/burak-karahan-54a86b250/" target="_blank" className="special-link">Burak Karahan / LinkedIn</a>
          </p>
          <p>
            💻 &nbsp; GitHub: &nbsp; <a href="https://github.com/BurakKarahan8" target="_blank" className="special-link">Burak Karahan / Github</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
