import React from "react";
import "./Info.css";
import Image from "next/image";

export default function Info() {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <Image src={"/images/student-icon.svg"} alt="image" width={100} height={100}/>
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
          <Image src={"/images/video-icon.svg"} alt="image" width={100} height={100}/>
          <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>

        <Image src={"/images/bg-element-2.svg"} alt="image" width={100} height={100} className="bg-element-2"/>
        </div>
    </section>
  );
};


