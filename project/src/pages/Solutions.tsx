import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Industrial Automation',
      description: 'Comprehensive electronic solutions for modern manufacturing and process control systems',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      features: [
        'Real-time control systems',
        'Industrial IoT connectivity',
        'Machine vision integration',
        'Predictive maintenance',
        'Safety and security systems',
        'Energy efficiency optimization'
      ],
      products: ['Microcontrollers', 'Power Management ICs', 'Sensors', 'Communication Modules'],
      applications: ['Factory Automation', 'Process Control', 'Robotics', 'SCADA Systems']
    },
    {
      title: 'Automotive Electronics',
      description: 'Advanced automotive-grade components for next-generation vehicle systems',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
      features: [
        'ADAS and autonomous driving',
        'Electric vehicle systems',
        'Infotainment and connectivity',
        'Body control modules',
        'Engine management systems',
        'Safety and security features'
      ],
      products: ['Automotive MCUs', 'Power MOSFETs', 'CAN Transceivers', 'Pressure Sensors'],
      applications: ['ADAS Systems', 'EV Powertrains', 'Infotainment', 'Telematics']
    },
    {
      title: 'Consumer Electronics',
      description: 'High-performance components for the latest consumer electronic devices',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
      features: [
        'Ultra-low power consumption',
        'Compact form factors',
        'High-speed processing',
        'Wireless connectivity',
        'Advanced user interfaces',
        'AI and ML capabilities'
      ],
      products: ['Application Processors', 'Wireless Modules', 'Audio Codecs', 'Touch Controllers'],
      applications: ['Smartphones', 'Wearables', 'Smart Home', 'Gaming Devices']
    },
    {
      title: 'Medical Devices',
      description: 'Medical-grade electronic solutions meeting strict regulatory requirements',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg',
      features: [
        'FDA/CE medical compliance',
        'Ultra-low noise performance',
        'High precision measurement',
        'Patient safety features',
        'Wireless monitoring',
        'Long-term reliability'
      ],
      products: ['Medical ADCs', 'Ultra-Low Power MCUs', 'Biosensors', 'Isolation Amplifiers'],
      applications: ['Patient Monitors', 'Diagnostic Equipment', 'Implantables', 'Portable Devices']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Solutions & Applications</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Discover how our electronic components enable innovative solutions across diverse industries. From industrial automation to medical devices, we provide the building blocks for tomorrow's technology.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Relevant Products</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.products.map((product, productIndex) => (
                          <li key={productIndex}>• {product}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.applications.map((app, appIndex) => (
                          <li key={appIndex}>• {app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center">
                      Explore Products
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                      Get Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Our engineering team works closely with customers to develop custom electronic solutions tailored to specific application requirements. From concept to production, we provide comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
              Request Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;