import { Link } from 'react-scroll';

const Footer = () => {
  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-light-accent dark:bg-dark-accent py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-light-secondary dark:text-dark-secondary mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aayush JP. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-sm text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary cursor-pointer transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;