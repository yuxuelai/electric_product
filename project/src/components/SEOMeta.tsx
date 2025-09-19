import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOMeta: React.FC<SEOMetaProps> = ({ 
  title = 'ElectroTech Solutions - Premium Electronic Components for Global OEM/ODM',
  description = 'Leading supplier of high-quality electronic components for global OEM/ODM customers and distributors. Microcontrollers, power management, RF modules, and custom solutions.',
  keywords = 'electronic components, OEM, ODM, microcontrollers, power management, RF modules, industrial automation, automotive electronics',
  canonical 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/og-image.jpg" />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ElectroTech Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEOMeta;