"use client";

import { motion } from "framer-motion";
import { Code2, Brain } from "lucide-react";

export default function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const hardSkills = [
    { name: "C++", url: "https://isocpp.org/" },
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "DSA", url: "https://en.wikipedia.org/wiki/Data_structure" },
    { name: "React", url: "https://react.dev/" },
    { name: "Next.js", url: "https://nextjs.org/" }
  ];
  const softSkills = ["Problem Solving", "Communication", "Critical Thinking", "Teamwork", "Adaptability"];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>My Skills</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <motion.div variants={fadeIn} className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}>
                <Code2 color="var(--primary)" size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Technical Skills</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {hardSkills.map((skill, index) => (
                <motion.a 
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index} 
                  variants={fadeIn}
                  whileHover={{ scale: 1.1, rotate: [-2, 2, 0], backgroundColor: 'var(--primary)', color: 'white' }}
                  whileTap={{ scale: 0.95 }}
                  className="skill-badge skill-primary"
                  style={{ fontSize: '1rem', padding: '0.5rem 1rem', textDecoration: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                >
                  {skill.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px' }}>
                <Brain color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Soft Skills</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {softSkills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  variants={fadeIn}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                  className="skill-badge skill-accent"
                  style={{ fontSize: '1rem', padding: '0.5rem 1rem', cursor: 'default', transition: 'background-color 0.3s, color 0.3s' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
