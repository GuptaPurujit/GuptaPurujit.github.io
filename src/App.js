import React, { useState } from 'react';
import cat from './dinank.jpg';
import './App.css';

const WelcomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4 text-center safe-top safe-bottom">
      <h1 className="text-3xl font-bold mb-6 text-pink-700">*Drum Roll Please* 🥁</h1>
      <p className="text-xl mb-8 text-pink-600">Warning: Extreme cuteness and romance ahead! Proceed with caution 😊</p>
      <button
        onClick={() => onNavigate('question')}
        className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-2xl transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-pink-300 animate-pulse"
      >
        Click for Butterflies 🦋
      </button>
    </div>
  );
};

const Question = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-rose-100 p-4 text-center safe-top safe-bottom">
      <div className="pt-12">
        <button
          onClick={() => onNavigate('welcome')}
          className="fixed top-14 left-4 bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-2xl"
        >
          ← Oops, Cold Feet?
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-pink-700 text-center px-4">Roses are red, violets are blue... Will you be my Valentine? I promise I'm not blue 🌹</h1>
        <div className="max-w-md mx-auto px-4">
          <img
            src={cat}
            alt="Cute cat"
            className="rounded-2xl shadow-lg mb-8 mx-auto w-full border-4 border-pink-200"
          />
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => onNavigate('just-yes')}
              className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-2xl transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-pink-300 whitespace-normal min-w-[150px]"
            >
              Yes (Like I Had a Choice 😏)
            </button>
            <button
              onClick={() => onNavigate('hell-yes')} 
              className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-2xl transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-rose-300 whitespace-normal min-w-[150px]"
            >
              YAAAS QUEEN! 👑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const AnswerJustYes = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50 p-4 text-center safe-top safe-bottom">
      <div className="pt-12">
        <button
          onClick={() => onNavigate('question')}
          className="fixed top-14 left-4 bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-2xl animate-pulse"
        >
          ← Still Thinking?
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-pink-700 animate-bounce">
          Houston, We Have a Valentine! 🚀
          <span className="inline-block animate-spin ml-2">🎯</span>
        </h1>
        <div className="relative">
          <img 
            src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
            alt="Dancing hearts gif"
            className="rounded-2xl shadow-lg mb-8 w-64 h-64 object-cover hover:scale-110 transition-transform duration-300 border-4 border-pink-200"
          />
          <div className="absolute -top-4 -right-4 animate-bounce">💘</div>
          <div className="absolute -bottom-4 -left-4 animate-bounce delay-100">💝</div>
        </div>
        <p className="text-xl font-semibold text-pink-600 animate-pulse px-4 py-3 bg-pink-50 rounded-2xl shadow-inner">
          Achievement Unlocked: Valentine Acquired! 🏆
          <br/>
          <span className="block mt-2 text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text">
            Now you're stuck with me... I mean, blessed with me! 😇
          </span>
        </p>
      </div>
    </div>
  );
}

const AnswerHellYes = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-rose-100 p-4 text-center safe-top safe-bottom">
      <div className="pt-12">
        <button
          onClick={() => onNavigate('question')}
          className="fixed top-14 left-4 bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-2xl"
        >
          ← Rewind Time
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-pink-700">Mission Accomplished! 🎯💘</h1>
        <img 
          src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"
          alt="Happy hearts gif"
          className="rounded-2xl shadow-lg mb-8 w-64 h-64 object-cover border-4 border-pink-200"
        />
        <p className="text-lg font-semibold text-pink-600">
          Congratulations! You've just signed up for unlimited cuddles, dad jokes, and heart emojis! 🎉
          <br/>
          <span className="block mt-4 text-2xl font-bold text-pink-700">
            No Returns or Exchanges Accepted! 😘
          </span>
        </p>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNavigate={setCurrentPage} />;
      case 'question':
        return <Question onNavigate={setCurrentPage} />;
      case 'just-yes':
        return <AnswerJustYes onNavigate={setCurrentPage} />;
      case 'hell-yes':
        return <AnswerHellYes onNavigate={setCurrentPage} />;
      default:
        return <WelcomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="safe-area-inset">
      {renderPage()}
    </div>
  );
}

export default App;
