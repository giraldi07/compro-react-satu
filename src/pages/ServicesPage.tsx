import { Container } from '../components/ui/Container';
import { useNavigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Lightbulb, TrendingUp, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion

// Import gambar
import innovationSolutions from '../assets/gallery/inovation.jpg';
import businessGrowth from '../assets/gallery/business.jpg';
import expertConsultation from '../assets/gallery/consultation.jpg';
import globalReach from '../assets/gallery/global.jpg';

const services = [
  {
    icon: Lightbulb,
    title: 'Innovation Solutions',
    description: 'Transform your business with cutting-edge technology and creative solutions.',
    features: [
      'Digital Transformation',
      'Product Innovation',
      'Process Automation',
      'Technology Consulting',
    ],
    image: innovationSolutions,
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Accelerate your business growth with strategic planning and execution.',
    features: [
      'Market Analysis',
      'Growth Strategy',
      'Performance Optimization',
      'Revenue Expansion',
    ],
    image: businessGrowth,
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Get expert guidance for your most challenging business problems.',
    features: [
      'Business Strategy',
      'Risk Management',
      'Change Management',
      'Leadership Development',
    ],
    image: expertConsultation,
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Expand your business globally with our international expertise.',
    features: [
      'Market Entry Strategy',
      'International Operations',
      'Cross-border Partnerships',
      'Global Compliance',
    ],
    image: globalReach,
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const handleContactClick = () => {
    console.log('Navigating to Contact page...');
    navigate('/contact');
  };

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

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Comprehensive business solutions tailored to your needs. We help you transform, grow, and succeed in today's competitive market.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Konten */}
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-600">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="mt-8 space-y-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="mt-8 hover:scale-105 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Gambar */}
                <div className={`relative order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 dark:opacity-30" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50 dark:bg-gray-800 py-20">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300"
            >
              Let's discuss how we can help you achieve your business goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                onClick={handleContactClick}
                size="lg"
                className="mt-8 hover:scale-105 transition-transform"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}