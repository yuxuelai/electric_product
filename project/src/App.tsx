import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import SEOMeta from './components/SEOMeta';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Solutions from './pages/Solutions';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <SEOMeta 
                    title="ElectroTech Solutions - Premium Electronic Components for Global OEM/ODM"
                    description="Leading supplier of high-quality electronic components for global OEM/ODM customers and distributors. Microcontrollers, power management, RF modules, and custom solutions."
                    keywords="electronic components, OEM, ODM, microcontrollers, power management, RF modules, industrial automation, automotive electronics"
                  />
                  <Home />
                </>
              } 
            />
            <Route 
              path="/products" 
              element={
                <>
                  <SEOMeta 
                    title="Electronic Components Catalog - Products | ElectroTech Solutions"
                    description="Browse our comprehensive catalog of electronic components including microcontrollers, power management ICs, RF modules, sensors, and more for OEM/ODM applications."
                    keywords="electronic components catalog, microcontrollers, power management IC, RF modules, sensors, analog components, memory storage"
                  />
                  <Products />
                </>
              } 
            />
            <Route 
              path="/product/:id" 
              element={
                <>
                  <SEOMeta 
                    title="[Product Name] - Technical Specifications | ElectroTech Solutions"
                    description="Detailed specifications, features, and documentation for [Product Name]. Download datasheets and get quotes for your OEM/ODM requirements."
                    keywords="[product specific keywords], datasheet, technical specifications, electronic component details"
                  />
                  <ProductDetail />
                </>
              } 
            />
            <Route 
              path="/solutions" 
              element={
                <>
                  <SEOMeta 
                    title="Industry Solutions & Applications | ElectroTech Solutions"
                    description="Discover electronic solutions for industrial automation, automotive, consumer electronics, and medical devices. Custom design services available."
                    keywords="industry solutions, industrial automation, automotive electronics, consumer electronics, medical devices, custom electronic solutions"
                  />
                  <Solutions />
                </>
              } 
            />
            <Route 
              path="/about" 
              element={
                <>
                  <SEOMeta 
                    title="About ElectroTech Solutions - 25+ Years Electronic Components Experience"
                    description="Learn about ElectroTech Solutions, a trusted partner for global OEM/ODM customers with 25+ years experience in electronic component distribution and custom solutions."
                    keywords="about electrotech solutions, electronic component distributor, OEM ODM partner, company history, global electronics supplier"
                  />
                  <About />
                </>
              } 
            />
            <Route 
              path="/news" 
              element={
                <>
                  <SEOMeta 
                    title="Electronics Industry News & Updates | ElectroTech Solutions"
                    description="Stay updated with latest electronics industry news, product launches, partnerships, and insights from ElectroTech Solutions."
                    keywords="electronics news, product launches, industry insights, company updates, technology trends, electronic components news"
                  />
                  <News />
                </>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <>
                  <SEOMeta 
                    title="Contact ElectroTech Solutions - Global Electronic Components Supplier"
                    description="Contact ElectroTech Solutions for electronic component inquiries, technical support, and quotes. Global offices in North America, Europe, and Asia Pacific."
                    keywords="contact electrotech solutions, electronic components quote, technical support, global offices, OEM ODM inquiries"
                  />
                  <Contact />
                </>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;