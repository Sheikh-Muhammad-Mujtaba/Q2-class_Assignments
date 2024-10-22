"use client"

import React from "react";
import "./Testimonials.css";
import Image from "next/image";

export default function Testimonials() {


  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          
            <div className="testimonial">
              <Image
                src={"/images/testimonial1.png"}
                alt={""}
                width={200} 
                height={200} 
                objectFit="cover"
              />
              <div className="reviewer-details">
                <div className="name">Peter Adams</div>
                <div className="company-name">Google</div>
                <div className="review">This is great course. I got to learn a lot.</div>
              </div>
            </div>
         
            <div className="testimonial">
              <Image
                src={"/images/testimonial2.png"}
                alt={""}
                width={200} 
                height={200} 
                objectFit="cover"
              />
              <div className="reviewer-details">
                <div className="name">Robert Fox</div>
                <div className="company-name">Instagram</div>
                <div className="review">
                    I got to learn a lot about Music Production with this course. Thanks :)
                </div>
              </div>
            </div>
            <div className="testimonial">
              <Image
                src={"/images/testimonial3.png"}
                alt={""}
                width={200} 
                height={200} 
                objectFit="cover"
              />
              <div className="reviewer-details">
                <div className="name">Emily Smith</div>
                <div className="company-name">Apple</div>
                <div className="review">Awesome! Great job!!</div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};


