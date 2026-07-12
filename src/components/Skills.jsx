import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: '🟧' },
      { name: 'CSS3', icon: '🟦' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind', icon: '🌊' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: '🐘' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'C++', icon: '⚙️' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Postman', icon: '📮' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
  {
    title: 'Office & Automation',
    items: [
      { name: 'Excel (Advanced)', icon: '📊' },
      { name: 'Word', icon: '📄' },
      { name: 'PowerPoint', icon: '📽️' },
      { name: 'Power Automate', icon: '⚡' },
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
                    <span className="text-lg">{skill.icon}</span>
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