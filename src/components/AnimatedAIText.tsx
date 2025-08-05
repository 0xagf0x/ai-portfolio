'use client';

import { useEffect, useState } from 'react';

interface AnimatedAITextProps {
  className?: string;
}

export default function AnimatedAIText({ className = "" }: AnimatedAITextProps) {
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle(prev => prev + 3);
    }, 30); // Update every 30ms for faster animation

    return () => clearInterval(interval);
  }, []);

  // Create a shifting color palette
  const getGradientColors = (angle: number) => {
    const time = (angle % 360) / 360;
    
    // Primary colors that will shift
    const colors = [
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 147, g: 51, b: 234 },   // Purple  
      { r: 236, g: 72, b: 153 },   // Pink
      { r: 239, g: 68, b: 68 },    // Red
      { r: 245, g: 158, b: 11 },   // Orange
      { r: 34, g: 197, b: 94 },    // Green
      { r: 6, g: 182, b: 212 },    // Cyan
    ];

    // Interpolate between colors
    const colorIndex = time * (colors.length - 1);
    const index = Math.floor(colorIndex);
    const fraction = colorIndex - index;
    
    const color1 = colors[index];
    const color2 = colors[(index + 1) % colors.length];
    
    const r1 = Math.round(color1.r + (color2.r - color1.r) * fraction);
    const g1 = Math.round(color1.g + (color2.g - color1.g) * fraction);
    const b1 = Math.round(color1.b + (color2.b - color1.b) * fraction);
    
    // Second color (offset for gradient)
    const offsetIndex = (index + 2) % colors.length;
    const color3 = colors[offsetIndex];
    const color4 = colors[(offsetIndex + 1) % colors.length];
    
    const r2 = Math.round(color3.r + (color4.r - color3.r) * fraction);
    const g2 = Math.round(color3.g + (color4.g - color3.g) * fraction);
    const b2 = Math.round(color3.b + (color4.b - color3.b) * fraction);

    return [`rgb(${r1}, ${g1}, ${b1})`, `rgb(${r2}, ${g2}, ${b2})`];
  };

  const [color1, color2] = getGradientColors(gradientAngle);
  const normalizedAngle = gradientAngle % 360;

  return (
    <span
      className={`bg-gradient-to-r from-current to-current bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(${normalizedAngle}deg, ${color1}, ${color2})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      AI
    </span>
  );
}