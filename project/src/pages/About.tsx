import React from 'react';
import { Users, Award, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '1000+', label: 'Products in Portfolio' },
    { number: '500+', label: 'Global Partners' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering the highest quality electronic components that meet or exceed industry standards.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously investing in R&D to develop cutting-edge solutions for emerging market needs.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term partnerships through exceptional service and technical support.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide presence with local expertise to support customers in every major market.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      title: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: '25+ years in electronics industry leadership'
    },
    {
      name: 'Sarah Chen',
      title: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      description: 'PhD in Electrical Engineering, 20+ years R&D experience'
    },
    {
      name: 'Michael Johnson',
      title: 'VP Global Sales',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      description: 'Expert in global OEM/ODM customer relationships'
    },
    {
      name: 'Lisa Wang',
      title: 'VP Operations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      description: 'Supply chain and manufacturing excellence expert'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About ElectroTech Solutions</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              For over 25 years, we have been a trusted partner to global OEM/ODM customers and distributors, 
              providing high-quality electronic components and comprehensive technical support for mission-critical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1999, ElectroTech Solutions began as a small team of engineers passionate about 
                  advancing electronic technology. Today, we are a global leader in electronic component 
                  distribution and custom solution development.
                </p>
                <p>
                  Our journey started with a simple mission: to bridge the gap between innovative electronic 
                  component manufacturers and the customers who need reliable, high-performance solutions. 
                  Over the years, we have built strong partnerships with leading semiconductor companies 
                  and expanded our capabilities to serve diverse industries.
                </p>
                <p>
                  From our headquarters in Tech City and regional offices worldwide, we continue to grow 
                  while maintaining our commitment to quality, innovation, and customer satisfaction. 
                  Our success is measured by the success of our customers and partners.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
                alt="Our team at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with customers, partners, and colleagues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading ElectroTech Solutions toward continued growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">Global Supply Chain</h3>
                  <p className="text-blue-200">
                    Extensive network of authorized distributors and manufacturing partners ensuring 
                    reliable component supply and competitive pricing worldwide.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">Technical Expertise</h3>
                  <p className="text-blue-200">
                    In-house engineering team providing design consultation, technical support, 
                    and custom solution development from concept to production.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">Quality Assurance</h3>
                  <p className="text-blue-200">
                    Comprehensive quality management system with ISO certifications and rigorous 
                    testing procedures to ensure product reliability.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-blue-200">25+ years of proven experience in electronic component distribution</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-blue-200">Strong relationships with leading semiconductor manufacturers</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-blue-200">Global presence with local support in major markets</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-blue-200">Flexible solutions tailored to customer requirements</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-blue-200">Commitment to quality, innovation, and customer success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;