import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center mt-8 sm:mt-8 md:mt-8 lg:text-left">
            <h1 className="heading-primary">
              <span className="block dark:text-gray-300">Transform Your</span>
              <span className="block text-blue-600 mt-2">Business Vision</span>
              <span className="block text-2xl md:text-3xl font-medium mt-4 dark:text-indigo-300 text-gray-600">
                Into Reality
              </span>
            </h1>
            <p className="paragraph mt-8 max-w-2xl mx-auto lg:mx-0 dark:text-indigo-50">
              We help businesses grow by providing innovative solutions and strategic consulting services tailored to your unique needs. Partner with us to unlock your company's full potential.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 bg-white rounded-lg shadow-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200">
                Our Services
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
            <img
              className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team working on business strategy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}