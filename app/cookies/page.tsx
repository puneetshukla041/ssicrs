"use client";
import React from 'react';

// Cookie Banner Component
const CookieBanner: React.FC = () => {
  const BANNER_BG_COLOR = '#A67950'; // The requested background color
  const TEXT_COLOR = 'text-white';
  const BUTTON_BORDER_COLOR = 'border-white';
  const BUTTON_TEXT_COLOR = 'text-white';

  const handleCookieSettings = () => {
    // In a real application, this would open a modal for granular settings
    console.log('Open Cookie Settings modal...');
  };

  const handleAcceptAll = () => {
    // In a real application, this would set the necessary cookies and dismiss the banner
    console.log('Accepting all cookies...');
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 p-4 shadow-2xl transition-all duration-500 ease-in-out z-50 rounded-t-xl"
      style={{ backgroundColor: BANNER_BG_COLOR }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
        
        {/* Text Content */}
        <p className={`text-sm ${TEXT_COLOR} leading-relaxed text-center md:text-left`}>
          We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking "Accept All", you consent to the use of all the cookies. However, you may visit "Cookie Settings" to provide controlled consent.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 flex-shrink-0">
          <button
            onClick={handleCookieSettings}
            className={`px-6 py-3 text-sm font-medium rounded-xl border-2 ${BUTTON_BORDER_COLOR} ${BUTTON_TEXT_COLOR} hover:bg-white hover:text-amber-900 transition-colors duration-300 ease-in-out`}
          >
            Cookie Settings
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-3 text-sm font-medium rounded-xl border-2 border-white bg-white text-amber-900 hover:bg-opacity-90 transition-colors duration-300 ease-in-out"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};


// Main component for the Cookie Policy page
const CookiesPage: React.FC = () => {
  const lastUpdated = '1 Oct 2025'; // Placeholder date

  // Component to wrap sections for animated entry
  const PolicySection: React.FC<{ title: string; children: React.ReactNode; delay: number }> = ({ title, children, delay }) => (
    <div 
      className={`mb-8 opacity-0 transform translate-y-4 animate-fade-in-up`}
      style={{ animationDelay: `${delay * 100}ms`, animationFillMode: 'forwards', transition: 'all 0.5s ease-out' }}
    >
      {/* Policy Section Heading Styles */}
      <h2 
        className={`mb-4 transition-colors duration-300`}
        style={{
          color: '#401323',
          fontFamily: '"DM Serif Text", serif',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '100%',
        }}
      >
        {title}
      </h2>
      <div className={`text-stone-800 leading-relaxed space-y-4 transition-opacity duration-300`}>
        {children}
      </div>
    </div>
  );

  return (
    // Outer Container: Background color set to #FBFAF2
    <div className="min-h-screen pt-40 pb-24 px-4 sm:px-8 md:px-12 font-sans" style={{ backgroundColor: '#FBFAF2' }}>
      
      {/* Injecting keyframe styles and Google Font link */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out;
        }
      `}</style>
      
      {/* Policy Card Wrapper: Centered with max-w-4xl and white background (bg-white) */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
        
        {/* Header - Removed all bottom lines/borders */}
        <header className={`flex justify-between items-center mb-10 transition-all duration-500`}>
          {/* Main H1 Heading Styles */}
          <h1 
            style={{
              color: '#A67950',
              fontFamily: '"DM Serif Text", serif',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '100%',
            }}
          >
            Cookies
          </h1>
          <p className="text-xs text-stone-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* 1. Cookie Policy */}
        <PolicySection title="Cookie Policy" delay={1}>
          <p>
            We use cookies and similar technologies to run our site, understand how it's used, and improve your experience with SSICRS programs and resources. You can manage your preferences at any time in the **Cookie Settings**.
            These technologies include local storage, session storage, and web beacons, all used to enhance site functionality and measure performance across various devices and platforms.
          </p>
        </PolicySection>

        {/* 2. How we use cookies - EXPANDED */}
        <PolicySection title="How we use cookies" delay={2}>
          <ul className="list-disc pl-5 space-y-3 text-base">
            <li>
              Operate the site: security, load balancing, session management. We use essential cookies to identify you as a unique user across pages, prevent cross-site request forgery, and distribute traffic efficiently across our servers to ensure continuous service availability.
            </li>
            <li>
              Improve performance: analytics to see what content is helpful. We monitor which pages are viewed most often, the amount of time users spend on the site, and if any technical errors occur, allowing us to continuously optimize the user interface and content quality.
            </li>
            <li>
              Enhance experience: remember preferences (e.g., language, forms). This includes remembering your chosen text size, region, currency settings, and pre-filling forms with data you've previously entered, reducing friction on return visits.
            </li>
            <li>
              Reach and relevance (optional): show SSICRS updates more effectively. Based on your consent, we may use these to understand your interests and deliver personalized updates, product recommendations, or informational content that is most relevant to your specific needs.
            </li>
            <li>
              Customer support: track issues and communicate service status. We use cookies to quickly identify logged-in users who report issues and track the resolution process to provide timely and targeted support.
            </li>
            <li>
              A/B testing: evaluate new features and changes. Before deploying major changes, cookies help us test small user groups on different versions of a feature to measure impact on engagement and performance metrics.
            </li>
          </ul>
        </PolicySection>

        {/* 3. Types of cookies we use - EXPANDED */}
        <PolicySection title="Types of cookies we use" delay={3}>
          <ul className="list-disc pl-5 space-y-3 text-base">
            <li>
              Strictly Necessary (always active): Required for core functionality (security, forms, session). These cookies cannot be turned off in our systems as they are fundamental for safe navigation and service access, such as maintaining items in a shopping cart or securely logging you in.
            </li>
            <li>
              Performance/Analytics: Help us understand usage to improve pages and navigation. These cookies collect aggregated and anonymous data, such as visitor count and traffic sources, to evaluate and report on the overall performance of the website.
            </li>
            <li>
              Functionality: Remember choices such as language or region. These are used to provide enhanced, more personal features, like remembering your username and custom settings. They may be set by us or by third-party providers whose services we have added to our pages.
            </li>
            <li>
              Advertising/Targeting (optional): Measure campaign effectiveness; only set with consent. These are set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant ads on other sites.
            </li>
            <li>
              Third-Party: Set by service providers (e.g., analytics, video players, form tools). These cookies originate from a domain different from the website you are visiting (e.g., Google, YouTube, social media platforms) and are used to provide content or functionality from those third parties.
            </li>
            <li>
              Session Cookies: These are temporary and expire immediately after you close your browser. They are crucial for maintaining the state of your session during your visit.
            </li>
            <li>
              Persistent Cookies: These remain on your device for a set period or until you manually delete them. They help us recognize you as a returning visitor and remember your choices over time.
            </li>
          </ul>
        </PolicySection>

        {/* 4. Managing your preferences - EXPANDED */}
        <PolicySection title="Managing your preferences" delay={4}>
          <p>
            You control how non-essential cookies are used. This flexibility allows you to customize your privacy settings without impacting the site's necessary core functions.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-base">
            <li>
              Cookie Settings Panel: Adjust categories anytime. <button className={`text-amber-700 hover:text-amber-900 font-medium underline focus:outline-none transition-colors duration-200`}>[Open Cookie Settings]</button> This panel allows for granular control, giving you the power to enable or disable specific types of cookies beyond the strictly necessary ones.
            </li>
            <li>
              Browser controls: Most browsers let you block or delete cookies. See help pages for Chrome, Safari, Edge, or Firefox. Be aware that blocking all cookies, especially strictly necessary ones, may prevent certain parts of the site from working correctly.
            </li>
            <li>
              Do Not Track: We honor your selections made in the Cookie Settings; browser DNT signals may not be recognized by all services. While we respect DNT preferences, the effectiveness can vary depending on your browser and the specific third-party services integrated on our site.
            </li>
            <li>
              Mobile Device Settings: For mobile apps, your device's operating system (iOS or Android) typically offers settings to limit ad tracking and control the usage of identifiers for advertising purposes.
            </li>
          </ul>
        </PolicySection>

        {/* 5. Legal bases & region notes */}
        <PolicySection title="Legal bases & region notes" delay={5}>
          <p>
            Where required, we place non-essential cookies only with your consent. For essential cookies, our legal basis is legitimate interests in running a secure, functional website. If you are in the EEA/UK, you'll see a consent banner before any non-essential cookies load. The legal basis for processing data varies by cookie category and region.
          </p>
        </PolicySection>

        {/* 6. Changes to this notice */}
        <PolicySection title="Changes to this notice" delay={6}>
          <p>
            We may update this page to reflect new cookies or providers. Significant changes will be highlighted in the banner or on this page with a new "Last updated" date. We encourage users to review this policy periodically to stay informed about how we are using these technologies.
          </p>
        </PolicySection>
        
      </div>
      
      {/* ADDED: Fixed Cookie Consent Banner at the bottom */}
      <CookieBanner />
    </div>
  );
};

export default CookiesPage;
