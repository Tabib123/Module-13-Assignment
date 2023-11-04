import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;