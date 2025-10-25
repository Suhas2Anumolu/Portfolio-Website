// src/components/Layout.tsx
import Link from 'next/link';
import React, { useEffect } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleSmoothScroll = (e: any) => {
      if (e.target.hash && e.target.pathname === window.location.pathname) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gray-900 bg-opacity-80 backdrop-blur z-50">
        <h1 className="text-xl font-bold text-teal-400">Suhas Anumolu</h1>
        <div className="flex gap-6 text-gray-300">
          {['Home', 'Activities', 'Projects', 'Research', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Activities' ? '/activities' : item === 'Projects' ? '/projects' : `#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-teal-400 transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="pt-32 px-8">{children}</div>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16 py-4 text-center text-gray-500 text-sm">
        © 2025 Suhas Anumolu Portfolio
      </footer>
    </main>
  );
};

export default Layout;
