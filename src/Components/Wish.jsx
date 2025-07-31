import React from "react";
import { Link } from "react-router-dom";
import Prabhupada from "../assets/Prabhupada.mp3";

function Wish() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-6 font-serif relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-orange-200 opacity-20 animate-pulse">🕉️</div>
        <div className="absolute top-20 right-20 text-4xl text-blue-200 opacity-30 animate-bounce">🪷</div>
        <div className="absolute bottom-20 left-20 text-5xl text-yellow-200 opacity-25 animate-pulse">✨</div>
        <div className="absolute bottom-10 right-10 text-3xl text-pink-200 opacity-20 animate-bounce">🌺</div>
      </div>

      {/* Main Card */}
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border-4 border-yellow-400 relative overflow-hidden text-gray-800">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 rounded-3xl blur-xl opacity-25 animate-pulse"></div>

        <div className="relative bg-white rounded-3xl text-center p-8 space-y-6">
          {/* Greeting */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mb-4 drop-shadow-md">
            ✨ Happy Janmashtami! ✨
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Wishing you divine blessings, blissful devotion, and the sweet mercy of
            <span className="text-purple-700 font-semibold"> Lord Sri Krishna</span>.
          </p>

          <p className="text-sm italic text-gray-500 mb-8">"Krishnastu Bhagavan Svayam" — Śrīmad Bhāgavatam 1.3.28</p>

          {/* Srila Prabhupada Image */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full border-2 border-yellow-400 overflow-hidden shadow-md">
              <img
                src="https://prabhupadanugasworldwide.org/wp-content/uploads/2016/04/Prabhupada-laughing-in-a-grassy-field.jpg"
                alt="Srila Prabhupada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Buttons Container */}
          <div className="flex justify-center gap-6">
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🏠 Back to Home
            </Link>
            <Link
              to="/Contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Donation Contact */}
        <div className="bg-yellow-100 border-t border-yellow-300 px-6 py-4 text-center text-sm text-gray-700">
          <h2 className="text-md font-semibold text-orange-700 mb-2">🙏 Wish to Support Janmashtami Seva?</h2>
          <p>📞 Contact: <span className="font-medium">9766431748 / 9766431749</span></p>
          <p>🏦 Bank Donation Details available at the temple.</p>
        </div>
      </div>
    </div>
  );
}

export default Wish;
