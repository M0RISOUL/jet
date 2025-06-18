import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

export default function Home() {
  const titles = ["Web Developer", "Game Developer"];
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const colorValues = ["#dc2626", "#2563eb", "#16a34a", "#ca8a04", "#9333ea"];
  const [colorIndex, setColorIndex] = useState(0);
  const [headingColorIndex, setHeadingColorIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[index];
      if (isDeleting) {
        setTypedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
        setColorIndex((prev) => (prev + 1) % colorValues.length);
      }
    }, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, titles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingColorIndex((prev) => (prev + 1) % colorValues.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const starfield = document.getElementById("starfield");
    if (!starfield) return;

    const STAR_COUNT = 150;
    const SHOOTING_COUNT = 20;

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement("div");
      star.className = "twinkle";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      star.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
      starfield.appendChild(star);
    }

    for (let i = 0; i < SHOOTING_COUNT; i++) {
      const sStar = document.createElement("div");
      sStar.className = "shooting-star";
      const startXPercent = Math.random() * 100;
      const startYPercent = Math.random() * 100;
      sStar.style.left = startXPercent + "%";
      sStar.style.top = startYPercent + "%";
      sStar.style.animationDelay = (Math.random() * 10).toFixed(2) + "s";
      starfield.appendChild(sStar);
    }
  }, []);

  return (
    <section id="home" className="relative bg-black min-h-screen overflow-hidden text-white">
      <div id="starfield" className="absolute inset-0 pointer-events-none z-0" />

      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        width="240"
        height="240"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <polyline className="constellation-line" points="20 35 40 33 60 45" fill="none" />
        <circle className="constellation-star" cx="20" cy="35" r="1.8" />
        <circle className="constellation-star" cx="40" cy="33" r="1.8" />
        <circle className="constellation-star" cx="60" cy="45" r="2.2" />
      </svg>

      <main className="relative z-10 flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
        <div className="md:w-1/2 ml-4 md:ml-40">
          <h2 className="text-4xl font-bold mb-2 transition-colors duration-1000" style={{ color: colorValues[colorIndex] }}>
            Hi, I’m Jet Boy Abordaje
          </h2>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
            Aspiring {typedText}<span className="animate-pulse">|</span>
          </h3>
          <p className="text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium animate-pulse">
            I build sleek and responsive web applications.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="/file/Jet Boy-Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              View My Resume
            </a>
            <a href="https://www.linkedin.com/in/jet-boy-abordaje-925460365/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Let’s Connect
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center gap-4">
          <div className="w-60 h-60 rounded-full border-4 border-blue-500 overflow-hidden hover:scale-110 transition-transform duration-300">
            <img src={profileImage} alt="Jet Boy Abordaje" className="w-full h-full object-cover" />
          </div>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
          </div>
        </div>
      </main>

      <section className="bg-gray-300 text-black py-12 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <hr className="border-t-2 border-black w-full mb-10" />
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">What I Do / Services Offered</h2>
              <ul className="space-y-2">
                <li>💻 Web Development</li>
                <li>🎨 UI/UX Design</li>
                <li>🎮 Game Development</li>
                <li>📱 Mobile Development</li>
                <li>🛠️ IT Support</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h2 className="text-2xl font-bold mb-6">More About What I Offer</h2>
              <ul className="space-y-2">
                <li>🔧 Full-Stack App Developer</li>
                <li>🗐️ API Integration and Automation</li>
                <li>📊 Data Visualization Dashboards</li>
              <li>🧠 AI / Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
