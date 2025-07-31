import { Link } from "react-router-dom";
import Logo from '../assets/ISKLogo.png'

export default function Error() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
      <div className="text-center bg-white p-10 rounded-3xl shadow-lg max-w-lg w-full border border-yellow-200">
        {/* Decorative Tilak or Logo (Optional) */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="ISKCON Logo"
            className="h-16 w-16 object-contain"
          />
        </div>

        {/* 404 Heading */}
        <h1 className="text-5xl font-extrabold text-orange-600 drop-shadow mb-2">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-2">O Devotee! The page you're looking for is lost in the material world 🙏</p>
        <p className="text-sm text-gray-600 italic mb-6">But don't worry, return to Krishna Consciousness by going back to the home page.</p>

        {/* Return Home Button */}
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          🏡 Back to Home
        </Link>
      </div>
    </div>
  );
}
