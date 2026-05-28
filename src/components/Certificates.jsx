import { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "../data";
import { Award, ExternalLink, ZoomIn, X } from "lucide-react";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    <section
      id="certificates"
      className="min-h-screen w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 flex flex-col justify-center"
    >
      <div className="mb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand font-mono font-bold tracking-widest text-sm mb-4 uppercase"
        >
          05. Accomplishments
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors"
        >
          Certificates & Awards
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors"
        >
          A collection of my online coursework completions, statements of
          accomplishment, and continuous learning achievements.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 flex flex-col overflow-hidden"
          >
            {cert.image && (
              <div
                className="aspect-video w-full overflow-hidden bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 cursor-pointer relative group transition-colors"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>
              </div>
            )}

            <div className="p-8 flex flex-col grow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-brand/10 dark:bg-brand/20 rounded-2xl">
                  <Award className="w-6 h-6 text-brand" />
                </div>
                <span className="text-sm font-mono font-bold text-brand bg-brand/5 px-4 py-3 rounded-2xl">
                  {cert.date}
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-3 min-h-18 md:min-h-22 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-brand mb-4">
                {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed grow mb-6 transition-colors">
                {cert.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-4">
                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-gray-600 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-colors"
                  >
                    Verify Credential
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {selectedCert && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-2 sm:p-4 md:p-8 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 transition-colors">
              <div className="flex-1 min-w-0 mr-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 truncate transition-colors">
                  <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
                  <span className="shrink-0">Certificate:</span>
                  <span className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-medium font-sans truncate transition-colors">
                    {selectedCert.title}
                  </span>
                </h3>
              </div>
              <button
                className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 cursor-pointer shadow-sm border border-gray-200 dark:border-gray-700 ease-out duration-200 shrink-0 transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 md:p-6 bg-gray-50/50 dark:bg-gray-900/50 flex-1 overflow-hidden flex items-center justify-center relative transition-colors">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 object-contain max-h-[60vh] sm:max-h-[75vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
