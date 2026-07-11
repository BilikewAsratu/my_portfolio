import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Sales Dashboard',
    description:
      'React dashboard that imports Excel files, visualizes data with Chart.js, and saves reports via a PHP API. Combines business workflows with modern frontend.',
    tech: ['React', 'Tailwind', 'Chart.js', 'PHP', 'Excel'],
    live: 'https://your-demo-link.com',
    github: 'https://github.com/yourusername/sales-dashboard',
    image: '/project1.jpg',  // optional screenshot
  },
  {
    title: 'Invoice Generator',
    description:
      'Generate professional invoices from a React form, export to PDF or Word using a PHP backend. Demonstrates full‑stack integration and document automation.',
    tech: ['React', 'PHP', 'PhpWord', 'Tailwind'],
    live: 'https://invoice-demo.com',
    github: 'https://github.com/yourusername/invoice-gen',
    image: '/project2.jpg',
  },
  {
    title: 'Task Manager API',
    description:
      'A pure PHP REST API with JWT authentication and MySQL, built following MVC pattern. Includes Postman collection documentation.',
    tech: ['PHP', 'MySQL', 'JWT', 'Postman'],
    live: null, // API only, no live demo link
    github: 'https://github.com/yourusername/task-api',
    image: '/project3.jpg',
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group hover:border-gray-700 transition-all"
  >
    {/* Optional image */}
    {project.image && (
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <FiGithub /> Source Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;