import React, { useState, useEffect, useRef, useCallback } from "react";

// --- Image Paths ---
const IMAGE_PATHS = [
  "/Images/aboutpage/section4/image1.png",
  "/Images/aboutpage/section4/image2.png",
  "/Images/aboutpage/section4/image3.png",
  "/Images/aboutpage/section4/image4.png",
  "/Images/aboutpage/section4/image5.png",
];

// Constants for effect control
const SCROLL_DURATION_STEPS = IMAGE_PATHS.length; // 5 steps for 5 images
// The wrapper height is set to 500vh (5x the viewport height) to provide a large, smooth scroll range for the animation.
const WRAPPER_HEIGHT_VH = SCROLL_DURATION_STEPS * 100;
const IMAGE_CONTAINER_HEIGHT_PX = 502; // Requested height for the image container

export default function BlankPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Function to handle the scroll logic and determine the current image index
  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const wrapperHeight = wrapperRef.current.offsetHeight;

    // 1. Calculate how far the user has scrolled since the wrapper became "sticky" (top hits 0)
    // The total scroll distance for the animation is (wrapperHeight - viewportHeight)
    const scrollDistance = -wrapperRect.top;

    // 2. Normalize the scroll distance to a progress value between 0 and 1
    const totalScrollRange = wrapperHeight - viewportHeight;
    
    // Safety check to prevent division by zero or errors before layout fully settles
    if (totalScrollRange <= 0) return;

    let progress = Math.min(1, Math.max(0, scrollDistance / totalScrollRange));

    // 3. Map the progress (0 to 1) to the image index (0 to 4)
    // This creates discrete steps for each image
    const newIndex = Math.min(
      SCROLL_DURATION_STEPS - 1, // Cap at index 4
      Math.floor(progress * SCROLL_DURATION_STEPS)
    );

    // 4. Update the state only if the index has changed
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [currentIndex]);

  // Set up the scroll listener
  useEffect(() => {
    // We use a small timeout to ensure all DOM calculations are stable before starting
    const timeoutId = setTimeout(() => {
        setIsReady(true);
        // Execute initial scroll calculation
        handleScroll();
    }, 100);

    if (isReady) {
        window.addEventListener('scroll', handleScroll);
    }

    return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, isReady]);


  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      
      {/* ---------------------------------------------------
        0. Introductory/Buffer Content (Pushes the animation down the page)
        The 150vh height ensures the user must scroll to reach the main effect.
        ---------------------------------------------------
      */}
      <div className="w-full h-[150vh] flex items-center justify-center border-b-4 border-dashed border-gray-300">
        <h2 className="text-3xl font-extrabold text-gray-800 p-8 rounded-xl shadow-lg bg-white/70 backdrop-blur-sm">
            Scroll Down to View the Image Sequence Section
        </h2>
      </div>

      {/* ---------------------------------------------------
        1. Scroll Trigger Area (The 'Freeze' Container)
        This large container defines the scroll distance (500vh) needed to cycle through all 5 images.
        ---------------------------------------------------
      */}
      <div 
        ref={wrapperRef} 
        className="relative" 
        style={{ height: `${WRAPPER_HEIGHT_VH}vh` }}
      >
        {/* ---------------------------------------------------
          2. Sticky Content (The container that freezes on screen)
          It uses sticky and top-0 to pin itself to the viewport for the duration of the scroll area.
          It is centered both horizontally and vertically (flex justify-center items-center)
          ---------------------------------------------------
        */}
        <div className="sticky top-0 h-screen flex justify-center items-center p-4">
          
          {/* ---------------------------------------------------
            3. Image Display Container
            This is the requested 1380px width, 502px height container with curved corners.
            It is fully responsive, using max-w-[...] and mx-auto.
            ---------------------------------------------------
          */}
          <div 
            className="relative w-full mx-auto max-w-[1380px] flex-shrink-0 bg-gray-500 shadow-2xl overflow-hidden" 
            style={{ 
              height: `${IMAGE_CONTAINER_HEIGHT_PX}px`, 
              borderRadius: '30px',
              // Use backdrop-filter for a cool glass effect on modern browsers if content is partially visible
              backdropFilter: 'blur(10px)', 
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

            {/* ---------------------------------------------------
              4. Image Cross-Fade Implementation
              All images are rendered absolutely positioned. Opacity is controlled by the currentIndex state.
              The 'transition' property ensures the smoothest cross-fade between images.
              ---------------------------------------------------
            */}
            {isReady && IMAGE_PATHS.map((path, index) => (
              <img
                key={index} // Key is based on index, not current state, which keeps the element stable
                src={path}
                alt={`Scroll-based section image ${index + 1}`}
                // Use object-cover to ensure images fill the container without distortion
                className={`absolute w-full h-full object-cover`}
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Placeholder fallback in case the image path is broken
                    target.src = `https://placehold.co/1380x502/3c3c3c/ffffff?text=Image+${index + 1}+Placeholder`;
                }}
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transition: 'opacity 0.75s ease-in-out', // Smooth 0.75s transition
                  transform: currentIndex === index ? 'scale(1.0)' : 'scale(1.02)', // Subtle scale for depth
                }}
              />
            ))}
            
            {/* Display current progress for debugging/confirmation */}
            <div className="absolute bottom-4 right-6 text-white text-lg font-bold p-2 bg-black/40 rounded-lg z-20">
                Image {currentIndex + 1} of {SCROLL_DURATION_STEPS}
            </div>

          </div>
        </div>
      </div>
      

    </div>
  );
}
