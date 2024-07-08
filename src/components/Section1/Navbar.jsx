/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import { motion } from "framer-motion";
import videoplayback from "../videos/videoplayback.mp4";

const Navbar = () => {
  const menuClick = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="menu">
            <h3 className="logo">
              <motion.img
                className="dark-logo"
                alt="Cyber Space Technologies"
                width="180"
                height="108"
                src="https://cyspacetech.com/wp-content/uploads/2023/03/cst-logo-2-180x108.png"
                initial={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  top: "10px",
                  left: "10px",
                  transform: "translate(0, 0)",
                }}
                transition={{ duration: 2 }}
                style={{ position: "absolute" }}
              />
            </h3>
            <div className="hamburger-menu" onClick={menuClick}>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="main" style={{height:'fit-content'}}>
            <header>
              <div className="overlay">
                <div className="inner" style={{opacity:1, zIndex:1, marginTop:'25rem'}}>
                  <h2 className="title">CyberSpace Technologies</h2>
                  <p>
                    We at CST absolutely understand the criticality of data
                    protection and the importance of building secure
                    applications without compromising the functionality and
                    business goals.
                  </p>
                  <button className="btn" style={{border:'3px thin black',borderRadius:'50px',color:'#fff'}}>Read more</button>
                </div>
              </div>
            <video
              className="container"
              controls={false}
              autoPlay
              loop
              muted
              style={{ objectFit: "cover" }}
            >
              <source
                src={videoplayback}
                type="video/mp4"
                style={{ cursor: "none", pointerEvents: "none" }}
              />
            </video>
            </header>
          </div>

          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#" style={{ "--i": "0.05s" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#section2" style={{ "--i": "0.1s" }}>
                Services
              </a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.15s" }}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.2s" }}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.25s" }}>
                About
              </a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.3s" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
