"use client";

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), { ssr: false });
const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false });
const Hero = dynamic(() => import('../components/Hero'), { ssr: true });
const Journey = dynamic(() => import('../components/Journey'), { ssr: true });
const Skills = dynamic(() => import('../components/Skills'), { ssr: true });
const Projects = dynamic(() => import('../components/Projects'), { ssr: true });
const Contact = dynamic(() => import('../components/Contact'), { ssr: true });

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px', position: 'relative' }}>
      <ThemeToggle />
      <ParticleBackground />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
        <footer style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <p>© {new Date().getFullYear()} Surakshya Chaulagain</p>
        </footer>
      </div>
    </main>
  );
}
