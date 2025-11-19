import { useState } from 'react';

function AppIcons({ items }) {
  
  return ( 
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-24 h-24 p-3 rounded-2xl bg-sky-200/30 shadow-lg 
          text-center text-white flex flex-col items-center justify-between cursor-pointer hover:bg-sky-200/40 
          hover:scale-105 transition-all duration-300"
          onClick={item.onClick}
        >
          <div className="flex-1 flex items-center justify-center">{item.icon}</div>
          <p className="text-md">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default AppIcons;