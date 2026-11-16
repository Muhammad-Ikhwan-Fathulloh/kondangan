import React from 'react';

/**
 * Subtle repeating Batik Kawung geometric SVG pattern for Nusantara section backdrops.
 * Marked aria-hidden so screen readers skip decorative ornaments.
 */
export const BatikKawungPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.06,
}) => (
  <svg
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="batik-kawung"
        width="64"
        height="64"
        patternUnits="userSpaceOnUse"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity={opacity}>
          <ellipse cx="32" cy="14" rx="8" ry="12" />
          <ellipse cx="32" cy="50" rx="8" ry="12" />
          <ellipse cx="14" cy="32" rx="12" ry="8" />
          <ellipse cx="50" cy="32" rx="12" ry="8" />
          <circle cx="32" cy="32" r="3" fill="currentColor" />
          <circle cx="0" cy="0" r="2" fill="currentColor" />
          <circle cx="64" cy="0" r="2" fill="currentColor" />
          <circle cx="0" cy="64" r="2" fill="currentColor" />
          <circle cx="64" cy="64" r="2" fill="currentColor" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#batik-kawung)" />
  </svg>
);

/**
 * Diagonal Batik Parang inspired linear wave SVG pattern.
 */
export const BatikParangPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.05,
}) => (
  <svg
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="batik-parang"
        width="56"
        height="56"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(-28)"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity={opacity}>
          <path d="M0 14 C14 4, 28 24, 42 14 C49 9, 53 11, 56 14" />
          <path d="M0 42 C14 32, 28 52, 42 42 C49 37, 53 39, 56 42" />
          <circle cx="21" cy="28" r="2.2" fill="currentColor" />
          <circle cx="49" cy="28" r="2.2" fill="currentColor" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#batik-parang)" />
  </svg>
);

/**
 * Stylized Janur (woven young coconut leaf) decorative accent sprig.
 */
export const JanurSprig: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 120 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M8 38 C32 34, 62 22, 110 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M28 33 C26 20, 34 12, 44 14 C38 22, 34 28, 28 33 Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M52 26 C51 14, 59 7, 68 9 C62 17, 58 22, 52 26 Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M76 19 C77 9, 85 4, 94 6 C88 13, 82 17, 76 19 Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M42 30 C48 39, 58 41, 66 35 C58 32, 50 30, 42 30 Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M68 22 C74 30, 84 32, 91 26 C83 23, 75 21, 68 22 Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

/**
 * Clean architectural brand emblem inspired by a woven janur diamond (ketupat / wajik motif).
 */
export const KondanganMark: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="14"
      y="2.5"
      width="16.2"
      height="16.2"
      rx="3"
      transform="rotate(45 14 2.5)"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14 7.5L20.5 14L14 20.5L7.5 14L14 7.5Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <circle cx="14" cy="14" r="2.2" fill="currentColor" />
  </svg>
);
