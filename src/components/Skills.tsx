import { useState, useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaFigma, FaGlobe, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiVercel, SiCplusplus } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiVisualstudio } from "react-icons/di";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", rating: 5 },
      { name: "TypeScript", rating: 4 },
      { name: "TailwindCSS", rating: 4 },
      { name: "HTML5", rating: 5 },
      { name: "CSS3", rating: 5 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", rating: 4 },
      { name: "Express.js", rating: 4 },
      { name: "REST APIs", rating: 4 },
      { name: "JWT Auth", rating: 4 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", rating: 4 },
      { name: "MySQL", rating: 3 },
      { name: "Mongoose", rating: 4 },
    ],
  },
  {
    category: "Full Stack (MERN)",
    skills: [
      { name: "MERN Stack", rating: 4 },
      { name: "SPA Architecture", rating: 4 },
      { name: "Deployment", rating: 4 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", rating: 5 },
      { name: "VS Code", rating: 5 },
      { name: "Figma", rating: 3 },
      { name: "Vercel", rating: 4 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", rating: 5 },
      { name: "Python", rating: 4 },
      { name: "Java", rating: 5 },
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

const AnimatedProgressBar = ({ rating }: { rating: number }) => {
  const [progress, setProgress] = useState(0);
  const percentage = (rating / 5) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-primary pb-1">My Skills</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {skillIcons[skill.name] || <FaGlobe className="text-primary" />}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <AnimatedProgressBar rating={skill.rating} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;