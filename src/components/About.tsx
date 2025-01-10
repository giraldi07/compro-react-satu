import { CheckCircle } from 'lucide-react';

const achievements = [
  { number: '10+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Completed' },
  { number: '50+', label: 'Team Members' },
  { number: '95%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 dark:opacity-30" />
            <img
              className="relative rounded-2xl shadow-2xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h2 className="heading-secondary dark:text-white">
              Driving Success Through Innovation
            </h2>
            <p className="paragraph mt-6 dark:text-gray-300">
              With over a decade of experience, we've been at the forefront of digital transformation, helping businesses adapt and thrive in an ever-evolving market landscape.
            </p>

            {/* Achievements Grid */}
            <div className="mt-8 grid grid-cols-2 gap-8">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {item.number}
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission and Vision Section */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    To empower businesses with innovative solutions that drive growth and success in the digital age.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Our Vision</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    To be the leading force in digital transformation, helping businesses thrive in an ever-evolving market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}