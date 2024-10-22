
import React from 'react';
import './page.css'; 
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
  return (
    <>
  <header>
  <Navbar />
  </header>
<section>     
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
        
        </div>
        
        </section>
              <Footer />
    </>
  );
};


