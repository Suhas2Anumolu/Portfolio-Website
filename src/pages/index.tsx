import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Shield, BookOpen } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Fully type-safe smooth scroll handler
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      if (target.hash && target.pathname === window.location.pathname) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 70,
            behavior: 'smooth',
          });
        }
      }
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleSmoothScroll));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gray-900 bg-opacity-80 backdrop-blur z-50 shadow-md">
        <h1 className="text-xl font-bold text-teal-400 tracking-wide">Suhas Anumolu</h1>
        <div className="flex gap-6 text-gray-300">
          {['Home', 'Activities', 'Projects', 'Research', 'Contact'].map(item => (
            <Link
              key={item}
              href={
                item === 'Activities' ? '/activities' :
                item === 'Projects' ? '/projects' :
                `#${item.toLowerCase()}`
              }
              className="relative group text-sm font-medium"
            >
              <span className="group-hover:text-teal-400 transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row justify-center items-center gap-12 pt-40 pb-24 px-8 md:px-16">
        <motion.img
          src="Suhas1.png"
          alt="Profile"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-64 h-64 md:w-80 md:h-80 border-4 border-teal-500 shadow-xl object-cover rounded-full hover:scale-105 transition-transform"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-teal-400">Suhas Anumolu</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            I'm a student researcher passionate about <span className="text-white font-medium">artificial intelligence</span>,
            <span className="text-white font-medium"> cybersecurity</span>, and building technology that creates real-world impact.
            Intending to major in <span className="text-white font-medium">Computer Science with a focus on AI</span>,
            I love transforming ideas into intelligent systems that make our world smarter, safer, and more sustainable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              className="bg-teal-500 px-5 py-2.5 rounded text-black font-semibold hover:bg-teal-400 transition shadow"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-teal-500 px-5 py-2.5 rounded text-teal-400 hover:bg-teal-900 transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* Achievements Strip */}
      <section className="bg-gray-900 py-4 text-center border-t border-b border-gray-800">
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 px-4">
          <div className="flex items-center gap-2"><Award size={16} className="text-teal-400" /> FPS Intern at JHU APL</div>
          <div className="hidden sm:block text-gray-600">|</div>
          <div className="flex items-center gap-2"><Cpu size={16} className="text-teal-400" /> SAILea Board Member</div>
          <div className="hidden sm:block text-gray-600">|</div>
          <div className="flex items-center gap-2"><Shield size={16} className="text-teal-400" /> Cybersecurity Researcher</div>
          <div className="hidden sm:block text-gray-600">|</div>
          <div className="flex items-center gap-2"><BookOpen size={16} className="text-teal-400" /> AI/ML Intern @UMBC</div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 md:px-16 py-20 bg-gray-950">
        {[
          { title: 'Activities', img: 'robotics.jpg', link: '/activities', desc: 'Explore my leadership and club involvement.' },
          { title: 'Projects', img: '/image1.png', link: '/projects', desc: 'Discover my coding and AI-based creations.' },
          { title: 'Research', img: 'infosys_logo.png', link: '#research', desc: 'Learn more about my academic and applied research.' }
        ].map(({ title, img, link, desc }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Link
              href={link}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg block group hover:bg-gray-750 transition"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover rounded-xl mb-4 group-hover:opacity-90 transition"
              />
              <h3 className="text-xl font-semibold mb-2 text-teal-400">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-16 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-400">Get in Touch</h2>
        <form
          action="https://formspree.io/f/mzzjojlw"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-3 rounded bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 w-full py-3 rounded font-semibold text-black hover:bg-teal-400 transition shadow"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Suhas Anumolu Portfolio. All Rights Reserved.
      </footer>
    </main>
  );
}
