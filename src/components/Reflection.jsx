import { motion } from "framer-motion";
import { Layout, Server, Database, Layers } from "lucide-react";

const Reflection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      title: "Frontend Fundamentals",
      icon: <Layout className="w-6 h-6 text-brand" />,
      description:
        "My journey started with Dr. Angela Yu's Web Development Bootcamp on Udemy. I spent endless hours of coding in HTML, CSS, and vanilla JavaScript, determined to understand exactly how the web is structured and styled from the ground up.",
    },
    {
      title: "Backend Ecosystem",
      icon: <Server className="w-6 h-6 text-brand" />,
      description:
        "Realizing true power lies in data, I dove into Node.js and Express.js. Building APIs completely changed my perspective on how applications communicate.",
    },
    {
      title: "Database Architecture",
      icon: <Database className="w-6 h-6 text-brand" />,
      description:
        "I tackled database design first with SQL Server Express then moved on to PostgreSQL, learning the critical importance of relational schemas, complex joins, and scalable data architecture.",
    },
    {
      title: "Full-Stack Synergy",
      icon: <Layers className="w-6 h-6 text-brand" />,
      description:
        "Bridging a robust backend with modern frontend frameworks like React has been incredibly rewarding, transforming me into a confident full-stack developer.",
    },
  ];

  return (
    <section
      id="reflection"
      className="min-h-screen w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 flex flex-col justify-center"
    >
      <div className="mb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand font-mono font-bold tracking-widest text-sm mb-4 uppercase"
        >
          04. My Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors"
        >
          Reflection & Learnings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors"
        >
          My learning progression as an IT student, moving from basic frontend
          assignments to building complete, working web systems.
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="absolute left-[31px] md:left-[39px] top-8 bottom-0 w-[2px] bg-brand/20 dark:bg-brand/20 transition-colors"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-8 relative z-10 w-full"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-6 md:gap-10"
            >
              <div className="shrink-0 relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-900 rounded-full border-[6px] border-white dark:border-gray-900 shadow-md flex items-center justify-center z-10 relative transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand/10 dark:bg-brand/20 rounded-full flex items-center justify-center text-brand transition-colors">
                    {step.icon}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-300 w-full group mt-0 md:mt-1 relative overflow-hidden">
                <span className="font-mono text-sm font-bold text-brand mb-3 block uppercase tracking-widest">
                  Phase 0{index + 1}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reflection;
