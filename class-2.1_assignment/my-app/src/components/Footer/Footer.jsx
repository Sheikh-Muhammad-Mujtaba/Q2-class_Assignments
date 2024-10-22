import React from "react";
import "./Footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <Image src={"/images/facebook-logo.svg"} alt="image" width={100} height={100} layout="responsive" />
              </a>

              <a href="#">
                <Image src={"/images/twitter-logo.svg"} alt="image" width={100} height={100} layout="responsive" />
              </a>

              <a href="#">
                <Image src={"/images/instagram-logo.svg"} alt="" width={100}
  height={100}
  layout="responsive" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by GTCoding Ⓒ 2023
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/all-blogs">Blog</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:contact@email.com">contact@email.com</a>
              </li>

              <li>
                <a href="tel:+19999999999">+1 999 9999 999</a>
              </li>
            </ul>
          </div>

          <div className="copyright mobile">
            This website is designed by GTCoding Ⓒ 2023
          </div>
        </div>
      </div>
    </footer>
  );
};


