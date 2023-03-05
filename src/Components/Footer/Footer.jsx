import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="left-side">
        <a href="/">Home</a>
        <a href="/">Location</a>
        <a href="/">About</a>
        <a href="/">Service</a>
        <a href="/">Contact</a>
      </div>
      <div className="social-buttons">
        <a href="/">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="/">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="/">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <p>Copyright &copy; 2023</p>
    </footer>
    </>
  );
};

export default Footer;
