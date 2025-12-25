import React from 'react';
import { IconHat } from './Icons';
import { THEME } from '../constants';

const Header: React.FC = () => {
  return (
    <div 
      className="relative p-5 text-center border-b-[5px] border-dashed border-[#F8F9FA]"
      style={{ backgroundColor: THEME.red, color: THEME.gold }}
    >
      <div className="absolute top-[-15px] left-[10px] w-[60px] h-[60px] -rotate-[15deg] drop-shadow-lg">
        <IconHat className="w-full h-full" />
      </div>
      <h1 className="m-0 text-[1.8rem] font-bold drop-shadow-[2px_2px_0px_#000]">
        🎄 系籃聖誕大戰 🏀
      </h1>
      <div className="text-[0.8rem] opacity-80 mt-1">Interactive Rulebook</div>
    </div>
  );
};

export default Header;