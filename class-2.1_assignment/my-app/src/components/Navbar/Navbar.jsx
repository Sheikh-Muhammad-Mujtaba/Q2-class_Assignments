"use client"

import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>

        <ul>
          <li>
            <a href="./#topics">Course Details</a>
          </li>

          <li>
            <a href="./#info">About</a>
          </li>

          <li>
            <a href="/all-blogs">Blog</a>
          </li>

          <li>
            <a href="./#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="./contact">Contact Us</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menu-icon">
          <Image src={"/images/menu-icon.svg"} alt="" width={100} height={100} />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className="close-icon">
        <Image src={"/images/close-icon.svg"} alt="" width={100} height={100} />
        </div>

        <ul className="menu-items">
          <li>
            <a href="./#topics" onClick={() => setIsActive(false)}>
              Course Details
            </a>
          </li>

          <li>
            <a href="./#info" onClick={() => setIsActive(false)}>
              About
            </a>
          </li>

          <li>
            <a href="./all-blogs" onClick={() => setIsActive(false)}>
              Blog
            </a>
          </li>

          <li>
            <a href="./#testimonials" onClick={() => setIsActive(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="./contact" onClick={() => setIsActive(false)}>
            Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};


