import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import AnswerButton from '../components/AnswerButton';
import { QUESTIONS } from '../data/questions';
import { CareerType } from '../types';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<CareerType[]>([]);
  
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  const handleAnswer = (type: CareerType) => {
    const newAnswers = [...answers, type];
    
    if (isLastQuestion) {
      // Navigate to result with state
      navigate('/result', { state: { answers: newAnswers } });
    } else {
      setAnswers(newAnswers);
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <ProgressBar current={currentQuestionIndex} total={QUESTIONS.length} />
        
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <AnswerButton 
                key={option.id} 
                onClick={() => handleAnswer(option.type)}
              >
                {option.text}
              </AnswerButton>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;