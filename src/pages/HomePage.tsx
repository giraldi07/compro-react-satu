import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion'; // Import Framer Motion untuk animasi
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

// Variants untuk animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  return (
    <ParallaxProvider>
      <main className="bg-white dark:bg-gray-900">
        {/* Hero Section dengan Parallax Scroll */}
        <ParallaxBanner
          layers={[
            {
              image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              speed: -20, // Kecepatan parallax (negatif untuk efek yang lebih halus)
            },
          ]}
          className="h-screen flex items-center justify-center relative overflow-hidden"
        >
          {/* Overlay untuk memastikan teks tetap terlihat */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center relative z-20" // Pastikan teks berada di atas overlay
          >
            <motion.h1
              variants={fadeInUp}
              className="text-6xl font-bold text-white"
            >
              Welcome to Our Website
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-200"
            >
              We provide innovative solutions for your business.
            </motion.p>
          </motion.div>
        </ParallaxBanner>

        {/* About Section dengan Parallax Scroll */}
        <Parallax speed={-10}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="py-20"
          >
            <About />
          </motion.div>
        </Parallax>

        {/* Services Section dengan Motion Animasi */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Services />
          </motion.div>
        </motion.div>

        {/* Contact Section dengan Motion Animasi */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Contact />
          </motion.div>
        </motion.div>
      </main>
    </ParallaxProvider>
  );
}