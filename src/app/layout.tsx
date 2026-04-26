import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surakshya | Software Engineer",
  description: "Portfolio of Surakshya Chaulagain, an aspiring Electronics, Communication and Information Engineer. Showcasing software development projects, technical skills, and educational journey.",
  keywords: ["Surakshya Chaulagain", "Software Engineer", "Electronics and Communication", "Portfolio", "Next.js", "React", "Frontend Developer", "Web Development"],
  authors: [{ name: "Surakshya Chaulagain" }],
  creator: "Surakshya Chaulagain",
  openGraph: {
    title: "Surakshya | Engineering Portfolio",
    description: "Explore the projects, skills, and journey of Surakshya Chaulagain.",
    url: "https://surakshyachaulagain.com.np",
    siteName: "Surakshya's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surakshya | Engineering Portfolio",
    description: "Explore the projects, skills, and journey of Surakshya Chaulagain.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ padding: '1.5rem 2rem', position: 'fixed', width: '100%', top: 0, zIndex: 50, backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ fontWeight: 700, fontSize: '1.25rem', textDecoration: 'none' }}>SD.</a>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
              <a href="#about" style={{ opacity: 0.7 }}>About</a>
              <a href="#timeline" style={{ opacity: 0.7 }}>Timeline</a>
              <a href="#projects" style={{ opacity: 0.7 }}>Projects</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
