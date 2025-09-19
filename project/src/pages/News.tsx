import React, { useState } from 'react';
import { Calendar, ArrowRight, Search } from 'lucide-react';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'product-launch', name: 'Product Launches' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'company-news', name: 'Company News' },
    { id: 'industry-insights', name: 'Industry Insights' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'ElectroTech Solutions Launches New 5G RF Module Series',
      category: 'product-launch',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/159201/circuit-electrical-engineering-electronics-159201.jpeg',
      excerpt: 'Our latest RF-5G series brings advanced 5G connectivity to industrial and IoT applications with industry-leading performance and reliability.',
      content: 'ElectroTech Solutions today announced the launch of its new RF-5G module series, designed specifically for next-generation 5G and advanced IoT applications. The new modules feature extended frequency ranges, improved power efficiency, and enhanced security features.'
    },
    {
      id: 2,
      title: 'Strategic Partnership with Global Automotive OEM Announced',
      category: 'partnerships',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
      excerpt: 'New multi-year agreement to supply advanced automotive-grade electronic components for electric vehicle platforms and autonomous driving systems.',
      content: 'We are pleased to announce a strategic partnership with a leading global automotive OEM to supply high-performance electronic components for their next-generation electric vehicle platform. This partnership represents a significant milestone in our automotive business expansion.'
    },
    {
      id: 3,
      title: 'Investment in New Manufacturing Facility Announced',
      category: 'company-news',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      excerpt: 'ElectroTech Solutions invests $50M in state-of-the-art manufacturing facility to meet growing global demand for electronic components.',
      content: 'To meet the increasing global demand for high-performance electronic components, ElectroTech Solutions is investing $50 million in a new state-of-the-art manufacturing facility. The facility will incorporate Industry 4.0 technologies and advanced automation.'
    },
    {
      id: 4,
      title: 'Industry 4.0: The Future of Electronic Manufacturing',
      category: 'industry-insights',
      date: '2023-12-20',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      excerpt: 'Exploring how Industry 4.0 technologies are transforming electronic component manufacturing and what it means for OEM customers.',
      content: 'Industry 4.0 is revolutionizing electronic manufacturing with smart factories, AI-driven quality control, and predictive maintenance. Learn how these innovations benefit our customers through improved quality, faster delivery, and competitive pricing.'
    },
    {
      id: 5,
      title: 'ElectroTech Achieves ISO 14001 Environmental Certification',
      category: 'company-news',
      date: '2023-12-15',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      excerpt: 'Demonstrating our commitment to environmental sustainability through comprehensive environmental management system implementation.',
      content: 'ElectroTech Solutions has successfully achieved ISO 14001 environmental management certification, reinforcing our commitment to sustainable business practices and environmental responsibility across all operations.'
    },
    {
      id: 6,
      title: 'New Power Management IC Series for Industrial Applications',
      category: 'product-launch',
      date: '2023-12-10',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      excerpt: 'PMC-4000 series offers enhanced efficiency and reliability for demanding industrial power management requirements.',
      content: 'The new PMC-4000 series power management ICs deliver up to 98% efficiency with advanced thermal management and protection features, specifically designed for harsh industrial environments and mission-critical applications.'
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const featuredArticle = newsArticles[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Stay informed about the latest developments, product launches, and industry insights from ElectroTech Solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Story</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden lg:flex">
            <div className="lg:w-1/2">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar size={16} className="mr-2" />
                {formatDate(featuredArticle.date)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{featuredArticle.content}</p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors inline-flex items-center">
                Read Full Article
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Filter News</h2>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Articles</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news..."
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
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredArticles.length} articles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.slice(1).map(article => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-orange-500 font-medium">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors inline-flex items-center">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No articles found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
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

      {/* Newsletter Signup */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;