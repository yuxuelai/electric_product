import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Download, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'High-Performance Microcontroller MCU-2024',
      category: 'Microcontrollers',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      description: 'Advanced 32-bit ARM Cortex-M4 microcontroller with integrated peripherals',
      keySpecs: ['32-bit ARM Cortex-M4', '512KB Flash', '128KB SRAM', '100 LQFP Package']
    },
    {
      id: 2,
      name: 'Power Management IC PMC-3000',
      category: 'Power Management',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      description: 'Multi-channel power management solution for industrial applications',
      keySpecs: ['5V-24V Input', '4 Channel Output', '95% Efficiency', 'QFN-32 Package']
    },
    {
      id: 3,
      name: 'RF Transceiver Module RF-5G',
      category: 'RF/Wireless',
      image: 'https://images.pexels.com/photos/159201/circuit-electrical-engineering-electronics-159201.jpeg',
      description: 'High-frequency transceiver module for 5G and IoT applications',
      keySpecs: ['2.4-5.8GHz Range', '20dBm Output Power', 'SPI Interface', 'CE/FCC Certified']
    },
    {
      id: 4,
      name: 'Precision ADC Converter ADC-16',
      category: 'Analog',
      image: 'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg',
      description: '16-bit high-precision analog-to-digital converter with low noise',
      keySpecs: ['16-bit Resolution', '1MSPS Rate', 'Low Noise', 'TSSOP-20 Package']
    }
  ];

  const applications = [
    {
      title: 'Industrial Automation',
      description: 'Robust electronic solutions for factory automation, process control, and industrial IoT applications.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      title: 'Automotive Electronics',
      description: 'Automotive-grade components for ADAS, infotainment, and electric vehicle systems.',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
    },
    {
      title: 'Consumer Electronics',
      description: 'High-performance components for smartphones, tablets, wearables, and smart home devices.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg'
    },
    {
      title: 'Medical Devices',
      description: 'Medical-grade electronic solutions meeting strict regulatory requirements and safety standards.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg'
    }
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001',
    'IATF 16949',
    'RoHS Compliant',
    'CE Marking',
    'FCC Certified'
  ];

  const news = [
    {
      date: '2024-01-15',
      title: 'New 5G RF Module Series Launch',
      excerpt: 'ElectroTech Solutions announces the launch of its latest 5G RF module series designed for next-generation wireless applications.'
    },
    {
      date: '2024-01-10',
      title: 'Partnership with Global Automotive OEM',
      excerpt: 'Strategic partnership established to supply advanced automotive-grade electronic components for electric vehicle platforms.'
    },
    {
      date: '2024-01-05',
      title: 'Expansion of Manufacturing Capacity',
      excerpt: 'Investment in new manufacturing facility to meet growing demand for high-performance electronic components.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg"
            alt="Industrial Technology"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Advanced Electronic Solutions for Global Markets
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                We provide high-quality electronic components and support global OEM/ODM customers with customization services, technical expertise, and reliable supply chain management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  Explore Products
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
                >
                  Get Quote
                  <MessageCircle size={20} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-orange-400 mr-3" />
                    <span>25+ Years Industry Experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-orange-400 mr-3" />
                    <span>Global Supply Chain Network</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-orange-400 mr-3" />
                    <span>Custom Design Services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-orange-400 mr-3" />
                    <span>Quality Certifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest high-performance electronic components designed for demanding industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-medium mb-2">{product.category}</div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Specifications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.keySpecs.slice(0, 3).map((spec, index) => (
                        <li key={index}>• {spec}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors flex items-center justify-center">
                      <Download size={16} className="mr-2" />
                      Download Datasheet
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-600 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/products"
              className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              View All Products
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Scenarios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our electronic components serve diverse industries with mission-critical applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full md:w-48 h-48 md:h-auto object-cover"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <Link
                    to="/solutions"
                    className="text-orange-500 font-medium hover:text-orange-600 transition-colors inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-xl text-gray-600">
              Committed to the highest quality standards and regulatory compliance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={24} className="text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
              <p className="text-xl text-gray-600">
                Stay updated with our latest developments and industry insights
              </p>
            </div>
            <Link
              to="/news"
              className="text-orange-500 font-medium hover:text-orange-600 transition-colors hidden md:flex items-center"
            >
              View All News
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <time className="text-sm text-gray-500 font-medium">{item.date}</time>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    to="/news"
                    className="text-orange-500 font-medium hover:text-orange-600 transition-colors inline-flex items-center"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/news"
              className="text-orange-500 font-medium hover:text-orange-600 transition-colors inline-flex items-center"
            >
              View All News
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;