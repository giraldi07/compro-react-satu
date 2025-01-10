import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-secondary dark:text-white">Get in Touch</h2>
          <p className="paragraph mt-6 dark:text-gray-300">
            Have a question or want to work together? We'd love to hear from you.
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 transition-colors dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 transition-colors dark:bg-gray-700 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 transition-colors dark:bg-gray-700 dark:text-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 transition-colors dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="lg:pl-12">
            <div className="space-y-12">
              {/* Email Us */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    For general inquiries: <a href="mailto:contact@company.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@company.com</a><br />
                    For support: <a href="mailto:support@company.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@company.com</a>
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Main Office: <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 123-4567</a><br />
                    Support Line: <a href="tel:+15559876543" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (555) 987-6543</a>
                  </p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    123 Business Street<br />
                    Suite 100<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</h3>
              <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}