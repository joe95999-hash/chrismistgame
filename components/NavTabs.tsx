import React, { useRef, useEffect } from 'react';
import { THEME, TABS } from '../constants';

interface NavTabsProps {
  currentTab: number;
  onSwitch: (index: number) => void;
}

const NavTabs: React.FC<NavTabsProps> = ({ currentTab, onSwitch }) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
        // Simple scroll into view logic if needed, though simple CSS overflow handles most
        activeTabRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentTab]);

  return (
    <div ref={tabsRef} className="flex bg-[#eee] overflow-x-auto no-scrollbar">
      {TABS.map((tab, index) => {
        const isActive = currentTab === index;
        return (
          <div
            key={index}
            ref={isActive ? activeTabRef : null}
            onClick={() => onSwitch(index)}
            className={`
              flex-1 py-[15px] px-[10px] text-center cursor-pointer font-bold transition-all duration-300 whitespace-nowrap text-[0.9rem] border-b-[3px]
              ${isActive ? 'bg-[#F8F9FA] border-b-[3px]' : 'border-transparent'}
            `}
            style={{
              color: isActive ? THEME.red : THEME.green,
              borderColor: isActive ? THEME.red : 'transparent'
            }}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default NavTabs;