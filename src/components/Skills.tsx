import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaFigma, FaGlobe, FaJava, FaLinux } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiVercel, SiCplusplus, SiKubernetes, SiJenkins, SiNginx, SiAmazon, SiDocker, SiGithubactions, SiNetlify, SiRailway, SiGithub, SiPostman, SiYaml } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiVisualstudio } from "react-icons/di";

const skillCategories = [
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", rating: 4.25, note: "Proficient in containerization, image management, and deployment" },
      { name: "Kubernetes", rating: 3.75, note: "Hands-on with pods, deployments, and service orchestration" },
      { name: "AWS", rating: 3.75, note: "Experience with EC2, S3, IAM, and billing management for cloud projects" },
      { name: "CI/CD (GitHub Actions)", rating: 4.25, note: "Automated pipelines for build, test, and deployment" },
      { name: "Jenkins", rating: 3.5, note: "Configured and managed freestyle and pipeline jobs for automation" },
      { name: "Linux", rating: 4, note: "Used daily for DevOps tasks, shell scripting, and server configuration" },
      { name: "YAML", rating: 4, note: "Used for CI/CD pipeline, Kubernetes, and Docker configurations" },
      { name: "Nginx", rating: 3.5, note: "Configured as reverse proxy and for static content hosting" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", rating: 4.25, note: "Strong experience building SPAs and interactive UIs" },
      { name: "HTML5", rating: 4.5, note: "Solid foundation for semantic and accessible web development" },
      { name: "CSS3", rating: 4.25, note: "Well-versed in responsive design and animations" },
      { name: "Tailwind CSS", rating: 4, note: "Efficient styling and component-based design system" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", rating: 4, note: "Building and managing backend logic in MERN stack" },
      { name: "Express.js", rating: 3.75, note: "Comfortable with routing, middleware, and API design" },
      { name: "REST APIs", rating: 4, note: "Developed and consumed APIs for full-stack applications" },
      { name: "JWT Authentication", rating: 3.5, note: "Implemented secure authentication in backend projects" },
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "MongoDB", rating: 3.75, note: "Used for NoSQL database design in MERN projects" },
      { name: "Mongoose", rating: 3.5, note: "Comfortable defining schemas and data models" },
      { name: "MySQL / SQL", rating: 3, note: "Familiar with queries and relational database concepts" },
    ],
  },
  {
    category: "Software Development Lifecycle (SDLC)",
    skills: [
      { name: "Agile", rating: 4, note: "Collaborated in sprint-based development cycles" },
      { name: "Scrum", rating: 3.75, note: "Familiar with stand-ups, retrospectives, and sprint reviews" },
      { name: "Waterfall", rating: 3.5, note: "Understands linear and documentation-heavy workflow" },
    ],
  },
  
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", rating: 4.5, note: "Strong foundation, daily use in full-stack development" },
      { name: "Python", rating: 3.5, note: "Basic to intermediate, used for scripting and automation" },
      { name: "Java", rating: 3.5, note: "Familiar with OOP and basic algorithms" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem-Solving", rating: 4.5, note: "Strong analytical mindset with practical implementation" },
      { name: "Communication", rating: 4.25, note: "Clear and effective in team collaboration" },
      { name: "Adaptability", rating: 4.25, note: "Quick learner, adjusts easily to new tools and environments" },
      { name: "Time Management", rating: 4, note: "Efficient at balancing multiple projects and learning goals" },
    ],
  },
];

const skillIcons: Record<string, JSX.Element> = {
  "Docker": <SiDocker className="text-blue-500" />,
  "Kubernetes": <SiKubernetes className="text-blue-600" />,
  "AWS": <SiAmazon className="text-orange-500" />,
  "CI/CD (GitHub Actions)": <SiGithubactions className="text-gray-800 dark:text-gray-200" />,
  "Jenkins": <SiJenkins className="text-blue-700" />,
  "Nginx": <SiNginx className="text-green-600" />,
  "Linux": <FaLinux className="text-yellow-600" />,
  "YAML": <SiYaml className="text-indigo-600" />,
  "Vercel": <SiVercel className="text-black dark:text-white" />,
  "Netlify": <SiNetlify className="text-teal-500" />,
  "Railway": <SiRailway className="text-gray-700 dark:text-gray-300" />,
  "React": <FaReact className="text-sky-500" />,
  "React.js": <FaReact className="text-sky-500" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Express.js": <SiExpress className="text-gray-700 dark:text-gray-200" />,
  "MongoDB": <SiMongodb className="text-green-700" />,
  "MySQL": <GrMysql className="text-blue-700" />,
  "MySQL / SQL": <GrMysql className="text-blue-700" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "Python": <FaPython className="text-blue-400" />,
  "C++": <SiCplusplus className="text-blue-700" />,
  "Git": <FaGitAlt className="text-orange-600" />,
  "GitHub": <SiGithub className="text-gray-900 dark:text-white" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "VS Code": <DiVisualstudio className="text-blue-500" />,
  "Figma": <FaFigma className="text-pink-500" />,
  "Java": <FaJava className="text-[#f89820]" />
};

