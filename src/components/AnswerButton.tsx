import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronRight } from 'lucide-react';

interface AnswerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  selected?: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ children, selected, className, ...props }) => {
  return (
    <button
      className={twMerge(
        clsx(
          "group relative flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all duration-200 hover:shadow-md active:scale-[0.99]",
          selected 
            ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500" 
            : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
        ),
        className
      )}
      {...props}
    >
      <span className={clsx(
        "text-lg font-medium",
        selected ? "text-blue-800" : "text-slate-700"
      )}>
        {children}
      </span>
      <ChevronRight 
        className={clsx(
          "ml-4 h-5 w-5 transition-transform group-hover:translate-x-1",
          selected ? "text-blue-600" : "text-slate-300 group-hover:text-blue-400"
        )} 
      />
    </button>
  );
};

export default AnswerButton;