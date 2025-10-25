"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "ASL Hand Sign Detector (A–Z)",
    description:
      "A Python-based system that classifies ASL alphabet letters (A–E) in real time using a custom convolutional neural network (CNN). Built with PyTorch and OpenCV, it captures live webcam input and predicts hand gestures instantly.",
    highlights: [
      "Custom CNN trained on ASL alphabet dataset (A–E)",
      "Live webcam integration using OpenCV",
      "Data augmentation with torchvision transforms",
      "Fast inference for real-time performance",
      "End-to-end modular training & detection pipeline",
    ],
    imageUrl: "ASL.png",
    codeUrl: "https://github.com/Suhas2Anumolu/ASL_Detector",
  },
  {
    title: "Real-Time Face Mesh Emotion Recognition",
    description:
      "A real-time facial emotion detection system that combines MediaPipe’s Face Mesh model with OpenCV for live landmark tracking and expression classification from webcam video.",
    highlights: [
      "MediaPipe Face Mesh for 3D landmark tracking",
      "Emotion classification from facial landmarks",
      "Live video overlay of predictions",
      "Optimized for lightweight real-time inference",
      "Expandable for multi-class emotion analysis",
    ],
    imageUrl: "Facemesh.mp4",
    codeUrl: "https://github.com/Suhas2Anumolu/facemesh-emotion-detector.git",
  },
  {
    title: "Battleship Game",
    description:
      "A Java-based recreation of the classic Battleship game featuring modular, object-oriented design and competitive gameplay against an AI opponent.",
    highlights: [
      "Fully object-oriented design in Java",
      "Dynamic ship placement & grid-based logic",
      "Turn-based player vs. computer interaction",
      "Robust input validation & error handling",
      "Expandable architecture for GUI or multiplayer",
    ],
    imageUrl: "BattleShip.png",
    codeUrl: "https://github.com/Suhas2Anumolu/BattleshipGame.git",
  },
];

export default function Projects() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gray-900 bg-opacity-80 backdrop-blur z-50 shadow-md">
        <h1 className="text-xl font-bold text-teal-400">Suhas Anumolu</h1>
        <div className="flex gap-6 text-gray-300">
          {["Home", "Activities", "Projects", "Research", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={
                  item === "Home"
                    ? "/" // goes to home
                    : item === "Activities"
                    ? "/activities"
                    : item === "Projects"
                    ? "/projects"
                    : item === "Research"
                    ? "/research"
                    : "/#contact"
                }
                className="relative group text-sm font-medium"
              >
                <span className="group-hover:text-teal-400 transition">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
            )
          )}
        </div>
      </nav>

      {/* Page Header */}
      <section
        className="relative text-center py-24 bg-cover bg-center overflow-hidden mt-20"
        style={{ backgroundImage: "url('/banner1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-700/80 to-blue-500/80 backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Projects
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A curated collection of my favorite builds in AI, software, and
            engineering.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <h2 className="text-4xl font-bold text-blue-800 mb-16 text-center">
          Featured Work
        </h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Image / Video */}
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-blue-700 p-4">
                  {project.imageUrl.endsWith(".mp4") ? (
                    <video
                      src={project.imageUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-lg w-full h-auto object-contain"
                    />
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="rounded-lg w-full h-auto object-contain"
                    />
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-gray-200">
                  <h3 className="text-3xl font-semibold text-blue-400 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-blue-50 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="list-disc list-inside text-blue-100 space-y-2 mb-8">
                    {project.highlights.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md transition hover:bg-blue-700"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
