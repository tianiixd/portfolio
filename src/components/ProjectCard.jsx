import { useState } from "react";
import { ZoomIn, ArrowRight, X } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaWindows,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiVite,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const getToolIcon = (toolName) => {
  const lowerTool = toolName.toLowerCase();
  if (lowerTool.includes("react"))
    return <FaReact className="mr-1.5 text-sm" />;
  if (lowerTool.includes("c#")) return <FaCode className="mr-1.5 text-sm" />;
  if (lowerTool.includes("express"))
    return (
      <span className="mr-1.5 flex items-center justify-center font-bold text-[9px] border border-current rounded-full w-[14px] h-[14px] leading-none">
        ex
      </span>
    );
  if (lowerTool.includes("node"))
    return <FaNodeJs className="mr-1.5 text-sm" />;
  if (lowerTool.includes("postgres"))
    return <SiPostgresql className="mr-1.5 text-sm" />;
  if (lowerTool.includes("tailwind"))
    return <SiTailwindcss className="mr-1.5 text-sm" />;
  if (lowerTool.includes("vite")) return <SiVite className="mr-1.5 text-sm" />;
  if (lowerTool.includes("mongo"))
    return <SiMongodb className="mr-1.5 text-sm" />;
  if (lowerTool.includes("typescript"))
    return <SiTypescript className="mr-1.5 text-sm" />;
  if (lowerTool.includes("javascript"))
    return <FaJsSquare className="mr-1.5 text-sm" />;
  if (lowerTool.includes("html") || lowerTool.includes("ejs"))
    return <FaHtml5 className="mr-1.5 text-sm" />;
  if (lowerTool.includes("css"))
    return <FaCss3Alt className="mr-1.5 text-sm" />;
  if (lowerTool.includes("sql"))
    return <FaDatabase className="mr-1.5 text-sm" />;
  if (lowerTool.includes("windows"))
    return <FaWindows className="mr-1.5 text-sm" />;
  return null;
};

const ProjectCard = ({ project }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
        <div
          className="aspect-video w-full overflow-hidden bg-gray-50 border-b border-gray-200 cursor-pointer relative group"
          onClick={() => setIsPreviewOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-500 mb-6 grow line-clamp-3">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand/10 text-brand-hover flex items-center"
              >
                {getToolIcon(tool)}
                {tool}
              </span>
            ))}
          </div>

          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-brand hover:text-brand-hover transition-colors mt-auto"
          >
            View Repository
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsPreviewOpen(false);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
