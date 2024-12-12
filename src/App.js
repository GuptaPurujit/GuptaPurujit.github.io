// import logo from './logo.svg';
import React, { useState } from 'react';
import cat from './dinank.jpg';
import './App.css';

// Welcome Page
const WelcomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-4 text-center safe-top safe-bottom">
      <h1 className="text-3xl font-bold mb-6 text-pink-800">A Special Invitation...</h1>
      <p className="text-xl mb-8 text-pink-700">Are you ready for something amazing?</p>
      <button
        onClick={() => onNavigate('question')}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-pink-400"
      >
        Begin the Journey
      </button>
    </div>
  );
};

const Question = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-100 p-4 text-center safe-top safe-bottom">
      <div className="pt-12">
        <button
          onClick={() => onNavigate('welcome')}
          className="fixed top-14 left-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
        >
          ← Back
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-pink-800 text-center px-4">A.B.C.D.E.F.G Will You Go Out on a Date With Me? 👉👈</h1>
        <div className="max-w-md mx-auto px-4">
          <img
            src={cat}
            alt="Cute cat"
            className="rounded-lg shadow-lg mb-8 mx-auto w-full"
          />
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => onNavigate('just-yes')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-green-400 whitespace-normal min-w-[150px]"
            >
              Hell Yes! 💖
            </button>
            <button
              onClick={() => onNavigate('hell-yes')} 
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-pink-400 whitespace-normal min-w-[150px]"
            >
              A Thousand Times Yesss! 🥰
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const AnswerJustYes = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 p-4 text-center safe-top safe-bottom">
      <div className="pt-12">
        <button
          onClick={() => onNavigate('question')}
          className="fixed top-14 left-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full animate-pulse"
        >
          ← Back
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-pink-800 animate-bounce">
          Gotchaaaa! 😈 
          <span className="inline-block animate-spin ml-2">🌟</span>
        </h1>
        <div className="relative">
          <img 
            src="https://media.giphy.com/media/lAPS55YrgKZB6gCaYn/giphy.gif?cid=790b76117bil7u3sr81ro34cumw2ozhs0xvmoq6pdum7m1de&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Excited celebration gif"
            className="rounded-lg shadow-lg mb-8 w-64 h-64 object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute -top-4 -right-4 animate-bounce">🎈</div>
          <div className="absolute -bottom-4 -left-4 animate-bounce delay-100">🎈</div>
        </div>
        <p className="text-xl font-semibold text-pink-600 animate-pulse px-4 py-3 bg-pink-50 rounded-xl shadow-inner">
          I knew you would come to this page at the last! Hahahaha 😂!!! 
          <br/>
          <span className="block mt-2 text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            My Cute Little Bubbly Butted Artistic and Super Talented Chef 👩‍🍳❤️
          </span>
        </p>
      </div>
    </div>
  );
}

const AnswerHellYes = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-100 p-4 text-center safe-top safe-bottom">
      <div className="pt-12">
        <button
          onClick={() => onNavigate('question')}
          className="fixed top-14 left-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
        >
          ← Back
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-pink-800">Wohooooo! 🎉💖</h1>
        <img 
          src="https://media.giphy.com/media/vqvmGLZdqxNzCtVlR3/giphy.gif?cid=790b7611ituk3qfpquukvxgrypct3f37bdnqsbzt9olxr1gd&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Excited celebration gif"
          className="rounded-lg shadow-lg mb-8 w-64 h-64 object-cover"
        />
        <p className="text-lg font-semibold text-pink-600">
          I'm so grateful that you are a part of my life and I like you so soo sooo much! 💖
          <br/>
          <span className="block mt-4 text-2xl font-bold text-pink-800">
            My Dinank Forever ✨🌹
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
