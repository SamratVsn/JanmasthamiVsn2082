import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrabhupadaKirtan from '../assets/Prabhupada.mp3';
import Bigraha from '../assets/Bigraha.jpg'
import QRCode from '../assets/QRCode.jpg';

function Home() {
    const [currentMantra, setCurrentMantra] = useState(0);
    const [isGlowing, setIsGlowing] = useState(false);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const mantras = [
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        "हरे राम हरे राम राम राम हरे हरे",
        "जय श्रीकृष्ण! 🙏"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMantra((prev) => (prev + 1) % mantras.length);
            setIsGlowing(true);
            setTimeout(() => setIsGlowing(false), 1000);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4 relative overflow-hidden font-ebgaramond">
            <div className="fixed bottom-6 right-6 z-50">
                <audio ref={audioRef} src={PrabhupadaKirtan} loop />
                <button
                    onClick={togglePlay}
                    className="bg-orange-600 text-white px-4 py-2 rounded-full shadow-xl hover:bg-orange-700 transition-all text-sm"
                    title="Toggle Prabhupada Kirtan"
                >
                    {isPlaying ? '⏸️ Pause Kirtan' : '▶️ Play Kirtan'}
                </button>
            </div>
            {/* Background Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 text-6xl text-orange-200 opacity-20 animate-pulse">🕉️</div>
                <div className="absolute top-20 right-20 text-4xl text-blue-200 opacity-30 animate-bounce">🪷</div>
                <div className="absolute bottom-20 left-20 text-5xl text-yellow-200 opacity-25 animate-pulse">✨</div>
                <div className="absolute bottom-10 right-10 text-3xl text-pink-200 opacity-20 animate-bounce">🌺</div>
                <div className="absolute top-1/2 left-5 text-4xl text-purple-200 opacity-15 animate-pulse">🔱</div>
                <div className="absolute top-1/3 right-5 text-5xl text-indigo-200 opacity-20 animate-bounce">🙏</div>
            </div>

            {/* Card */}
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border-4 border-yellow-400 relative overflow-hidden text-gray-800">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 rounded-3xl blur-xl opacity-25 animate-pulse"></div>

                <div className="relative bg-white rounded-3xl">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 px-6 pt-6 pb-4 text-white relative">
                        <div className="flex justify-center mb-4">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-300 shadow-xl">
                                <img
                                    src={Bigraha}
                                    alt="Lord Krishna"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-yellow-300 opacity-20 blur-xl animate-ping"></div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-3xl mb-2 font-cinzel">🔱 🪷 श्रीकृष्णाय नमः 🪷</div>
                            <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-1 font-cinzel text-yellow-100">
                                🪷 Śrī Kṛṣṇa Janmāṣṭamī Mahotsava 🪷
                            </h1>
                            <h2 className="text-yellow-200 font-semibold text-lg italic">
                                Appearance Day of Svayam Bhagavān Śrī Kṛṣṇa
                            </h2>
                            <p className="text-yellow-100 text-sm mt-2 italic font-ebgaramond">
                                "कृष्णस्तु भगवान् स्वयम्" — ŚB 1.3.28
                            </p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-6 bg-gradient-to-b from-white via-orange-50 to-yellow-50">
                        {/* Mantra Section */}
                        <div className="text-center bg-yellow-100 p-3 rounded-xl mb-4 border border-yellow-300">
                            <div className={`font-semibold text-lg transition-all duration-1000 ${isGlowing ? 'text-orange-600 scale-105' : 'text-yellow-800'}`}>
                                {mantras[currentMantra]}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-center mb-6">
                            <p className="text-lg text-gray-800 mb-2">
                                With hearts full of devotion, we invite you to join us in celebrating the
                                <span className="text-blue-700 font-bold"> divine advent of Śrī Kṛṣṇa </span> at
                                <span className="text-purple-700 font-bold"> ISKCON Koteshwor</span>.
                            </p>
                            <p className="text-sm italic text-gray-600 mt-2">
                                Sankirtan, Śrī-Kathā, Deep-Daan, Abhiṣeka, and transcendental Mahāprasādam await!
                            </p>
                        </div>


                        {/* Event Details */}
                        <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-300 mb-6 text-sm text-gray-800">
                            <p><strong>📍 Venue:</strong> ISKCON Koteshwor</p>
                            <p><strong>📅 Date (Nepali):</strong> 31 Shrawan 2082, Saturday</p>
                            <p>
                                <strong>📌 Address:</strong>{" "}
                                <a
                                    href="https://www.google.com/maps/place/ISKCON+Koteswor/@27.6746404,85.3480974,17z/data=!4m6!3m5!1s0x39eb19879b2ba501:0x7957e8678fd7952c!8m2!3d27.6746404!4d85.3506777!16s%2Fg%2F11v3t4ws6m?entry=tts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 underline hover:text-blue-900"
                                >
                                    View on Google Maps
                                </a>
                            </p>
                            <p><strong>📞 Contact:</strong> 9766431748 / 9766431749</p>
                        </div>


                        {/* Śāstra References */}
                        <div className="bg-white p-4 rounded-xl border border-yellow-300 mb-6 text-center text-sm text-gray-700 shadow-sm font-ebgaramond">
                            <p className="font-bold text-indigo-800 mb-2">📜 Śāstra Pramāṇa</p>
                            <p className="italic mb-2">“<b>kṛṣṇas tu bhagavān svayam</b>”<br />— Śrīmad Bhāgavatam 1.3.28</p>
                            <p className="italic mb-2">“<b>ahaṁ sarvasya prabhavo</b>”<br />— Bhagavad-gītā 10.8</p>
                            <p className="italic">“<b>mattah parataram nānyat</b>”<br />— Gītā 7.7</p>
                        </div>

                        {/* Srila Prabhupada */}
                        <div className="flex justify-center mb-4">
                            <div className="w-24 h-24 rounded-full border-2 border-yellow-400 overflow-hidden shadow-md">
                                <img
                                    src="https://prabhupadanugasworldwide.org/wp-content/uploads/2016/04/Prabhupada-laughing-in-a-grassy-field.jpg"
                                    alt="Srila Prabhupada"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-600 italic mb-6">
                            Founder-Ācārya: His Divine Grace A.C. Bhaktivedanta Swami Śrīla Prabhupāda
                        </p>

                        {/* CTA Button */}
                        <div className="text-center mb-4">
                            <Link
                                to="/Wish"
                                className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                🙏 Send Janmāṣṭamī Wishes
                            </Link>
                        </div>

                        <div className="mt-10 p-6 bg-yellow-50 rounded-2xl border border-yellow-300 shadow-md text-gray-800 font-ebgaramond">
                            <h2 className="text-2xl font-semibold text-yellow-700 mb-4 flex items-center justify-center gap-2">
                                💛 Donation Information
                            </h2>

                            <p className="mb-3 text-sm text-center">
                                Kindly support our temple and devotional programs by offering your donation:
                            </p>

                            <ul className="list-disc list-inside space-y-4 text-sm px-2">
                                <li>
                                    <strong>Bank Transfer:</strong><br />
                                    Account Name: <span className="text-blue-800">ISKCON KOTESWOR</span><br />
                                    Bank: <span className="text-blue-800">Global IME Bank Ltd</span><br />
                                    Account Number: <span className="text-blue-800">18101010005029</span>
                                </li>

                                <li>
                                    <strong>QR CODE Payment:</strong><br />
                                    <div className="flex justify-center mt-2">
                                        <img
                                            src={QRCode}
                                            alt="QR CODE"
                                            className="w-100 h-100 border border-yellow-400 rounded-md shadow-sm"
                                        />
                                    </div>
                                </li>

                                <li>
                                    <strong>Payment Remarks:</strong><br />
                                    Please mention: <em>"Your Name", "Donation for Janmāṣṭamī"</em><br />
                                    For assistance, feel free to <Link to="/Contact" className="text-blue-700 underline hover:text-blue-900"><strong>Contact Us</strong></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Border */}
                    <div className="h-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 animate-pulse" />
                </div>
            </div>
        </div>
    );
}

export default Home;
