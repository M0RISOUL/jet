import React from "react";
import { motion } from "framer-motion";
import { FaFigma, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "/images/auto.jpg",
      title: "AUTOMOTIVE PARTS: E-Commerce Online Stores",
      subtitle: "Desktop Applications",
      description:
        "The application combines a code-based development platform with an embedded database solution to handle user input, manage transactions, and store essential records.",
      techStack: ["POS", "VB.NET", "MS ACCESS", "GUI"],
      github: "https://github.com/M0RISOUL/AUTOMOTIVE-PARTS",
    },
    {
      id: 2,
      image: "/images/clothing.jpg",
      title: "Online Selling Clothing Accessories E-Commerce System",
      subtitle: "Desktop Applications",
      description:
        "An e-commerce platform designed for selling clothing accessories online, offering user-friendly features for purchasing, and secure transactions",
      techStack: ["POS", "VB.NET", "MS ACCESS"],
    },
    {
      id: 3,
      image: "/images/policy.jpg",
      title: "Course Policy Violation Portfolio System",
      subtitle: "Web Development",
      description:
        "An online system that helps faculty and administrators monitor, record, and manage course policy violations to promote accountability and transparency among students",
      techStack: ["HTML", "CSS", "PHP", "MYSQL"],
      github: "https://github.com/M0RISOUL/Course-Policy-Violation",
    },
    {
      id: 4,
      image: "/images/computer.jpg",
      title: "Online Computer Parts Store",
      subtitle: "Desktop Application",
      description:
        "The system was developed using VB.NET for its front-end and back-end logic, and MS Access as the database for storing, managing, and retrieving records.",
      techStack: ["POS", "VB.NET", "MS ACCESS"],
      github: "https://github.com/M0RISOUL/Online-Computer-Parts-Store",
    },
    {
      id: 5,
      image: "/images/brgy.jpg",
      title: "Barangay App",
      subtitle: "Prototype",
      description:
        "The Barangay App is a digital solution designed to improve communication, transparency, and administrative efficiency between barangay residents and local officials.",
      techStack: ["Figma"],
      figma:
        "https://www.figma.com/proto/Wn4efpJHAp1MCIO9Bt6I66/prototype---Barangay-App?node-id=1-3189&p=f&t=zE69C3xCZblfDAVv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      id: 6,
      image: "/images/tuckman.jpg",
      title:
        "Tuckman’s Model Common Themes Extraction using NLP Text Classification",
      subtitle: "Natural Language Processing & Machine Learning",
      description:
        "The study shows that student leaders improved their communication, flexibility, empathy, and problem-solving skills while leading team projects, based on reflections analyzed using Tuckman’s Group Development model.",
      techStack: ["NLP", "Python", "Leadership", "Text Extraction"],
      github:
        "https://github.com/M0RISOUL/Tuckman-s-Model-Common-Themes-Extraction-using-NLP-Text-Classification",
    },
    {
      id: 7,
      image: "/images/dental.jpg",
      title: "Dental Clinic Appointment System",
      subtitle: "Web Development",
      description:
        "The system was developed using web technologies as a streamlined platform to improve scheduling, digital record handling, and clinic workflows enhancing overall efficiency and patient experience.",
      techStack: [
        "Laravel",
        "Tailwind",
        "Dashboard",
        "Charts",
        "Sentiment Analysis",
        "NLP",
      ],
      github: "https://github.com/M0RISOUL/Dental-Clinic-Appointment",
    },
    {
      id: 8,
      image: "/images/jb.jpg",
      title: "My Portfolio",
      subtitle: "Web Development",
      description:
        "A dynamic portfolio site that presents my work and services with smooth transitions and interactive UI.",
      techStack: ["React", "Tailwind", "Framer Motion"],
      github: "",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-[#343434] text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects Completed</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 bg-[#DC143C] text-white">
                {project.subtitle}
              </span>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gray-700 px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4 text-2xl">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition"
                  >
                    <FaFigma />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
