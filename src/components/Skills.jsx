import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React Js' },
      { name: 'Tailwind' },
      { name: 'Bootstrap css' },
      { name: 'Ajax js' },
      { name: 'other JS Libraries...' }
    ],
  },
  {
    title: 'Backend Development',
    items: [
      { name: 'PHP Laravel' },
      { name: 'Express.js with Node Js' },
      { name: 'REST APIs' },
      { name: 'Django python' },
      { name: 'Fast API' },
      { name: 'Flask' }
    ],
  },
  {
    title: 'Programming Languages',
    items: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C++' },
      { name: 'PHP' },
      { name: 'Javascript[Electron Js, Node Js]' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'VS Code' },
      {name: 'google chrome'},
    ],
  },
  {
    title: 'Microsoft Office & Automation',
    items: [
      { name: 'Microsoft Excel (Advanced)' },
      { name: 'Microsoft Word' },
      { name: 'Microsoft PowerPoint' },
      { name: 'Power Automate' },
      {name: 'Sharepoint'},
      {name: 'Microsoft Access'}
    ],
  },
  {
    title: 'IT Support & Adminstration',
    items: [
      { name: 'IT Support' },
      { name: 'System Admin' },
      { name: 'Telecom Networking' },
      { name: 'Networking' },
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
          Skills & <span style={{ color: 'var(--accent)' }}>Expertise</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl p-6 transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                    style={{ backgroundColor: 'var(--hover-bg)', color: 'var(--text-secondary)' }}
                  >
                    <span>{skill.name}</span>
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