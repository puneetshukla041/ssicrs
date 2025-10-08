import React from 'react';

// Main component for the Cookie Policy page
const CookiesPage: React.FC = () => {
  const lastUpdated = '1 Oct 2025'; // Placeholder date

  const PRIMARY_COLOR = 'text-amber-900'; // Deep, warm brown/maroon for headings
  const LIGHT_BORDER = 'border-amber-200';
  const DARK_BORDER = 'border-amber-900';
  const BODY_TEXT_COLOR = 'text-stone-800';
  const LINK_COLOR = 'text-amber-700';

  const PolicySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
      <h2 className={`text-2xl font-semibold mb-4 ${PRIMARY_COLOR} border-b ${LIGHT_BORDER} pb-2 md:text-3xl`}>
        {title}
      </h2>
      <div className={`${BODY_TEXT_COLOR} leading-relaxed space-y-4`}>
        {children}
      </div>
    </div>
  );

  return (
    // Background color set to #FBFAF2, and top padding increased to pt-20
    <div
  className="min-h-screen pt-28 pb-12 px-4 sm:px-8 md:px-12 font-sans"
  style={{ backgroundColor: "#FBFAF2" }}
>

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className={`flex justify-between items-center mb-10 pb-2 border-b-2 ${DARK_BORDER}`}>
<h2
  className="text-3xl sm:text-4xl lg:text-4xl text-center lg:text-left leading-snug mb-6"
  style={{
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#A67950",
    whiteSpace: "pre-line",
  }}
>
  Cookies
</h2>
          <p className="text-xs text-stone-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* 1. Cookie Policy */}
        <PolicySection title="Cookie Policy">
          <p>
            We use cookies and similar technologies to run our site, understand how it's used, and improve your experience with SSICRS programs and resources. You can manage your preferences at any time in the **Cookie Settings**.
          </p>
        </PolicySection>

        {/* 2. How we use cookies */}
        <PolicySection title="How we use cookies">
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>
              Operate the site: security, load balancing, session management.
            </li>
            <li>
              Improve performance: analytics to see what content is helpful.
            </li>
            <li>
              Enhance experience: remember preferences (e.g., language, forms).
            </li>
            <li>
              Reach and relevance (optional): show SSICRS updates more effectively.
            </li>
          </ul>
        </PolicySection>

        {/* 3. Types of cookies we use */}
        <PolicySection title="Types of cookies we use">
          <ul className="list-disc pl-5 space-y-3 text-base">
            <li>
              Strictly Necessary (always active): Required for core functionality (security, forms, session).
            </li>
            <li>
              Performance/Analytics: Help us understand usage to improve pages and navigation.
            </li>
            <li>
              Functionality: Remember choices such as language or region.
            </li>
            <li>
              Advertising/Targeting (optional): Measure campaign effectiveness; only set with consent.
            </li>
            <li>
              Third-Party: Set by service providers (e.g., analytics, video players, form tools).
            </li>
          </ul>
        </PolicySection>

        {/* 4. Managing your preferences */}
        <PolicySection title="Managing your preferences">
          <p>
            You control how non-essential cookies are used.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-base">
            <li>
              Cookie Settings Panel: Adjust categories anytime. <button className={`${LINK_COLOR} hover:text-amber-900 font-medium underline focus:outline-none`}>[Open Cookie Settings]</button>
            </li>
            <li>
              Browser controls: Most browsers let you block or delete cookies. See help pages for Chrome, Safari, Edge, or Firefox.
            </li>
            <li>
              Do Not Track: We honor your selections made in the Cookie Settings; browser DNT signals may not be recognized by all services.
            </li>
          </ul>
        </PolicySection>

        {/* 5. Legal bases & region notes */}
        <PolicySection title="Legal bases & region notes">
          <p>
            Where required, we place non-essential cookies only with your consent. For essential cookies, our legal basis is legitimate interests in running a secure, functional website. If you are in the EEA/UK, you'll see a consent banner before any non-essential cookies load.
          </p>
        </PolicySection>

        {/* 6. Changes to this notice */}
        <PolicySection title="Changes to this notice">
          <p>
            We may update this page to reflect new cookies or providers. Significant changes will be highlighted in the banner or on this page with a new "Last updated" date.
          </p>
        </PolicySection>
        
      </div>
    </div>
  );
};

export default CookiesPage;
