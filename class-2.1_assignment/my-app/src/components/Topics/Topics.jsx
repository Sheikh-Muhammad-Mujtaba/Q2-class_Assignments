"use client"

import React, { useState } from "react";
import "./Topics.css";
import Image from "next/image";


export default function Topics() {
  const [currentImage, setCurrentImage] = useState("/images/frequencies.png");

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage("/images/frequencies.png")}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage("/images/daw.png")}>Using the DAW</li>
            <li onMouseEnter={() => setCurrentImage("/images/vocals-processing.png")}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage("/images/mixing.png")}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage("/images/mixing-console.png")}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage("/images/mastering.png")}>Mastering</li>
          </ul>

          <div className="topic-image">
            <Image src={currentImage} alt="" width={200} height={200} />
          </div>
        </div>
        <Image src={"/images/bg-element-1.svg"} alt="" className="bg-element-1" width={100} height={100} />
      </div>
    </section>
  );
};


