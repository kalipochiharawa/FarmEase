import React from 'react';
import { MapPin, Phone, Mail, Clock, Tractor, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../LandingPage/Subcomponents/Footer';
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 sm:p-6 ${className}`}>
    {children}
  </div>
);

const ContactPage = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="relative h-48 sm:h-64 bg-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/70" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
          <Link to="/">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Farmease</h1>
            </div>
            </Link>
            <p className="text-green-50 text-sm sm:text-base md:text-lg max-w-2xl">
              Supporting farmers with innovative agricultural solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 -mt-12 sm:-mt-16 mb-8 sm:mb-12">
          <Card className="shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Visit Us</h3>
                  <p className="text-gray-600 text-sm">M1 Zomba, Mangochi Road</p>
                  <p className="text-gray-600 text-sm">Pacific, 104</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Call Us</h3>
                  <p className="text-gray-600 text-sm">(265) 990155300</p>
                  <p className="text-gray-600 text-sm">Toll Free: (111) 888777332</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg transform transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email Us</h3>
                  <p className="text-gray-600 text-sm">info@farmease.com</p>
                  <p className="text-gray-600 text-sm">support@farmease.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                <Wheat className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
                Get in Touch with Farmease
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                Our dedicated team is here to support your farming journey with expert guidance and innovative solutions.
              </p>
            </div>
            
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-100">
              <h3 className="font-semibold text-gray-900 flex items-center mb-3 sm:mb-4 text-sm sm:text-base">
                <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-700" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Our Services</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Agricultural Products Marketing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Farm Management Solutions
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Equipment Support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Technical Assistance
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Resource Planning
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Visit Our Office</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Come see us at our main location in Zomba
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6">
              <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Headquarters</h4>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <p>Zomba</p>
                <p>Zomba M1 Road</p>
                <p>Malawi</p>
                <div className="pt-2 sm:pt-3">
                  <p className="font-semibold">General Inquiries:</p>
                  <p>Phone: (265) 990155300</p>
                  <p>Email: info@farmease.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center text-gray-600">
              <p className="text-sm sm:text-base">For immediate assistance, please call our</p>
              <p className="font-semibold text-sm sm:text-base">24/7 Support Hotline:</p>
              <p className="text-green-700 text-lg sm:text-xl font-bold">(265) 888777332</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;