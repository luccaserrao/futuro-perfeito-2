import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.round(((current + 1) / total) * 100);

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
        <span>Questão {current + 1} de {total}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;