const ProgressBar = ({ rating }: { rating: number }) => {
  const percentage = Math.round((rating / 5) * 100);

  return (
    <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
      <div className="h-full bg-primary/80 rounded-full transition-[width] duration-500" style={{ width: `${percentage}%` }} />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-indigo-500 pb-1">My Skills</span>
        </h2>
        {(() => {
          const theme: Record<string, { accent: string }>= {
            "Cloud & DevOps": { accent: "border-primary" },
            "Frontend Development": { accent: "border-primary" },
            "Backend Development": { accent: "border-primary" },
            "Database & Storage": { accent: "border-primary" },
            "Full Stack (MERN)": { accent: "border-primary" },
            "Programming Languages": { accent: "border-primary" },
            "Software Development Lifecycle (SDLC)": { accent: "border-primary" },
            "Soft Skills": { accent: "border-primary" },
          };

          const devops = skillCategories.find(c => c.category === "Cloud & DevOps");
          const frontend = skillCategories.find(c => c.category === "Frontend Development");
          const backend = skillCategories.find(c => c.category === "Backend Development");
          const rest = skillCategories.filter(c => !["Cloud & DevOps","Frontend Development","Backend Development"].includes(c.category));

          return (
            <div className="space-y-8">
              {devops && (
                <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6 shadow-sm">
                  <h3 className={`text-xl font-semibold mb-6 text-foreground pb-2 border-b ${theme[devops.category]?.accent || "border-primary"}`}>
                    {devops.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {devops.skills.map((skill) => {
                      const percentage = Math.round((skill.rating / 5) * 100);
                      return (
                        <div key={skill.name} className="flex flex-col p-3 rounded-lg hover:bg-muted/40 transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 flex items-center justify-center">
                                {skillIcons[skill.name] || <FaGlobe className="text-indigo-500" />}
                              </div>
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{percentage}%</span>
                          </div>
                          <ProgressBar rating={skill.rating} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {(frontend || backend) && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {frontend && (
                      <div className="h-full flex flex-col rounded-xl border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6 shadow-sm">
                        <h3 className={`text-xl font-semibold mb-6 text-foreground pb-2 border-b ${theme[frontend.category]?.accent || "border-primary"}`}>
                          {frontend.category}
              </h3>
                        <div className="space-y-4">
                          {frontend.skills.map((skill) => {
                            const percentage = Math.round((skill.rating / 5) * 100);
                  return (
                              <div key={skill.name} className="flex flex-col p-3 rounded-lg hover:bg-muted/40 transition-colors">
                                <div className="flex items-center justify-between mb-1">
                                  <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {skillIcons[skill.name] || <FaGlobe className="text-indigo-500" />}
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground">{percentage}%</span>
                                </div>
                                <ProgressBar rating={skill.rating} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {backend && (
                      <div className="h-full flex flex-col rounded-xl border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6 shadow-sm">
                        <h3 className={`text-xl font-semibold mb-6 text-foreground pb-2 border-b ${theme[backend.category]?.accent || "border-primary"}`}>
                          {backend.category}
                        </h3>
                        <div className="space-y-4">
                          {backend.skills.map((skill) => {
                            const percentage = Math.round((skill.rating / 5) * 100);
                            return (
                              <div key={skill.name} className="flex flex-col p-3 rounded-lg hover:bg-muted/40 transition-colors">
                                <div className="flex items-center justify-between mb-1">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                      {skillIcons[skill.name] || <FaGlobe className="text-indigo-500" />} 
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground">{percentage}%</span>
                                </div>
                                <ProgressBar rating={skill.rating} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {rest.map((category) => (
                    <div key={category.category} className="h-full flex flex-col rounded-xl border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6 shadow-sm">
                      <h3 className={`text-xl font-semibold mb-6 text-foreground pb-2 border-b ${theme[category.category]?.accent || "border-primary"}`}>
                        {category.category}
                      </h3>
                      <div className="space-y-4">
                        {category.skills.map((skill) => {
                          const percentage = Math.round((skill.rating / 5) * 100);
                          return (
                            <div key={skill.name} className="flex flex-col p-3 rounded-lg hover:bg-muted/40 transition-colors">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 flex items-center justify-center">
                                    {skillIcons[skill.name] || <FaGlobe className="text-indigo-500" />}
                                  </div>
                                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                </div>
                                <span className="text-xs text-muted-foreground">{percentage}%</span>
                              </div>
                              <ProgressBar rating={skill.rating} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
              )}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default Skills;