import React from 'react';

const AttendSmartLogo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const iconSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`${iconSize} ${className} relative`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle with gradient effect */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0E7FF" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="url(#logoGradient)" 
        />
        
        {/* Inner shape - abstract representation of attendance/checkmark */}
        <path 
          d="M30 50 L45 65 L70 35" 
          stroke="url(#innerGradient)" 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Dot representing a student */}
        <circle 
          cx="50" 
          cy="25" 
          r="5" 
          fill="url(#innerGradient)" 
        />
      </svg>
    </div>
  );
};

export default AttendSmartLogo;