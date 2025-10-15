import { motion } from 'framer-motion';

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Java', 'MongoDB', 'Git'];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto text-center text-lg text-light-secondary dark:text-dark-secondary mb-12">
            I am a dedicated and passionate developer, currently focused on becoming a placement-ready software engineer. While my primary goal is to excel in the tech industry, I also harbor aspirations for a career in the civil services. This dual ambition drives me to be a well-rounded, disciplined, and problem-solving individual.
          </p>
          <h3 className="text-2xl font-bold text-center mb-8">My Skills</h3>
          <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-light-accent dark:bg-dark-accent p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;