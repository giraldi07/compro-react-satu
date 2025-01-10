import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { CheckCircle, Users, Award, Building, Globe } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion
import CountUp from 'react-countup'; // Import CountUp
import { useInView } from 'react-intersection-observer'; // Import useInView untuk memicu animasi saat komponen terlihat

const stats = [
  { label: 'Years Experience', value: 10 }, // Ubah nilai menjadi angka (bukan string)
  { label: 'Projects Completed', value: 200 },
  { label: 'Team Members', value: 50 },
  { label: 'Client Satisfaction', value: 95 }, // Ubah nilai menjadi angka (bukan string)
];

const values = [
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We put our customers first, ensuring their success is our top priority.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering high-quality solutions.',
  },
  {
    icon: Building,
    title: 'Innovation',
    description: 'We embrace innovation and creative thinking to solve complex challenges.',
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    description: 'We think globally while acting locally to serve diverse markets.',
  },
];

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

export default function AboutPage() {
  // Gunakan useInView untuk memicu animasi saat komponen terlihat di layar
  const { ref, inView } = useInView({
    triggerOnce: true, // Hanya memicu sekali
    threshold: 0.5, // Memicu saat 50% komponen terlihat
  });

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              About Our Company
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              We're a team of passionate individuals dedicated to transforming businesses through innovative solutions and strategic thinking.
            </motion.p>
          </motion.div>
        </Container>
      </Section>


      {/* Stats Section */}
      <Section>
            <Container>
              <motion.div
                ref={ref} // Gunakan ref untuk memicu animasi saat komponen terlihat
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'} // Memicu animasi saat inView true
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-blue-600">
                      {/* Gunakan CountUp untuk animasi angka */}
                      <CountUp
                        start={0} // Mulai dari 0
                        end={stat.value} // Nilai akhir
                        duration={2} // Durasi animasi (dalam detik)
                        suffix={stat.label === 'Client Satisfaction' ? '%' : '+'} // Tambahkan suffix jika diperlukan
                      />
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </Container>
      </Section>



      {/* Our Story Section */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Founded in 2014, we've grown from a small consulting firm to a global leader in business solutions. Our journey has been marked by continuous innovation and a commitment to excellence.
              </p>
              <div className="mt-8 space-y-4">
                {['Industry expertise', 'Innovative solutions', 'Global reach', 'Customer success'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8">
                Learn More
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Our team"
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Company Values Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              Company Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Our values define who we are and guide everything we do.
            </motion.p>
          </motion.div>


          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border dark:border-gray-800"
              >
                <value.icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>


    </main>
  );
}