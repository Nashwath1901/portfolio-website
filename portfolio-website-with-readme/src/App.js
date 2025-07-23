import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="text-center">
      <header className="relative h-screen bg-black">
        <img src="/banner.jpg" alt="Navroj" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Navroj Ashwath Nagaraj</h1>
          <h2 className="text-2xl mb-6">Machine Learning Engineer | Web Developer</h2>
          <a href="/resume.pdf" download className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Download Resume
          </a>
        </div>
      </header>

      <main className="p-8">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">Results-driven Machine Learning Engineer with experience in ML, game development, web technologies, and RPA.</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded hover:scale-105 transform transition">
              <h3 className="text-xl font-bold">Facemask Detection</h3>
              <p>Deep learning project using CNN for real-time facemask detection.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded hover:scale-105 transform transition">
              <h3 className="text-xl font-bold">Healthcare No-Show Predictor</h3>
              <p>Streamlit-based ML app predicting patient attendance using XGBoost and Random Forest.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p>ML Engineer Intern, Game Developer Intern, Web Developer Intern, RPA Intern.</p>
        </motion.section>
      </main>

      <footer className="p-4 bg-black text-white">
        <p>&copy; 2025 Navroj Ashwath Nagaraj</p>
      </footer>
    </div>
  );
}

export default App;