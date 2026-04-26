"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Journey() {
  const itemFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const lineVariants = {
    hidden: { height: "0%" },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  return (
    <section id="timeline" className="section-container">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '4rem', textAlign: 'center' }}>My Journey</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ position: 'relative' }}
        >
          <motion.div 
            className="timeline-line"
            variants={lineVariants}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            <div className="timeline-grid">
              <motion.div variants={itemFadeIn} className="glass-card timeline-card-left" style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>2024 - Present</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.5rem 0' }}>Bachelors in Electronics, Communication and Information Engineering</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>Tribhuvan University, Institute of Engineering, Sagarmatha Engineering College</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Currently pursuing my degree in Engineering, developing strong foundational knowledge in technical problem solving and software development.</p>
              </motion.div>
              
              <div className="timeline-center">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }} style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--primary)', zIndex: 2, boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }}>
                  <Briefcase size={24} color="var(--primary)" />
                </motion.div>
              </div>
              
              <div className="timeline-empty"></div>
            </div>

            <div className="timeline-grid">
              <div className="timeline-empty"></div>
              
              <div className="timeline-center">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }} style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--accent)', zIndex: 2, boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)' }}>
                  <GraduationCap size={24} color="var(--accent)" />
                </motion.div>
              </div>

              <motion.div variants={itemFadeIn} className="glass-card timeline-card-right" style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>2022 - 2024</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.5rem 0' }}>High School - Science Stream</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>Sagarmatha Engineering College</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Completed two years of intensive high school education with a focus on the Science stream, building a robust analytical mindset.</p>
              </motion.div>
            </div>

            <div className="timeline-grid">
              <motion.div variants={itemFadeIn} className="glass-card timeline-card-left" style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Before 2022</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.5rem 0' }}>Early Education</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>Sagarmatha Engineering College</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Built the fundamental academic stepping stones and discovered early interests in technology and logic.</p>
              </motion.div>
              
              <div className="timeline-center">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }} style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--text-muted)', zIndex: 2 }}>
                  <GraduationCap size={24} color="var(--text-muted)" />
                </motion.div>
              </div>
              
              <div className="timeline-empty"></div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
