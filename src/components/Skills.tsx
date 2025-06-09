import { useState, useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaFigma, FaGlobe, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiVercel, SiCplusplus } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiVisualstudio } from "react-icons/di";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", rating: 4.25, note: "Strong experience, project-ready" },
      { name: "TypeScript", rating: 3, note: "Intermediate, improving with React" },
      { name: "TailwindCSS", rating: 4, note: "Frequently used, well-adapted" },
      { name: "HTML5", rating: 4.5, note: "Solid foundation, no issues" },
      { name: "CSS3", rating: 4.25, note: "Good grasp with Tailwind support" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", rating: 4, note: "Actively using in full stack apps" },
      { name: "Express.js", rating: 3.75, note: "Familiar and comfortable" },
      { name: "REST APIs", rating: 4, note: "Building APIs with Express" },
      { name: "JWT Auth", rating: 3.5, note: "Implemented basic token auth" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", rating: 3.75, note: "Good grasp with MERN stack" },
      { name: "MySQL", rating: 2.5, note: "Limited use, more focus on NoSQL" },
      { name: "Mongoose", rating: 3.5, note: "Familiar, used with MongoDB" },
    ],
  },
  {
    category: "Full Stack (MERN)",
    skills: [
      { name: "MERN Stack", rating: 4, note: "Working consistently in this stack" },
      { name: "SPA Architecture", rating: 3.75, note: "Understanding of SPA structure" },
      { name: "Deployment", rating: 4.25, note: "Frequently deploy on Vercel/Netlify" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", rating: 4.25, note: "Confident with version control" },
      { name: "VS Code", rating: 4.75, note: "Primary development environment" },
      { name: "Figma", rating: 3, note: "Using designs, basic UI/UX" },
      { name: "Vercel", rating: 4.25, note: "Frequently deploy projects" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", rating: 4.5, note: "Strong foundation, daily use" },
      { name: "Python", rating: 3.5, note: "Basic knowledge, learning" },
      { name: "Java", rating: 3.5, note: "Basic knowledge, learning" },
    ],
  },
];

const skillIcons: Record<string, JSX.Element> = {
  "React": <FaReact className="text-sky-500" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-400" />,
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Express.js": <SiExpress className="text-gray-700 dark:text-gray-200" />,
  "MongoDB": <SiMongodb className="text-green-700" />,
  "MySQL": <GrMysql className="text-blue-700" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "Python": <FaPython className="text-blue-400" />,
  "C++": <SiCplusplus className="text-blue-700" />,
  "Git": <FaGitAlt className="text-orange-600" />,
  "VS Code": <DiVisualstudio className="text-blue-500" />,
  "Figma": <FaFigma className="text-pink-500" />,
  "Vercel": <SiVercel className="text-black dark:text-white" />,
  "Java": <FaJava className="text-[#f89820]" />
};

const SkillTooltip = ({ percentage, note }: { percentage: number; note: string }) => {
  return (
    <div className="absolute -top-20 left-0 right-0 mx-auto bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg z-50 w-40 pointer-events-none">
      <div className="text-center font-bold mb-0.5">{percentage}%</div>
      <div className="text-xs text-gray-300 text-center leading-tight">{note}</div>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
    </div>
  );
};

const ProgressBar = ({ rating }: { rating: number; note: string }) => {
  const percentage = Math.round((rating / 5) * 100);

  return (
    <div className="relative w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-visible">
      <div
        className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-700 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-indigo-500 pb-1">My Skills</span>
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="mb-8 break-inside-avoid rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => {
                  const [showTooltip, setShowTooltip] = useState(false);
                  return (
                    <div
                      key={skill.name}
                      className="relative flex flex-col p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {skillIcons[skill.name] || <FaGlobe className="text-indigo-500" />}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <ProgressBar rating={skill.rating} note={skill.note} />
                      {showTooltip && (
                        <SkillTooltip 
                          percentage={Math.round((skill.rating / 5) * 100)} 
                          note={skill.note} 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;