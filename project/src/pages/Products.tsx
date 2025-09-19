import React, { useState } from 'react';
import { Search, Filter, Download, MessageCircle } from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'microcontrollers', name: 'Microcontrollers' },
    { id: 'power-management', name: 'Power Management' },
    { id: 'rf-wireless', name: 'RF/Wireless' },
    { id: 'analog', name: 'Analog Components' },
    { id: 'sensors', name: 'Sensors' },
    { id: 'memory', name: 'Memory & Storage' }
  ];

  const applications = [
    { id: 'all', name: 'All Applications' },
    { id: 'industrial', name: 'Industrial Automation' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'consumer', name: 'Consumer Electronics' },
    { id: 'medical', name: 'Medical Devices' },
    { id: 'telecommunications', name: 'Telecommunications' }
  ];

  const products = [
    {
      id: 1,
      name: 'High-Performance Microcontroller MCU-2024',
      category: 'microcontrollers',
      application: 'industrial',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      description: 'Advanced 32-bit ARM Cortex-M4 microcontroller with integrated peripherals for industrial control applications',
      price: 'Contact for Quote',
      keySpecs: {
        'Architecture': '32-bit ARM Cortex-M4',
        'Flash Memory': '512KB',
        'SRAM': '128KB',
        'Package': '100 LQFP',
        'Operating Voltage': '2.0V - 3.6V',
        'Operating Temperature': '-40°C to +105°C'
      },
      features: ['High-performance processing', 'Low power consumption', 'Rich peripheral set', 'Industrial grade'],
      certifications: ['CE', 'RoHS', 'REACH']
    },
    {
      id: 2,
      name: 'Power Management IC PMC-3000',
      category: 'power-management',
      application: 'automotive',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      description: 'Multi-channel power management solution optimized for automotive and industrial applications',
      price: 'Contact for Quote',
      keySpecs: {
        'Input Voltage': '5V - 24V',
        'Output Channels': '4',
        'Efficiency': '95%',
        'Package': 'QFN-32',
        'Current Rating': '5A per channel',
        'Operating Temperature': '-40°C to +125°C'
      },
      features: ['Multi-channel output', 'High efficiency', 'Automotive qualified', 'Thermal protection'],
      certifications: ['AEC-Q100', 'CE', 'RoHS']
    },
    {
      id: 3,
      name: 'RF Transceiver Module RF-5G',
      category: 'rf-wireless',
      application: 'telecommunications',
      image: 'https://images.pexels.com/photos/159201/circuit-electrical-engineering-electronics-159201.jpeg',
      description: 'High-frequency transceiver module designed for 5G and advanced IoT communication systems',
      price: 'Contact for Quote',
      keySpecs: {
        'Frequency Range': '2.4 - 5.8GHz',
        'Output Power': '20dBm',
        'Interface': 'SPI',
        'Package': 'LGA-24',
        'Supply Voltage': '3.3V',
        'Data Rate': 'Up to 2Mbps'
      },
      features: ['5G compatible', 'Low latency', 'Extended range', 'Low power mode'],
      certifications: ['CE', 'FCC', 'IC', 'RoHS']
    },
    {
      id: 4,
      name: 'Precision ADC Converter ADC-16',
      category: 'analog',
      application: 'medical',
      image: 'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg',
      description: '16-bit high-precision analog-to-digital converter with ultra-low noise for medical instrumentation',
      price: 'Contact for Quote',
      keySpecs: {
        'Resolution': '16-bit',
        'Sample Rate': '1MSPS',
        'SNR': '90dB',
        'Package': 'TSSOP-20',
        'Supply Voltage': '2.7V - 5.25V',
        'Power Consumption': '2.3mW'
      },
      features: ['High precision', 'Low noise', 'Medical grade', 'Fast conversion'],
      certifications: ['ISO 13485', 'CE', 'RoHS', 'FDA 510K']
    },
    {
      id: 5,
      name: 'Temperature Sensor TEMP-PRO',
      category: 'sensors',
      application: 'industrial',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      description: 'High-accuracy temperature sensor for industrial monitoring and control systems',
      price: 'Contact for Quote',
      keySpecs: {
        'Accuracy': '±0.1°C',
        'Range': '-55°C to +150°C',
        'Interface': 'I2C/SPI',
        'Package': 'SOT-23',
        'Supply Voltage': '1.8V - 3.6V',
        'Response Time': '1.5 seconds'
      },
      features: ['High accuracy', 'Wide temperature range', 'Digital interface', 'Small footprint'],
      certifications: ['CE', 'RoHS', 'REACH']
    },
    {
      id: 6,
      name: 'Flash Memory Module MEM-1GB',
      category: 'memory',
      application: 'consumer',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      description: '1GB high-speed flash memory module for consumer electronics and embedded systems',
      price: 'Contact for Quote',
      keySpecs: {
        'Capacity': '1GB',
        'Interface': 'SPI',
        'Speed': '104MHz',
        'Package': 'WSON-8',
        'Supply Voltage': '2.7V - 3.6V',
        'Endurance': '100K cycles'
      },
      features: ['High capacity', 'Fast access', 'Low power', 'Reliable storage'],
      certifications: ['CE', 'RoHS', 'JEDEC']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesApplication = selectedApplication === 'all' || product.application === selectedApplication;
    
    return matchesSearch && matchesCategory && matchesApplication;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Product Catalog</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Explore our comprehensive range of high-quality electronic components designed for global OEM/ODM customers and distributors
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="flex items-center mb-6">
                <Filter size={20} className="text-gray-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Application Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Application</label>
                <select
                  value={selectedApplication}
                  onChange={(e) => setSelectedApplication(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {applications.map(app => (
                    <option key={app.id} value={app.id}>{app.name}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedApplication('all');
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Sort by: Relevance</option>
                <option>Sort by: Name A-Z</option>
                <option>Sort by: Name Z-A</option>
                <option>Sort by: Category</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-orange-500 font-medium mb-2">
                      {categories.find(c => c.id === product.category)?.name}
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Specifications:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(product.keySpecs).slice(0, 4).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-gray-500">{key}:</span>
                            <br />
                            <span className="text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.certifications.slice(0, 3).map(cert => (
                          <span key={cert} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors flex items-center justify-center">
                        <Download size={16} className="mr-2" />
                        Download Datasheet
                      </button>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-600 transition-colors flex items-center justify-center">
                        <MessageCircle size={16} className="mr-2" />
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedApplication('all');
                  }}
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;