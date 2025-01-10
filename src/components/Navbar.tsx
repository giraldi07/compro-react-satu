import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efek untuk mencegah scroll saat breadcrumb terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  // Variants untuk animasi menu mobile (dari kanan ke kiri)
  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 }, // Mulai dari kanan
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }, // Muncul ke kiri
    exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } }, // Menghilang ke kanan
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-600 rounded-xl group-hover:bg-blue-700 transition-colors"
              >
                <Building2 className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold dark:text-white text-gray-400">CompanyName</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-indigo-50 hover:text-blue-600'
                    }`
                  }
                >
                  {item.name}
                  {/* Underline Animation */}
                  <motion.span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                      location.pathname === item.href ? 'w-full' : 'w-0'
                    } group-hover:w-full`}
                  ></motion.span>
                </NavLink>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Get Started
              </motion.a>
              {/* Theme Toggle for Desktop */}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 h-screen" // Tambahkan h-screen
                onClick={() => setIsOpen(false)} // Tutup menu saat overlay diklik
              />

              {/* Breadcrumb Menu */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className="md:hidden fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-40 h-screen overflow-y-auto" // Tambahkan h-screen dan overflow-y-auto
              >
                <div className="px-4 py-6 space-y-4">
                  {/* Tombol Close */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {/* Menu Items */}
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800'
                            : 'text-gray-700 dark:text-indigo-50 hover:text-blue-600 hover:bg-gray-50 hover:scale-105'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <a
                    href="#contact"
                    className="block px-4 py-2 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                  {/* Theme Toggle for Mobile */}
                  <ThemeToggle onClick={() => setIsOpen(false)} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}