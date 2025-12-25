import React, { useState } from 'react';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import ContentArea from './components/ContentArea';
import Controls from './components/Controls';
import { TABS, THEME } from './constants';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    if (currentTab < TABS.length - 1) {
      setCurrentTab(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentTab > 0) {
      setCurrentTab(prev => prev - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4">
      {/* 
        NOTE: Global body styles for the background snow animation are handled in index.html styles.
        This container centers the card on the screen.
      */}
      
      <div 
        className="w-[90%] max-w-[600px] bg-[#F8F9FA] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden relative border-[5px]"
        style={{ borderColor: THEME.red }}
      >
        <Header />
        
        <NavTabs 
            currentTab={currentTab} 
            onSwitch={setCurrentTab} 
        />
        
        <ContentArea currentTab={currentTab} />
        
        <Controls 
            hasPrev={currentTab > 0} 
            hasNext={currentTab < TABS.length - 1} 
            onPrev={handlePrev} 
            onNext={handleNext} 
        />
      </div>
      
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;