// Security and SEO headers component
export const SecurityMetaTags = () => (
  <>
    {/* Security Headers */}
    <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
    <meta httpEquiv="X-Frame-Options" content="DENY" />
    <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
    
    {/* Content Security Policy */}
    <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self';" />
    
    {/* Additional Security */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
    
    {/* Open Graph for better social sharing */}
    <meta property="og:site_name" content="Quantsmith Ventures" />
    <meta property="og:locale" content="en_MY" />
    
    {/* Twitter Card */}
    <meta name="twitter:creator" content="@quantsmith" />
    
    {/* Business Information */}
    <meta name="geo.region" content="MY-10" />
    <meta name="geo.placename" content="Shah Alam, Selangor, Malaysia" />
    <meta name="geo.position" content="3.0738;101.5183" />
  </>
);

