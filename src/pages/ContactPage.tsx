import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: [
      { label: 'General Inquiries', value: 'contact@company.com' },
      { label: 'Support', value: 'support@company.com' },
      { label: 'Careers', value: 'careers@company.com' },
    ],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: [
      { label: 'Main Office', value: '+1 (555) 123-4567' },
      { label: 'Support Line', value: '+1 (555) 987-6543' },
      { label: 'Fax', value: '+1 (555) 246-8910' },
    ],
  },
  {
    icon: MapPin,
    title: 'Location',
    details: [
      { label: 'Headquarters', value: '123 Business Street' },
      { label: 'Suite', value: 'Suite 100' },
      { label: 'City', value: 'New York, NY 10001' },
    ],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      { label: 'Monday - Friday', value: '9:00 AM - 6:00 PM EST' },
      { label: 'Saturday', value: '10:00 AM - 4:00 PM EST' },
      { label: 'Sunday', value: 'Closed' },
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Have questions or want to discuss a project? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Send us a message</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="mt-10 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <Button size="lg" className="w-full justify-center hover:scale-105 transition-transform">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform"
                  >
                    <div className="inline-flex items-center justify-center p-2 rounded-lg bg-blue-600">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {item.details.map((detail) => (
                        <div key={detail.label}>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {detail.label}
                          </div>
                          <div className="text-sm text-gray-900 dark:text-white">
                            {detail.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="mt-4">
                <iframe
                  title="Company Location"
                  className="w-full aspect-w-16 aspect-h-9 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087643!5m2!1sen!2s"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}