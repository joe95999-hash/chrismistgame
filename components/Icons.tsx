import React from 'react';
import { THEME } from '../constants';

export const IconBall: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 40 40" className={className} width="40" height="40">
    <circle cx="20" cy="20" r="18" fill={THEME.orange} stroke="#333" strokeWidth="2"/>
    <path d="M2,20 Q20,20 38,20 M20,2 Q20,20 20,38 M6,10 Q20,20 34,10 M6,30 Q20,20 34,30" stroke="#333" strokeWidth="2" fill="none"/>
  </svg>
);

export const IconHat: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 40 40" className={className} width="40" height="40">
    <path d="M5,35 L35,35 L20,5 Z" fill={THEME.red}/>
    <circle cx="20" cy="5" r="5" fill="white"/>
    <rect x="5" y="32" width="30" height="6" fill="white" rx="3"/>
  </svg>
);

export const IconTrophy: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 40 40" className={className} width="40" height="40">
    <path d="M10,10 L30,10 L25,30 L15,30 Z" fill={THEME.gold} stroke="#B8860B" strokeWidth="2"/>
    <circle cx="20" cy="10" r="15" fill="none" stroke={THEME.gold} strokeWidth="2"/>
    <rect x="15" y="30" width="10" height="5" fill="#333"/>
  </svg>
);

export const IconCourt: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 40 40" className={className} width="40" height="40">
    <rect x="5" y="5" width="30" height="30" fill="none" stroke="black" strokeWidth="2"/>
    <line x1="5" y1="12" x2="35" y2="12" stroke="black"/>
    <line x1="12" y1="12" x2="12" y2="35" stroke="black"/>
  </svg>
);