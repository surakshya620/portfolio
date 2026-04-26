"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, ExternalLink } from "lucide-react";

export default function Hero() {
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{ maxWidth: '800px' }}
      >
        <motion.div variants={fadeIn} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', borderRadius: '999px', marginBottom: '1.5rem', fontWeight: 500 }}>
          <Sparkles size={16} /> Aspiring Software Engineer
        </motion.div>
        
        <motion.h1 variants={fadeIn} style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Hi, I'm Surakshya Chaulagain.<br />
          I build <span className="heading-gradient">elegant solutions</span> to complex problems.
        </motion.h1>
        
        <motion.p variants={fadeIn} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
          Passionate about software development, modern UI/UX, and writing clean, efficient code.
        </motion.p>
        
        <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-primary" onClick={scrollToProjects}>
            View My Work <ArrowRight size={18} />
          </button>
          <button className="btn-outline" onClick={scrollToContact}>
            <Mail size={18} /> Contact Me
          </button>
        </motion.div>

        <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          <a href="https://github.com/surakshya620" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            GitHub <ExternalLink size={16} />
          </a>
          <a href="https://www.linkedin.com/in/surakshya-chaulagain" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            LinkedIn <ExternalLink size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
