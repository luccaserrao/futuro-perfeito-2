import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowRight, CheckCircle2, BrainCircuit, Target } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Teste Vocacional 2024
        </div>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
          Descubra qual carreira pública <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            combina com você
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-600 mb-10">
          Não perca anos estudando para o concurso errado. Faça nosso teste gratuito e descubra se você tem perfil para carreiras Policiais, Fiscais, Administrativas ou de Tribunais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Link 
            to="/quiz" 
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Iniciar Teste Grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 text-left w-full max-w-4xl">
          <FeatureCard 
            icon={<BrainCircuit className="h-6 w-6 text-blue-600" />}
            title="Análise de Perfil"
            description="Cruzamos seus interesses e habilidades com as exigências reais de cada cargo público."
          />
          <FeatureCard 
            icon={<Target className="h-6 w-6 text-purple-600" />}
            title="Direcionamento"
            description="Pare de atirar para todo lado. Foque na área que trará sua aprovação mais rápido."
          />
          <FeatureCard 
            icon={<CheckCircle2 className="h-6 w-6 text-green-600" />}
            title="100% Gratuito"
            description="Resultado imediato sem cadastro obrigatório de cartão de crédito."
          />
        </div>
      </div>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
    <div className="mb-4 inline-block rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm leading-relaxed text-slate-500">{description}</p>
  </div>
);

export default Home;