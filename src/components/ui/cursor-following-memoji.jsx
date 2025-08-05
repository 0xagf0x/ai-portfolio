'use client';

import { useRef, useEffect } from 'react';

const CursorFollowingMemoji = ({ 
  imageUrl = "/landing-memojis.png",
  className = "relative z-10 "
}) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!imageRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate mouse position relative to container
      const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
      
      // Apply 3D transforms
      const rotateY = x * 20; // Max 20 degrees rotation
      const rotateX = -y * 15; // Max 15 degrees rotation
      const translateZ = Math.abs(x) * 10 + Math.abs(y) * 10; // Depth effect
      
      imageRef.current.style.transform = `
        perspective(1000px)
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
        translateZ(${translateZ}px)
        scale(${1 + Math.abs(x) * 0.05})
        translateY(3.5rem)
        scale(2)
      `;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      
      // Return to neutral position
      imageRef.current.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0px)
        scale(1)
        translateY(3.5rem)
        scale(2)
      `;
    };

    // Add event listeners to document for global tracking
    document.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    const currentContainer = containerRef.current;

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      currentContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Cursor-following memoji"
        width={2000}
        height={2000}
        className="w-full h-full object-cover transition-transform duration-150 ease-out translate-y-14 scale-[1.2]"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default CursorFollowingMemoji;