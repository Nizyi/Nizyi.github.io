import { useState } from 'react';

function AppIcons({ items, variant = 'desktop' }) {
  // Variant peut être 'desktop' ou 'folder'
  const gridCols = variant === 'desktop' ? 'grid-cols-3' : 'grid-cols-4';
  const gap = variant === 'desktop' ? 'gap-4' : 'gap-3';
  const bgColor = variant === 'desktop' 
    ? 'bg-sky-200/30 hover:bg-sky-200/40' 
    : 'bg-sky-200/70 hover:bg-sky-200/80'; // Plus opaque dans les fenêtres
  
  return ( 
    <div className={`grid ${gridCols} ${gap} p-4`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`w-24 h-24 p-3 rounded-2xl ${bgColor} shadow-lg 
          text-center text-white flex flex-col items-center justify-between cursor-pointer 
          hover:scale-105 transition-all duration-300`}
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