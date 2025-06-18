import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    /* anchor target for #contact link */
    <section id="contact" className="bg-gradient-to-b from-[#000000] to-[#000000] min-h-screen flex flex-col items-center p-8 text-gray-900">
      {/* Intro */}
      <h2 className="text-4xl font-bold mb-4 text-center text-white">Let’s Talk!</h2>
      <p className="text-white max-w-md text-center mb-8">
        Got a project in mind? Let’s connect and create something amazing together.
      </p>

      {/* Contact cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <a
          href="mailto:abordajejetboy20@gmail.com"
          className="bg-white shadow-md rounded-xl p-6 w-60 hover:bg-gray-50 transition"
        >
          <FaEnvelope className="text-2xl mb-2 text-gray-600 mx-auto" />
          <h3 className="text-lg font-semibold mb-1 text-center">Email</h3>
          <p className="text-gray-600 text-center whitespace-nowrap">abordajejetboy20@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/jet-boy-abordaje-925460365/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-md rounded-xl p-6 w-60 hover:bg-gray-50 transition"
        >
          <FaLinkedin className="text-2xl mb-2 text-blue-600 mx-auto" />
          <h3 className="text-lg font-semibold mb-1 text-center">LinkedIn</h3>
          <p className="text-gray-600 text-center break-all">Jet Boy Abordaje</p>
        </a>

        <a
          href="https://www.instagram.com/itsme_jetboy/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-md rounded-xl p-6 w-60 hover:bg-gray-50 transition"
        >
          <FaInstagram className="text-2xl mb-2 text-pink-500 mx-auto" />
          <h3 className="text-lg font-semibold mb-1 text-center">Instagram</h3>
          <p className="text-gray-600 text-center">itsme_jetboy</p>
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-xl">
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white font-semibold rounded-lg py-3 hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
