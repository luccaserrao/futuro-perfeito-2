import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <GraduationCap size={20} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-800">O Concurso Perfeito</span>
          </Link>
          
          <Link 
            to="/quiz" 
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 sm:inline-block"
          >
            Começar Teste
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full mx-auto max-w-5xl px-6 py-12 md:py-16">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} O Concurso Perfeito. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;