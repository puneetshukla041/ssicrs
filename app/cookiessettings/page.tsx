"use client";
import React, { useState } from 'react';

// Define the structure for a cookie category
interface CookieCategory {
  id: string;
  title: string;
  description: string;
  isMandatory: boolean;
  defaultState: boolean;
}

// Data defining the four cookie categories shown in the image
const cookieCategories: CookieCategory[] = [
  {
    id: 'mandatory',
    title: 'Always active',
    description: 'These cookies are essential for the website to function properly. They ensure basic operations like security, session management, and accessibility.',
    isMandatory: true,
    defaultState: true,
  },
  {
    id: 'performance',
    title: 'Performance & Analytics Cookies',
    description: 'Help us improve our website by collecting anonymous data on how visitors use it. These cookies allow us to track which pages are popular and how users move around the site.',
    isMandatory: false,
    defaultState: false,
  },
  {
    id: 'functionality',
    title: 'Functionality Cookies',
    description: 'Remember your preferences, such as language, location, or previous selections, to provide a more personalized experience.',
    isMandatory: false,
    defaultState: false,
  },
  {
    id: 'advertising',
    title: 'Advertising & Targeting Cookies',
    description: 'Used to deliver relevant updates and measure the effectiveness of our communications. We only use these with your consent.',
    isMandatory: false,
    defaultState: false,
  },
];

// Reusable Switch component for toggling settings
const ToggleSwitch: React.FC<{ category: CookieCategory, isEnabled: boolean, onToggle: () => void }> = ({ category, isEnabled, onToggle }) => {
  const switchClass = category.isMandatory
    ? 'bg-green-500' // Mandatory/Always Enabled (Green)
    : isEnabled
      ? 'bg-amber-900' // Enabled (Dark Amber)
      : 'bg-stone-300'; // Disabled (Light Grey)

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-stone-500 min-w-[70px] text-right">
        {category.isMandatory ? 'Always Enabled' : (isEnabled ? 'Enabled' : 'Disabled')}
      </span>
      <button
        onClick={category.isMandatory ? undefined : onToggle}
        className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${switchClass} ${category.isMandatory ? 'cursor-default' : ''}`}
        aria-checked={isEnabled}
        role="switch"
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ease-in-out duration-200 ${isEnabled ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
};

// Component for an individual cookie setting row
const CookieSettingRow: React.FC<{ category: CookieCategory, isEnabled: boolean, onToggle: () => void }> = ({ category, isEnabled, onToggle }) => {
  return (
    <div className={`p-6 sm:p-8 rounded-xl transition-all duration-300 ${category.isMandatory ? 'bg-stone-50' : 'bg-white hover:bg-stone-50'}`}>
      <div className="flex justify-between items-start">
        
        {/* Title and Description */}
        <div className="pr-4 max-w-[calc(100%-120px)]">
          <h3 className="text-lg font-bold mb-1" style={{ color: '#401323', fontFamily: '"DM Serif Text", serif' }}>
            {category.title}
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            {category.description}
          </p>
        </div>
        
        {/* Toggle */}
        <div className="flex-shrink-0">
          <ToggleSwitch category={category} isEnabled={isEnabled} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
};


// Main Cookie Settings Page Component
const CookiesSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState(() => {
    // Initialize state from default states
    return cookieCategories.reduce((acc, cat) => {
      acc[cat.id] = cat.defaultState;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const handleToggle = (id: string) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [id]: !prevSettings[id],
    }));
  };
  
  const handleSaveAndAccept = () => {
    // In a real app, this would save the 'settings' object to the server/cookie
    console.log('Settings Saved:', settings);
    // Redirect back to the main page or close modal
    window.location.href = '/app/cookies.tsx';
  };

  return (
    // Outer Container: Background color set to #FBFAF2
    <div className="min-h-screen pt-40 pb-24 px-4 sm:px-8 md:px-12 font-sans" style={{ backgroundColor: '#FBFAF2' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');
      `}</style>
      
      {/* Settings Card Wrapper: Centered with max-w-4xl and a light border/shadow */}
      <div className="max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: '#FBFAF2' }}>
        
        {/* Header (Mimics previous design) */}
        <header className="p-8 sm:p-12 pb-0">
          <h1 
            style={{
              color: '#A67950',
              fontFamily: '"DM Serif Text", serif',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '100%',
            }}
            className="mb-8"
          >
            Cookie Settings
          </h1>
        </header>

        {/* Settings List Container */}
        <div className="flex flex-col space-y-3 p-8 sm:p-12 pt-4">
          {cookieCategories.map(category => (
            <div key={category.id} className="rounded-xl shadow-md border border-stone-200">
              <CookieSettingRow
                category={category}
                isEnabled={settings[category.id] || category.isMandatory}
                onToggle={() => handleToggle(category.id)}
              />
            </div>
          ))}
        </div>
        
        {/* Save & Accept Button */}
        <div className="flex justify-end p-8 sm:p-12 pt-0">
          <button
            onClick={handleSaveAndAccept}
            className="px-8 py-4 text-lg font-medium rounded-xl transition-colors duration-300 ease-in-out shadow-lg"
            style={{ 
              backgroundColor: '#A67950', 
              color: 'white',
              boxShadow: '0 4px 6px -1px rgba(166, 121, 80, 0.4), 0 2px 4px -2px rgba(166, 121, 80, 0.4)'
            }}
          >
            Save & Accept
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookiesSettingsPage;
