import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiPhp, SiExpress, SiJava, SiPython, SiCplusplus,
  SiGit, SiGithub, SiPostman, SiMicrosoftoffice
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: <SiPhp className="text-indigo-400" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
      { name: 'REST APIs', icon: <span className="text-sm font-mono">API</span> },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: <SiJava className="text-red-500" /> },
      { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'GitHub', icon: <SiGithub className="text-white" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'VS Code', icon: <span className="text-blue-400 font-bold">&lt;/&gt;</span> },
    ],
  },
  {
    title: 'Office & Automation',
    items: [
      { name: 'Excel (Advanced)', icon: <SiMicrosoftoffice className="text-green-600" /> },
      { name: 'Word', icon: <SiMicrosoftoffice className="text-blue-500" /> },
      { name: 'PowerPoint', icon: <SiMicrosoftoffice className="text-red-500" /> },
      { name: 'Power Automate', icon: <span className="text-sm">⚡</span> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills & <span className="text-blue-400">Expertise</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full text-sm"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;