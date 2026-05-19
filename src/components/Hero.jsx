import profileImg from "../assets/me.jpg";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col justify-center"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm Christian Belarmino
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Full-stack student developer passionate about building scalable,
            user-centric applications and continuous learning.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-medium bg-brand text-white hover:bg-brand-hover transition-colors duration-300 shadow-sm"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-lg font-medium border-2 border-brand text-brand hover:bg-brand/5 transition-colors duration-300"
            >
              About Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tianiixd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-gray-600 hover:text-brand hover:bg-brand/5 transition-colors border border-gray-200 shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-paul-belarmino-48122a3a8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-gray-600 hover:text-brand hover:bg-brand/5 transition-colors border border-gray-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tian90921@gmail.com"
              className="p-3 rounded-full bg-white text-gray-600 hover:text-brand hover:bg-brand/5 transition-colors border border-gray-200 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg">
            <img
              src={profileImg}
              alt="Tian Profile"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
