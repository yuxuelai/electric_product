import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, MessageCircle, ChevronLeft, ChevronRight, CheckCircle, FileText } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('specifications');

  // This would typically come from an API or state management
  const product = {
    id: 1,
    name: 'High-Performance Microcontroller MCU-2024',
    partNumber: 'MCU-2024-LQFP100',
    category: 'Microcontrollers',
    application: 'Industrial Automation',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      'https://images.pexels.com/photos/159201/circuit-electrical-engineering-electronics-159201.jpeg'
    ],
    description: 'The MCU-2024 is an advanced 32-bit ARM Cortex-M4 microcontroller featuring integrated peripherals designed for demanding industrial control applications. This high-performance solution combines processing power with energy efficiency, making it ideal for modern embedded systems requiring real-time control and connectivity.',
    keyFeatures: [
      'High-performance 32-bit ARM Cortex-M4 core with FPU',
      'Extensive peripheral integration including ADC, DAC, UART, SPI, I2C',
      'Advanced power management with multiple low-power modes',
      'Industrial-grade temperature range operation',
      'Comprehensive development ecosystem support',
      'Hardware security features for secure applications'
    ],
    specifications: {
      'General': {
        'Architecture': '32-bit ARM Cortex-M4 with FPU',
        'Core Frequency': 'Up to 180MHz',
        'Flash Memory': '512KB',
        'SRAM': '128KB',
        'Package': '100-pin LQFP',
        'Operating Voltage': '2.0V - 3.6V'
      },
      'Environmental': {
        'Operating Temperature': '-40°C to +105°C',
        'Storage Temperature': '-65°C to +150°C',
        'Humidity': '95% RH non-condensing',
        'Vibration': 'MIL-STD-202G compliant',
        'Shock': 'MIL-STD-202G compliant'
      },
      'Peripherals': {
        'ADC Channels': '16 x 12-bit',
        'DAC Channels': '2 x 12-bit',
        'UART Interfaces': '6',
        'SPI Interfaces': '4',
        'I2C Interfaces': '3',
        'PWM Channels': '12'
      },
      'Power': {
        'Active Mode': '120mA @ 180MHz',
        'Sleep Mode': '1.2mA',
        'Standby Mode': '2.5µA',
        'Shutdown Mode': '140nA',
        'Wake-up Time': '< 10µs'
      }
    },
    applications: [
      'Industrial Process Control',
      'Building Automation Systems',
      'Motor Control Applications',
      'Data Acquisition Systems',
      'Communication Gateways',
      'Embedded Control Systems'
    ],
    certifications: ['CE Marking', 'RoHS Compliant', 'REACH Compliant', 'IPC Standards', 'ISO 9001:2015'],
    documents: [
      { name: 'Product Datasheet', type: 'PDF', size: '2.3MB' },
      { name: 'Application Notes', type: 'PDF', size: '1.8MB' },
      { name: 'Reference Manual', type: 'PDF', size: '15.2MB' },
      { name: 'Evaluation Board Guide', type: 'PDF', size: '3.1MB' },
      { name: 'Software Development Kit', type: 'ZIP', size: '45.7MB' }
    ],
    relatedProducts: [
      { id: 2, name: 'Power Management IC PMC-3000', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg' },
      { id: 3, name: 'RF Transceiver Module RF-5G', image: 'https://images.pexels.com/photos/159201/circuit-electrical-engineering-electronics-159201.jpeg' },
      { id: 4, name: 'Precision ADC Converter ADC-16', image: 'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg' }
    ]
  };

  const tabs = [
    { id: 'specifications', name: 'Specifications' },
    { id: 'applications', name: 'Applications' },
    { id: 'documents', name: 'Documents' },
    { id: 'support', name: 'Support' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="/products" className="text-gray-500 hover:text-gray-700">Products</a></li>
              <li><span className="text-gray-500">/</span></li>
              <li><a href="/products?category=microcontrollers" className="text-gray-500 hover:text-gray-700">{product.category}</a></li>
              <li><span className="text-gray-500">/</span></li>
              <li><span className="text-gray-900 font-medium">{product.name}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md mb-4">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-orange-500' : 'hover:opacity-75'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4">
                <span className="text-sm text-orange-500 font-medium">{product.category}</span>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
                <p className="text-gray-600 mt-2">Part Number: {product.partNumber}</p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center">
                  <MessageCircle size={20} className="mr-2" />
                  Request Quote
                </button>
                <button className="flex-1 bg-blue-900 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors flex items-center justify-center">
                  <Download size={20} className="mr-2" />
                  Download Datasheet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b">
              <nav className="flex space-x-8 px-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(product.specifications).map(([category, specs]) => (
                      <div key={category}>
                        <h4 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">{category}</h4>
                        <dl className="space-y-3">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <dt className="text-gray-600">{key}:</dt>
                              <dd className="text-gray-900 font-medium">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Target Applications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((app, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <CheckCircle size={20} className="text-green-500 mr-3" />
                        <span className="text-gray-800">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Documentation & Downloads</h3>
                  <div className="space-y-4">
                    {product.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                          <FileText size={20} className="text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">{doc.name}</p>
                            <p className="text-sm text-gray-600">{doc.type} • {doc.size}</p>
                          </div>
                        </div>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors flex items-center">
                          <Download size={16} className="mr-1" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Contact Our Experts</h4>
                      <p className="text-gray-600 mb-4">
                        Our technical support team is ready to assist you with product selection, design consultation, and technical questions.
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm"><strong>Email:</strong> tech-support@electrotech.com</p>
                        <p className="text-sm"><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p className="text-sm"><strong>Hours:</strong> Monday-Friday, 8AM-6PM PST</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Development Resources</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Evaluation boards and development kits available</li>
                        <li>• Reference designs and application notes</li>
                        <li>• Software development tools and libraries</li>
                        <li>• Online community forums and tutorials</li>
                        <li>• Custom design services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{relatedProduct.name}</h4>
                  <button className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;