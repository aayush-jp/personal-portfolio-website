import { motion } from 'framer-motion';
import project1Image from '../assets/project1.png'; // Add project images to assets
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';

const projects = [
  {
    name: 'The Green Nook',
    description: 'An e-commerce web application that simulates the experience of an online plant store.',
    tech: ['React', 'Redux', 'CSS3', 'Neltify'],
    image: project1Image,
    github: 'https://github.com/aayush-jp/houseplant-store', // Add your GitHub link
    live: 'https://thegreennook.netlify.app/',   // Add your live demo link
  },
  {
    name: 'Disaster Relief and Emergency Aid App',
    description: 'A web application to streamline disaster relief efforts by connecting victims, volunteers, and aid providers in real time.',
    tech: ['HTML', 'CSS', 'MongoDB', 'Node.js', 'Firebase'],
    image: project2Image,
    github: '#',
    live: '#',
  },
  {
    name: 'Student Feedback and Assessment Dashboard',
    description: 'This was done on the account of Inhosue Project, to assess the performance of the student and tailor the learning accroding to each student',
    tech: ['Streamlit', 'Python', 'Google Forms'],
    image: project3Image, // Use a placeholder or screenshot
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-accent dark:bg-dark-accent">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-light-secondary dark:text-dark-secondary mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                    View Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-light-primary text-white rounded hover:bg-opacity-90 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;