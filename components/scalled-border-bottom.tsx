"use client";

import { useState, useEffect } from 'react';

interface ScallopedBorderProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  className?: string;
  baseScallopCount?: number;
}

export default function ScallopedBorderBottom({ 
  topColor, 
  bottomColor, 
  flip = false,
  className = "",
  baseScallopCount = 10,
}: ScallopedBorderProps) {
  const [scallopCount, setScallopCount] = useState(baseScallopCount);

  useEffect(() => {
    const updateScallopCount = () => {
      const width = window.innerWidth;
      
      if (width < 768) { // mobile
        setScallopCount(Math.max(8, baseScallopCount - 2));
      } else if (width < 1024) { // tablet
        setScallopCount(baseScallopCount);
      } else { // desktop
        setScallopCount(baseScallopCount + 8);
      }
    };

    updateScallopCount();
    window.addEventListener('resize', updateScallopCount);
    
    return () => window.removeEventListener('resize', updateScallopCount);
  }, [baseScallopCount]);

  const scallopWidth = 100 / scallopCount;
  const radius = scallopWidth / 2;
  const height = radius;
  
  return (
    <div className={`w-full ${className}`}>
      <svg 
        viewBox={`0 0 100 ${height}`} 
        preserveAspectRatio="none" 
        className="w-full h-auto"
        style={{ 
          transform: flip ? "rotate(180deg)" : "rotate(0deg)",
          display: "block"
        }}
      >
        <path
          d={`
            M 0,${height}
            ${Array.from({ length: scallopCount }, (_, i) => {
              const x = i * scallopWidth;
              const centerX = x + radius;
              return `
                L ${x},${height}
                A ${radius} ${radius} 0 0 0 ${centerX},0
                A ${radius} ${radius} 0 0 0 ${x + scallopWidth},${height}
              `;
            }).join(" ")}
            L 100,${height}
            L 100,0
            L 0,0
            Z
          `}
          fill={topColor}
        />
      </svg>
    </div>
  );
}