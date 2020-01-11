import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTumblrSquare,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

function getCurrentDate(separator = " ") {
  let newDate = new Date();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${months[month]}${separator}${year}`;
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="copyright">
          Reproduced with love, {getCurrentDate()} &copy;
        </div>
        <div className="social-links">
          <FaFacebookSquare />
          <FaLinkedin />
          <FaTumblrSquare />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
}
