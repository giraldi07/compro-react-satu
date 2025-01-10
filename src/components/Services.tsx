import { Lightbulb, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Innovation Solutions',
    description: 'We bring innovative ideas to life with cutting-edge technology and creative thinking.',
    icon: Lightbulb,
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Business Growth',
    description: 'Strategic planning and execution to help your business reach new heights.',
    icon: TrendingUp,
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Expert Consultation',
    description: 'Our experienced team provides expert guidance for your business challenges.',
    icon: Users,
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Global Reach',
    description: 'Connect with international markets and expand your business worldwide.',
    icon: Globe,
    color: 'from-orange-400 to-orange-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-secondary dark:text-white">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="paragraph mt-6 dark:text-gray-300">
            We offer a wide range of services designed to help your business grow and succeed in today's competitive market.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
              
              <a href="#contact" className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}