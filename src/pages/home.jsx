import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";
import benJpg from "../images/ben_btk.jpg"

const projects = [
  { title: "Enerji Analiz Sistemi", description: "Türkiye'deki enerji tüketimini analiz eden bir sistem.", link: "/portfolio" },
  { title: "Kişisel Blog", description: "Teknoloji ve yazılım ile ilgili yazılar paylaştığım blog.", link: "/blog" }
];

function Home() {
  return (
    <motion.main 
      className="home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      
      {/* Hero Bölümü */}
      <section className="hero">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Merhaba, Ben Burak Karahan 👋
          </motion.h1>

          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Yazılım geliştiricisiyim. Web teknolojileri, backend ve veri analizi ile ilgileniyorum.
          </motion.p>

          <motion.div 
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Link
              to="/portfolio"
              className="button"
            >
              Projelerime Göz At
            </Link>
            <Link 
              to="/contact" 
              className="outlineButton"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </motion.div>

        {/* Fotoğraf */}
        <motion.img 
          src = {benJpg}
          alt="Burak Karahan"
          className="hero-image"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        />
      </section>

      {/* Projeler Bölümü */}
      <section className="projects">
        <h2 className="sectionTitle">Öne Çıkan Projeler</h2>
        <div className="projectList">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="projectCard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="projectLink">Detaylar</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <p>© 2025 Burak Karahan. Tüm hakları saklıdır.</p>
        <Link to="/about" className="footerLink">Hakkımda</Link>
        <Link to="/contact" className="footerLink">İletişime Geç</Link>
      </motion.footer>
      
    </motion.main>
  );
};

export default Home;
