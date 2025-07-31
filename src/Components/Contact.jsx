import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/ISKLogo.png'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-6 font-ebgaramond">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl border-4 border-yellow-400 p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={Logo}
            alt="ISKCON Koteshwor Logo"
            className="h-24 w-auto"
          />
        </div>

        <h1 className="text-4xl font-bold text-center text-yellow-700 mb-6">ISKCON Koteshwor</h1>

        {/* Contact Info */}
        <div className="space-y-4 text-gray-800 text-sm">
          <p>
            <strong>Address:</strong> <br />
            ISKCON Koteshwor Temple <br />
            Koteshwor, Kathmandu, Nepal
          </p>

          <p>
            <strong>Phone:</strong> 9766431748 / 9766431749
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@iskconkoteshwor.org"
              className="text-purple-700 underline hover:text-purple-900"
            >
              info@iskconkoteshwor.org
            </a>
          </p>

          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://iskconnepal.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 underline hover:text-purple-900"
            >
              www.iskconnepal.org
            </a>
          </p>

          <p>
            <strong>Location Map:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/ISKCON+Koteswor/@27.6746404,85.3480974,17z/data=!4m6!3m5!1s0x39eb19879b2ba501:0x7957e8678fd7952c!8m2!3d27.6746404!4d85.3506777!16s%2Fg%2F11v3t4ws6m?entry=tts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 underline hover:text-purple-900"
            >
              View on Google Maps
            </a>
          </p>
        </div>

        {/* Donation Info */}
        <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-300 text-gray-800">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Donation Information</h2>

          <p className="mb-3">
            Kindly support our mission and temple activities by donating:
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Bank Transfer:</strong><br />
              Account Name: ISKCON KOTESWOR<br />
              Bank: Global IME Bank Ltd<br />
              Account Number: 18101010005029<br />
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Stay Connected</h2>
          <div className="flex space-x-6 justify-center text-purple-700 text-lg font-semibold">
            <a
              href="https://www.facebook.com/profile.php?id=100065502859601"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/iskcon_koteswor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900 transition"
            >
              Instagram
            </a>
            {/* Add more social links if available */}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Back
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Contact;
