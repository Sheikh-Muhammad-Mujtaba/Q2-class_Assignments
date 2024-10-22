"use client";

import React from "react";
import Image from "next/image"; 
import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <a  href="/blog-pages/blog1">
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

        <div className="btn-container">
          <a href="./all-blogs" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
