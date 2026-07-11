import { motion } from 'framer-motion';

const skillCategories = [ /* same as before */ ];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text)]">
          Skills & <span className="text-[var(--color-accent)]">Expertise</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-text)]">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-[var(--color-bg-secondary)] px-3 py-1.5 rounded-full text-sm"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-[var(--color-text-secondary)]">{skill.name}</span>
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