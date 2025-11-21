import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { CareerType, ResultData } from '../types';
import { RESULTS } from '../data/questions';
import { Trophy, RefreshCw, ArrowRight, BookOpen } from 'lucide-react';

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<ResultData | null>(null);

  useEffect(() => {
    if (!location.state?.answers) {
      navigate('/quiz');
      return;
    }

    const answers = location.state.answers as CareerType[];
    
    // Calculate the mode (most frequent answer)
    const counts: Record<string, number> = {};
    let maxCount = 0;
    let winner: CareerType = 'ADMINISTRATIVA'; // Default

    for (const type of answers) {
      counts[type] = (counts[type] || 0) + 1;
      if (counts[type] > maxCount) {
        maxCount = counts[type];
        winner = type;
      }
    }

    setResult(RESULTS[winner]);
  }, [location, navigate]);

  if (!result) return null;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-center animate-in fade-in duration-700">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-100 text-green-600 mb-6 ring-8 ring-green-50">
          <Trophy size={48} />
        </div>

        <h2 className="text-lg font-medium text-slate-500 uppercase tracking-wider mb-2">Seu perfil ideal é</h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">{result.title}</h1>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-left mb-10">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="text-blue-500" size={20} />
            Sobre este perfil
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-8 border-b border-slate-100 pb-8">
            {result.description}
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">Sugestões de Concursos:</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {result.careers.map((career, idx) => (
              <div key={idx} className="flex items-center p-3 rounded-lg bg-slate-50 text-slate-700 font-medium">
                <div className="h-2 w-2 rounded-full bg-blue-500 mr-3" />
                {career}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/quiz')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            <RefreshCw size={18} />
            Refazer Teste
          </button>
          
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105"
          >
            Ver Cursos Recomendados
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Result;