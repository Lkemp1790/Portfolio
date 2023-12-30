import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Liam Kemp
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="Facebook icon" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="Instagram icon" />
          </a>
          <a href="#">
            <img src="/twitter.png" alt="Twitter icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
