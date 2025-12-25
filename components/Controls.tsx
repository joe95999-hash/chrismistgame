import React from 'react';
import { THEME } from '../constants';

interface ControlsProps {
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const Controls: React.FC<ControlsProps> = ({ hasPrev, hasNext, onPrev, onNext }) => {
  return (
    <div className="flex justify-between p-[15px_20px] bg-[#eee]">
      <button
        onClick={onPrev}
        className={`
          py-[10px] px-[20px] border-none rounded-[20px] cursor-pointer font-bold transition-all duration-200
          ${hasPrev ? 'opacity-100 hover:opacity-90 hover:scale-105' : 'invisible opacity-0'}
        `}
        style={{ backgroundColor: '#ccc', color: '#333' }}
      >
        ❮ 上一條
      </button>
      
      <button
        onClick={onNext}
        className={`
          py-[10px] px-[20px] border-none rounded-[20px] cursor-pointer font-bold transition-all duration-200
          ${hasNext ? 'opacity-100 hover:opacity-90 hover:scale-105' : 'invisible opacity-0'}
        `}
        style={{ backgroundColor: THEME.green, color: 'white' }}
      >
        下一條 ❯
      </button>
    </div>
  );
};

export default Controls;