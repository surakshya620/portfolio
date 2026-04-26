"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>Featured Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          <motion.div variants={fadeIn} className="glass-card" style={{ padding: '0', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}>
            <div style={{ position: 'relative', height: '200px', width: '100%', background: 'var(--primary-light)' }}>
              <Image 
                src="/images/ecommerce.png" 
                alt="E-Commerce Analytics Dashboard" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>E-Commerce Analytics Dashboard</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>A full-stack dashboard built with Next.js, TypeScript, and Prisma. Features real-time data visualization and sales tracking.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="skill-badge skill-primary">Next.js</span>
                <span className="skill-badge skill-primary">TypeScript</span>
                <span className="skill-badge skill-primary">Prisma</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="glass-card" style={{ padding: '0', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)' }}>
            <div style={{ position: 'relative', height: '200px', width: '100%', background: 'var(--accent)' }}>
              <Image 
                src="/images/taskapi.png" 
                alt="Task Management API" 
                fill 
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Task Management API</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>A robust REST API built using Express and MongoDB. Includes JWT authentication, role-based access control, and automated testing.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="skill-badge skill-accent">Node.js</span>
                <span className="skill-badge skill-accent">Express</span>
                <span className="skill-badge skill-accent">MongoDB</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
