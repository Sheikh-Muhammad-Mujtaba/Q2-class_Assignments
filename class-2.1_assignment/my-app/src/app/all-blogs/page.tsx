"use client";

import React from "react";
import Image from "next/image";
import "./page.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Blog() {
    return (
        <>
        <header>
        <Navbar />
        </header>
        <section id="blog" className="pink">
        
            <div className="wrapper">
                <h2 className="light">Latest Posts</h2>
                <div className="content-container">
                    <div className="post">
                        <div className="tag">DAW</div>
                        <a href="/blog-pages/blog1">
                            <Image
                                src={"/images/blog1.jpg"}
                                alt=""
                                width={200}
                                height={200}
                            />
                        </a>
                        <a href="/blog-pages/blog1">
                            <h3 className="post-title">
                                How To Use Drum Machine in Logic Pro X
                            </h3>
                        </a>
                    </div>
                    <div className="post">
                        <div className="tag">Mixing</div>
                        <a href="/blog-pages/blog2">
                            <Image
                                src={"/images/blog2.jpg"}
                                alt=""
                                width={200}
                                height={200}
                            />
                        </a>
                        <a href="/blog-pages/blog2">
                            <h3 className="post-title">
                                How To Mix Guitars Effectively
                            </h3>
                        </a>
                    </div>


                    <div className="post">
                        <div className="tag">VOX</div>
                        <a href="/blog-pages/blog3">
                            <Image
                                src={"/images/blog3.jpg"}
                                alt=""
                                width={200}
                                height={200}
                            />
                        </a>
                        <a href="/blog-pages/blog3">
                            <h3 className="post-title">
                                The Real Power of Harmonies in Music Production
                            </h3>
                        </a>
                    </div>




                </div>
                <div className="wrapper2">
                <h2 className="light">Other Posts</h2>
                <div className="content-container">
  
  {/* Additional Posts */}
  <div className="post">
    <div className="tag">Production</div>
    <a href="#">
      <Image
        src={"/images/blog4.png"}
        alt=""
        width={200}
        height={200}
      />
    </a>
    <a href="#">
      <h3 className="post-title">
        Essential Tips for Home Recording
      </h3>
    </a>
  </div>
  <div className="post">
    <div className="tag">Mastering</div>
    <a href="#">
      <Image
        src={"/images/blog5.png"}
        alt=""
        width={500}
        height={500}
      />
    </a>
    <a href="#">
      <h3 className="post-title">
        Understanding the Mastering Process
      </h3>
    </a>
  </div>
  <div className="post">
    <div className="tag">Music Theory</div>
    <a href="#">
      <Image
        src={"/images/blog6.png"}
        alt=""
        width={500}
        height={500}
      />
    </a>
    <a href="#">
      <h3 className="post-title">
        Basics of Music Theory for Producers
      </h3>
    </a>
  </div>
  <div className="post">
    <div className="tag">Sound Design</div>
    <a href="#">
      <Image
        src={"/images/blog7.png"}
        alt=""
        width={500}
        height={500}
      />
    </a>
    <a href="#">
      <h3 className="post-title">
        Creative Sound Design Techniques
      </h3>
    </a>
  </div>
  <div className="post">
    <div className="tag">Mixing</div>
    <a href="#">
      <Image
        src={"/images/blog8.png"}
        alt=""
        width={500}
        height={500}
      />
    </a>
    <a href="#">
      <h3 className="post-title">
        Mixing Vocals Like a Pro
      </h3>
    </a>
  </div>
  <div className="post">
    <div className="tag">Live Sound</div>
    <a href="#">
      <Image
        src={"/images/blog9.png"}
        alt=""
        width={500}
        height={500}
      />
    </a>
    <a href="#">
      <h3 className="post-title">
        Tips for Live Sound Mixing
      </h3>
    </a>
  </div>
 
</div>


            </div>
            </div>
            
        </section>
       
      <Footer />
      
        </>
    );
}
