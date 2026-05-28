import { motion } from "framer-motion";
import { Code2, Zap, Coffee, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import profileImg from "../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 flex flex-col justify-center"
    >
      <div className="mb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand font-mono font-bold tracking-widest text-sm mb-4 uppercase"
        >
          01. About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors"
        >
          The Person Behind the Code
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center transition-colors"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 dark:border-gray-900 shadow-md mb-6 relative transition-colors">
            <div className="absolute inset-0 bg-brand/20 animate-pulse rounded-full"></div>
            <img
              src={profileImg}
              alt="Christian Belarmino"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
          <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">
            Christian Belarmino
          </h3>
          <p className="text-brand font-medium mb-8">Full-Stack Developer</p>

          <div className="w-full space-y-4 mb-8">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 transition-colors">
              <Code2 className="w-5 h-5 text-brand" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Passionate IT Student
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 transition-colors">
              <Zap className="w-5 h-5 text-brand" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Self-driven online learner
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 transition-colors">
              <Coffee className="w-5 h-5 text-brand" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Fueled by coffee & curiosity
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 transition-colors">
              <Globe className="w-5 h-5 text-brand" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Based in Philippines
              </span>
            </div>
          </div>

          <div className="w-full">
            <a
              href="https://github.com/tianiixd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand text-white font-medium text-[15px] hover:bg-brand-hover transition-colors shadow-sm"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-6 mb-10 transition-colors">
            <p>
              Hey there! I'm Christian, a{" "}
              <strong>3rd Year BSIT student at STI College Fairview</strong>. I
              am a passionate aspiring full-stack developer, constantly
              expanding my expertise in web technologies and turning complex
              problems into intuitive solutions.
            </p>
            <p>
              I started coding when I was in SHS in 2021. I chose ICT and fell
              in love with programming. With a strong foundation built through
              rigorous coursework and self-directed learning, I build products
              across the stack from React interfaces to Node.js and PostgreSQL
              backends. I thrive at the intersection of engineering and user
              experience, where clean code meets thoughtful design.
            </p>
            <p>
              When I'm not studying for exams or working on academic projects, I
              study on DataCamp and take other online courses to continuously
              improve my skills and learn new technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-center transition-colors">
              <h4 className="text-3xl font-bold text-brand mb-1">30+</h4>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Projects Built
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-center transition-colors">
              <h4 className="text-3xl font-bold text-brand mb-1">3rd Year</h4>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                BS Information Technology
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-center transition-colors">
              <h4 className="text-3xl font-bold text-brand mb-1">500+</h4>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Cups of coffee
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-center transition-colors">
              <h4 className="text-3xl font-bold text-brand mb-1">100%</h4>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Dedication to learning
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
