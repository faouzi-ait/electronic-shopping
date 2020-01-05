import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTumblrSquare,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="copyright">Reproduced with love, January 2020 &copy;</div>
      <div className="social-links">
        <FaFacebookSquare />
        <FaLinkedin />
        <FaTumblrSquare />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
}
