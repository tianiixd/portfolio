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
      className="min-h-screen w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col justify-center"
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
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Reflection & Learnings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
        >
          My learning progression as an IT student, moving from basic frontend
          assignments to building complete, working web systems
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand/10 rounded-2xl">{step.icon}</div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed grow">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Reflection;
