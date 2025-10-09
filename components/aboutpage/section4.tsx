import React, { useState, useEffect, useRef } from 'react';

// --- Configuration ---
const IMAGE_URLS = [
    '/Images/aboutpage/section4/image1.png',
    '/Images/aboutpage/section4/image2.png',
    '/Images/aboutpage/section4/image3.png',
    '/Images/aboutpage/section4/image4.png',
    '/Images/aboutpage/section4/image5.png',
];

// The total scroll duration for the image sequence, measured in viewport heights (VH).
const ANIMATION_HEIGHT_VH = 400;
// --- End Configuration ---

const NUM_IMAGES = IMAGE_URLS.length;

// --- Image Size Configuration ---
const MAX_IMAGE_WIDTH_PX = '1500px';
const MAX_IMAGE_HEIGHT_PX = '550px';
// --------------------------------

const App = () => {
    const [imageIndex, setImageIndex] = useState(0);
    // Use HTMLDivElement type for better safety if this were a .tsx file
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null); 

    // Debounced scroll handler to prevent excessive re-renders
    useEffect(() => {
        let animationFrameId: number | null = null;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            // Check for ref
            if (!sectionRef.current) return;

            const currentScrollY = window.scrollY;
            
            // Optimization
            if (currentScrollY === lastScrollY && animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
                return;
            }
            lastScrollY = currentScrollY;

            // Start of the section relative to the document
            const sectionTop = sectionRef.current.offsetTop;
            
            // Total pixel height of the scrollable "spacer" that drives the animation
            const totalScrollHeight = (ANIMATION_HEIGHT_VH / 100) * window.innerHeight;

            // Current scroll position within the sticky phase
            let scrollProgress = currentScrollY - sectionTop;

            // Ensure the scroll progress is clamped
            scrollProgress = Math.max(0, Math.min(scrollProgress, totalScrollHeight));

            // Calculate image index
            const newIndex = Math.floor((scrollProgress / totalScrollHeight) * (NUM_IMAGES - 0.001)); 

            // Clamp index
            const clampedIndex = Math.max(0, Math.min(NUM_IMAGES - 1, newIndex));

            // Update state
            if (clampedIndex !== imageIndex) {
                setImageIndex(clampedIndex);
            }
        };

        const onScroll = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            animationFrameId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll);
        // Clean up
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [imageIndex]); 

    // Calculate responsive padding: 
    const paddingClasses = 'px-4 sm:px-12 lg:px-24 xl:px-24'; 
    // Custom left padding for the heading at xl breakpoint.
    const headingLeftPaddingClass = 'xl:pl-[210px]'; 

    return (
        <div className="min-h-screen">
            
            {/* 1. Outer Container: The Scroll Spacer (Ref and Height for Animation) */}
            <div 
                ref={sectionRef} 
                className={`relative w-full ${paddingClasses}`} 
                style={{ 
                    minHeight: `${ANIMATION_HEIGHT_VH}vh`, // Provides the scroll "duration"
                    backgroundColor: '#FBFAF2' // The required background color
                }}
            >
{/* Custom Heading Section: NON-STICKY */}
<div 
    ref={headerRef}
    className={`z-30 pt-16 pb-6 ${headingLeftPaddingClass}`} 
>
    <h2
        className="text-3xl sm:text-4xl lg:text-4xl text-center lg:text-left leading-snug"
        style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontStyle: "normal",
            color: "#A67950",
            whiteSpace: "pre-line",
            marginTop: "50px",
            marginLeft: "-170px",
        }}
    >
        Why Choose SSICRS
    </h2>
</div>


                {/* 2. Sticky Content Container (Image Card): Locks lower on the screen */}
                <div 
                    // 🚀 FIX: Increased top-20 to top-32 to push the image container further down.
                    className="sticky top-32 h-screen flex items-center justify-center"
                >
                    <div className="w-full flex justify-center items-center">
                        <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300">
                            {IMAGE_URLS.map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Sequence Image ${index + 1}`}
                                    className={`
                                        object-cover object-center 
                                        transition-opacity duration-700 ease-in-out
                                        max-w-[1500px] w-full 
                                        aspect-[2.75/1] 
                                    `}
                                    style={{
                                        maxHeight: MAX_IMAGE_HEIGHT_PX,
                                        opacity: index === imageIndex ? 1 : 0,
                                        position: index === imageIndex ? 'relative' : 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: index === imageIndex ? 10 : 1, 
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.onerror = null; 
                                        e.currentTarget.src = `https://placehold.co/${MAX_IMAGE_WIDTH_PX.replace('px', '')}x${MAX_IMAGE_HEIGHT_PX.replace('px', '')}/ccc/000?text=Error:+Check+Path`;
                                    }}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            {/* The concluding "Sequence Finished" section was removed as requested. */}
        </div>
    );
}

export default App;