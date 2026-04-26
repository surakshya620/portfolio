"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>Get In Touch</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>

          <motion.div variants={fadeIn} className="glass-card">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Let's talk about everything!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}>
                  <Mail color="var(--primary)" size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</h4>
                  <a href="mailto:chaulagainsurakshya65@gmail.com" style={{ fontWeight: 500 }}>chaulagainsurakshya65@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px' }}>
                  <MapPin color="var(--accent)" size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Location</h4>
                  <span style={{ fontWeight: 500 }}>Available for Remote Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="glass-card">
            <form action="https://formsubmit.co/chaulagainsurakshya65@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="_subject" value="New submission from your portfolio!" />
              <input type="hidden" name="_template" value="table" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Your Name</label>
                <input type="text" id="name" name="name" required className="form-input" placeholder="Surakshya Chaulagain" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Your Email</label>
                <input type="email" id="email" name="email" required className="form-input" placeholder="chaulagainsurakshya65@gmail.com" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontWeight: 500, fontSize: '0.9rem' }}>Message</label>
                <textarea id="message" name="message" required rows={4} className="form-input" placeholder="How can I help you?"></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
