import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf'; // Add your resume to the assets folder

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-light-bg dark:bg-dark-bg bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <motion.div
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-light-text dark:text-dark-text"
          variants={itemVariants}
        >
          Aayush JP
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-light-secondary dark:text-dark-secondary"
          variants={itemVariants}
        >
          Aspiring Software Engineer | Frontend Developer
        </motion.p>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-light-secondary dark:text-dark-secondary"
          variants={itemVariants}
        >
          I build intuitive and functional web experiences.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4 flex-wrap"
          variants={itemVariants}
        >
          <a
            href={resume}
            download="AayushJP_Resume.pdf"
            className="px-6 py-3 bg-light-primary text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
          >
            Download Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text font-semibold rounded-lg shadow-md hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;