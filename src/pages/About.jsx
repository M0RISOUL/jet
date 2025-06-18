import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from "../assets/profile.jpg";
import date from "../assets/date.jpg";
import grad from "../assets/grad.jpg";
import toga from "../assets/toga.jpg";
import defended from "../assets/defended.jpg";
import grp from "../assets/grp.jpg";

const MotionLi = motion.li;

function About() {

    const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
  };

  // --- Images for the carousel ---
  const carouselImages = [profile, toga, grad, defended, grp, date];

  return (
    <section id="about" className="py-16 bg-slate-300">
      <div className="container mx-auto px-4">
        {/* ---------- TOP SPLIT: intro (left) + slider (right) ---------- */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* LEFT: Text content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">About&nbsp;Me</h2>
            <p className="text-lg mb-4 text-black">
            Hello! I'm <span className="font-semibold">Jet Boy</span>, a passionate{" "}
            <span className="text-green-600 font-medium">Web Developer</span>,{" "}
            <span className="text-red-600 font-medium">Game Developer</span>, and{" "}
            <span className="text-blue-600 font-medium">UI Designer</span>{" "}
            dedicated to crafting engaging digital experiences.
            </p>

            <p className="text-black mb-4">
            I am seeking a position as an Aspiring Web Developer, Game Developer, or UI Designer 
            where I can apply my strong foundation in front-end and back-end technologies. 
            I am passionate about building responsive web applications and immersive game experiences, 
            and I aim to contribute creative UI designs and technical expertise to innovative projects 
            while continuously learning and growing in a collaborative environment.
            </p>

            <p className="text-black mb-4">
                I am a motivated and flexible person who can handle challenges without giving up. 
                I always come on time and stay focused on what needs to be done. 
                I pay close attention to details and take my work seriously. I enjoy working with 
                others and believe that teamwork leads to better results. I am open to learning new 
                things and improving my skills. I stay calm when facing problems and try to find good 
                solutions. I follow instructions carefully and ask questions when something is not clear. 
                I can work alone or with a team, with or without supervision.I am honest, responsible, and organized. 
                I listen to others and respect their opinions. I accept feedback and use it to grow. I adjust 
                quickly to changes and try to stay positive, even in hard situations. I believe that with good 
                communication, respect, and hard work, we can reach our goals together.
                
            </p>

            <p className="text-black">
              I am a graduate of Bachelor of Science in Information Technology from Jose Rizal University with a 
              strong passion for building digital experiences. I am an aspiring Web development, game development, 
              and user interface design combining technical knowledge with creative thinking to craft responsive, 
              functional, and visually engaging solutions. I am committed to continuous learning and enjoy solving 
              complex problems through code and design. My goal is to contribute to innovative projects that 
              prioritize usability, performance, and user satisfaction.
            </p>
          </div>

          {/* RIGHT: Image slider */}
          <div className="w-full md:w-[380px] lg:w-[420px] shrink-0 mt-35">
            <Slider {...sliderSettings}>
              {carouselImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="px-1"
                >
                  <img
                    src={src}
                    alt={`Profile slide ${i + 1}`}
                    className="rounded-xl object-cover w-full h-[320px] shadow-lg"
                  />
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>

                {/* Profile Image */}
                {/* <motion.div
                  className="md:w-1/3 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src="/mnt/data/8ba1cfa3-a901-4ac8-8b08-a8b6cdecf929.png"
                    alt="Profile"
                    className="rounded-xl w-full max-w-xs object-cover shadow-lg"
                  />
                </motion.div> */}

                  {/* Projects / Tools / IDEs Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {[
                        { value: "6+", label: "Programming Languages" },
                        { value: "5+", label: "Projects Completed" },
                        { value: "10+", label: "Development Tools" },
                        { value: "4+", label: "IDEs Used" },
                    ].map((item, idx) => (
                        <motion.div
                        key={idx}
                        whileHover={{
                            scale: 1.05,
                            y: -8,
                            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-gray-100 border border-gray-300 rounded-xl shadow-xl p-6 text-center transform transition-all duration-300"
                        >
                        <h4 className="text-2xl font-extrabold text-gray-800 mb-2">{item.value}</h4>
                        <p className="text-gray-700">{item.label}</p>
                        </motion.div>
                    ))}
                    </div>
        
                {/* Education */}
                <div className="mt-20 border-t pt-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-12 text-left">🎓 Education</h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                        <MotionLi
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                        }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="bg-gray-100 p-6 rounded-xl border border-gray-300 shadow-lg"
                        >
                        <p className="font-bold text-lg text-gray-900 mb-1">JOSE RIZAL UNIVERSITY</p>
                        <p className="mb-1">Bachelor of Science in Information Technology</p>
                        <p className="text-sm text-gray-600">Aug 2021 – 2025</p>
                        </MotionLi>

                        <MotionLi
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                        }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="bg-gray-100 p-6 rounded-xl border border-gray-300 shadow-lg"
                        >
                        <p className="font-bold text-lg text-gray-900 mb-1">MATAAS NA PAARALANG NEPTALI A. GONZALES</p>
                        <p className="mb-1">Accountancy Business and Management</p>
                        <p className="text-sm text-gray-600">July 2018 – 2020</p>
                        </MotionLi>

                        <MotionLi
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                        }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="bg-gray-100 p-6 rounded-xl border border-gray-300 shadow-lg"
                        >
                        <p className="font-bold text-lg text-gray-900 mb-1">MATAAS NA PAARALANG NEPTALI A. GONZALES</p>
                        <p className="text-sm text-gray-600">April 2014 – 2018</p>
                        </MotionLi>

                        <MotionLi
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                        }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="bg-gray-100 p-6 rounded-xl border border-gray-300 shadow-lg"
                        >
                        <p className="font-bold text-lg text-gray-900 mb-1">NUEVE DE FEBRERO ELEMENTARY SCHOOL</p>
                        <p className="text-sm text-gray-600">May 2008 – 2014</p>
                        </MotionLi>
                    </ul>
                    </div>
        
                {/* Skills and Experience */}
                <div className="mt-20 border-t pt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills and Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend Development */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-blue-100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-blue-600">Frontend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                          alt="HTML5"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                          alt="CSS3"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                          alt="JavaScript"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                          alt="Bootstrap"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                          alt="Tailwind CSS"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
        
                    {/* Backend Development */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-green-100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-green-600">Backend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"
                          alt="Java"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                          alt="Python"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
                          alt="Php"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
                          alt="Laravel"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
                          alt="Mysql"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"
                          alt="Oracle"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                          alt="Node.js"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
        
                    {/* Desktop & Mobile Development */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-orange-100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-orange-600">Desktop & Mobile Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white"
                          alt=".NET"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Visual%20Basic-512BD4?style=for-the-badge&logo=visualstudio&logoColor=white"
                          alt="Visual Basic"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
                          alt="Flutter"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
        
                    {/* Data Science (example) */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-yellow-100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-yellow-600">Data Science & Machine Learning</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
                          alt="TensorFlow"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
                          alt="PyTorch"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white"
                          alt="Scikit-learn"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"
                          alt="Pandas"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white"
                          alt="NumPy"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=plotly&logoColor=white"
                          alt="Matplotlib"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white"
                          alt="Seaborn"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/SpaCy-09A3D5?style=for-the-badge&logo=spacy&logoColor=white"
                          alt="SpaCy"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/NLTK-76B900?style=for-the-badge&logo=python&logoColor=white"
                          alt="NLTK"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/BERT-FFEB3B?style=for-the-badge&logo=google&logoColor=black"
                          alt="BERT"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/OpenCV-5C2D91?style=for-the-badge&logo=opencv&logoColor=white"
                          alt="OpenCV"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
        
                    {/* Add more cards as needed... */}
                    {/* Database */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-red-100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-red-600">🗄️ Database</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
                          alt="MongoDB"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"
                          alt="Oracle"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"
                          alt="SQLite"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
                          alt="MySQL"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
                          alt="MariaDB"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white"
                          alt="SQL_Server"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Data Visualization */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-[#FA8072]/50">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-[#FA8072]">📊 Data Visualization</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white"
                          alt="Chart.js"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Backend as a Service (BaaS) */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-[#FF00FF]/20">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-[#FF00FF]">☁️ Backend as a Service (BaaS)</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
                          alt="Firebase"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Frameworks */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-[#DC143C]/40">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-[#DC143C]">🚀 Frameworks</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Laravel-EF2D24?style=for-the-badge&logo=laravel&logoColor=white"
                          alt="Laravel"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
                          alt="Flask"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Software & Tools */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-[#FF2400]/40">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-[#FF2400]">🖥️ Software & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Adobe_Illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white"
                          alt="Adobe Illustrator"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Adobe_Acrobat-FF0000?style=for-the-badge&logo=adobeacrobat&logoColor=white"
                          alt="Adobe Acrobat"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Adobe_Photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white"
                          alt="Adobe Photoshop"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Design */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-lime-100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-lime-600">Design</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Wix-FAAD4D?style=for-the-badge&logo=wix&logoColor=000000"
                          alt="Wix"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white"
                          alt="Canva"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                          alt="Figma"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Development */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-purple-200">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-purple-600">Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"
                          alt="VS Code"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/PyCharm-000000?style=for-the-badge&logo=pycharm&logoColor=white"
                          alt="PyCharm"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Code::Blocks-000000?style=for-the-badge&logo=codeblocks&logoColor=white"
                          alt="Code::Blocks"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"
                          alt="Oracle"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Google_Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=white"
                          alt="Google Colab"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/HuggingFace-FFB000?style=for-the-badge&logo=huggingface&logoColor=black"
                          alt="Hugging Face"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                          alt="Postman"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                          alt="Git"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Game Engines */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-[#E6E6FA]/100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-[#a7a7f9]">Game Engines</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white"
                          alt="Unity"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Unreal_Engine-313131?style=for-the-badge&logo=unrealengine&logoColor=white"
                          alt="Unreal Engine"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/*Security / Pentesting Tools */}
                    <div className="group bg-gray-50 p-6 rounded-lg transform transition hover:scale-105 hover:bg-teal-100">
                      <h4 className="text-lg font-semibold mb-4 group-hover:text-teal-600">🛡️ Security / Pentesting Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <img
                          src="https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kalilinux&logoColor=white"
                          alt="Kali Linux"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Metasploit-000000?style=for-the-badge&logo=metasploit&logoColor=white"
                          alt="Metasploit"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white"
                          alt="Wireshark"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Burp_Suite-FF6F00?style=for-the-badge&logo=burpsuite&logoColor=white"
                          alt="Burp Suite"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Nmap-004688?style=for-the-badge&logo=nmap&logoColor=white"
                          alt="Nmap"
                          className="transition-transform group-hover:scale-110"
                        />
                        <img
                          src="https://img.shields.io/badge/Phishing_Attack-D32F2F?style=for-the-badge&logo=security&logoColor=white"
                          alt="Phishing Attack"
                          className="transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
        
                  </div>
            </div>
      </div>
    </section>
  );
}

export default About;
