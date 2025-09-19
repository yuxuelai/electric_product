import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      name: 'North America Headquarters',
      address: '1234 Industrial Blvd, Tech City, TC 12345, USA',
      phone: '+1 (555) 123-4567',
      email: 'americas@electrotech.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM PST'
    },
    {
      name: 'Europe Office',
      address: '567 Innovation Park, London EC1A 1BB, UK',
      phone: '+44 (0) 20 7123 4567',
      email: 'europe@electrotech.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT'
    },
    {
      name: 'Asia Pacific Office',
      address: '890 Technology Square, Singapore 123456',
      phone: '+65 6123 4567',
      email: 'apac@electrotech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT'
    }
  ];

  const inquiryTypes = [
    { value: '', label: 'Select Inquiry Type' },
    { value: 'product-info', label: 'Product Information' },
    { value: 'technical-support', label: 'Technical Support' },
    { value: 'pricing-quote', label: 'Pricing & Quote' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'custom-solution', label: 'Custom Solution Development' },
    { value: 'general', label: 'General Inquiry' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Get in touch with our global team of experts. We're here to support your electronic component needs and answer any questions you may have.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry, including specific product requirements, quantities, or technical specifications..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-orange-500 hover:text-orange-600">Privacy Policy</a> and consent to being contacted by ElectroTech Solutions regarding this inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600 mb-4">
                Our team typically responds to inquiries within 2-4 business hours during office hours.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={16} className="text-orange-500 mr-3" />
                  <span className="text-gray-700">For urgent inquiries, call us directly</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-orange-500 mr-3" />
                  <span className="text-gray-700">Email responses within 4 hours</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="text-orange-500 mr-3" />
                  <span className="text-gray-700">24/7 technical support available</span>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Global Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-900 mb-3">{office.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin size={14} className="text-gray-400 mr-2 mt-1" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={14} className="text-gray-400 mr-2" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={14} className="text-gray-400 mr-2" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="text-gray-400 mr-2" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Emergency Technical Support</h3>
              <p className="text-orange-700 text-sm mb-3">
                For critical production issues requiring immediate assistance:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-orange-800">
                  <Phone size={14} className="mr-2" />
                  <strong>+1 (555) 911-TECH</strong>
                </div>
                <div className="flex items-center text-orange-800">
                  <Mail size={14} className="mr-2" />
                  <strong>emergency@electrotech.com</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Headquarters</h2>
            <p className="text-gray-600">
              Located in the heart of Tech City's innovation district
            </p>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be integrated here</p>
              <p className="text-sm text-gray-500">1234 Industrial Blvd, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;