"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-red-600/30 rounded-full blur-3xl"
          style={{
            animation:
              "pulse-glow 3s ease-in-out infinite, float-bg 6s ease-in-out infinite",
            boxShadow:
              "0 0 60px rgba(220, 38, 38, 0.4), inset 0 0 60px rgba(239, 68, 68, 0.2)",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
          style={{
            animation:
              "pulse-glow-slow 5s ease-in-out infinite, float-bg-reverse 8s ease-in-out infinite",
            boxShadow:
              "0 0 80px rgba(239, 68, 68, 0.2), inset 0 0 80px rgba(220, 38, 38, 0.1)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-700/20 rounded-full blur-3xl"
          style={{
            animation:
              "pulse-glow-medium 4s ease-in-out infinite, float-bg 7s ease-in-out infinite",
            transform: "translate(-50%, -50%)",
            boxShadow:
              "0 0 70px rgba(185, 28, 28, 0.3), inset 0 0 70px rgba(239, 68, 68, 0.15)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-600/15 rounded-full blur-3xl"
          style={{
            animation:
              "shimmer 4s ease-in-out infinite, float-bg-reverse 6s ease-in-out infinite",
            boxShadow: "0 0 50px rgba(239, 68, 68, 0.25)",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
          style={{
            animation:
              "pulse-glow 4s ease-in-out infinite 1s, float-bg 8s ease-in-out infinite",
            boxShadow: "0 0 60px rgba(185, 28, 28, 0.2)",
          }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-72 h-72 bg-red-600/20 rounded-full blur-3xl"
          style={{
            animation:
              "pulse-glow-slow 6s ease-in-out infinite 0.5s, float-bg-reverse 9s ease-in-out infinite",
            boxShadow: "0 0 70px rgba(220, 38, 38, 0.25)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">Doos</span>
            <span className="text-red-500">Moos</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#features"
              className="relative group hover:text-red-500 transition-colors duration-300"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#specs"
              className="relative group hover:text-red-500 transition-colors duration-300"
            >
              Specs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#buy"
              className="relative group hover:text-red-500 transition-colors duration-300"
            >
              Buy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with semantic HTML */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 px-6"
        role="region"
        aria-label="Hero section"
      >
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center w-full">
          {/* Left Content with enhanced animations */}
          <div className="space-y-6 z-10">
            <div
              className="space-y-3 animate-fade-in"
              style={{ animationDelay: "0s" }}
            >
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Air<span className="text-red-500 animate-text-glow">Bend</span>
              </h1>
              <p
                className="text-xl text-gray-400 animate-slide-right"
                style={{ animationDelay: "0.2s" }}
              >
                Bend The Rules of Sound
              </p>
            </div>
            <p
              className="text-gray-300 text-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Experience premium wireless audio with revolutionary bend
              technology. Designed for those who refuse to compromise on
              quality.
            </p>
            <div
              className="flex gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="relative px-8 py-3 bg-red-600 text-white font-semibold rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="relative z-10">Buy Now</span>
                <div className="absolute inset-0 bg-red-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
              <button className="px-8 py-3 border-2 border-red-500/50 text-white font-semibold rounded-lg hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 hover:scale-105 active:scale-95">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="absolute w-96 h-96 bg-gradient-to-r from-red-600/30 via-red-500/20 to-transparent rounded-full blur-3xl"
                style={{
                  animation: "orbit 8s linear infinite",
                  filter: "drop-shadow(0 0 40px rgba(239, 68, 68, 0.5))",
                }}
              />
              <div
                className="absolute w-80 h-80 bg-gradient-to-l from-red-600/25 via-red-500/15 to-transparent rounded-full blur-3xl"
                style={{
                  animation: "orbit-reverse 10s linear infinite",
                  filter: "drop-shadow(0 0 30px rgba(220, 38, 38, 0.4))",
                }}
              />
              <div
                className="absolute w-72 h-72 bg-gradient-to-b from-red-700/20 to-transparent rounded-full blur-2xl"
                style={{
                  animation: "orbit 12s linear infinite reverse",
                  filter: "drop-shadow(0 0 25px rgba(185, 28, 28, 0.35))",
                }}
              />
            </div>

            <img
              src="/assets/earphone.png"
              alt="DoosMoos AirBend Premium Wireless Earbuds with bend technology"
              className="relative z-10 max-w-md md:max-w-2xl w-full animate-float-enhanced"
              style={{
                filter:
                  "drop-shadow(0 0 50px rgba(239, 68, 68, 0.4)) drop-shadow(0 0 100px rgba(239, 68, 68, 0.2))",
                animation:
                  "float-enhanced 4s ease-in-out infinite, rotate-subtle 8s ease-in-out infinite, scale-pulse 3s ease-in-out infinite, tilt-shift 6s ease-in-out infinite",
              }}
            />

            <div
              className="absolute inset-0 border-2 border-red-500/30 rounded-full"
              style={{
                animation: "pulse-ring 2s ease-out infinite",
                width: "450px",
                height: "450px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow:
                  "0 0 20px rgba(239, 68, 68, 0.4), inset 0 0 20px rgba(239, 68, 68, 0.2)",
              }}
            />
            <div
              className="absolute inset-0 border-2 border-red-500/20 rounded-full"
              style={{
                animation: "pulse-ring 2s ease-out infinite 0.5s",
                width: "550px",
                height: "550px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)",
              }}
            />
            <div
              className="absolute inset-0 border-2 border-red-500/10 rounded-full"
              style={{
                animation: "pulse-ring 2s ease-out infinite 1s",
                width: "650px",
                height: "650px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 10px rgba(185, 28, 28, 0.2)",
              }}
            />
            <div
              className="absolute inset-0 border border-red-500/15 rounded-full"
              style={{
                animation: "pulse-ring 3s ease-out infinite 1.5s",
                width: "750px",
                height: "750px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 8px rgba(239, 68, 68, 0.15)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-24 px-6"
        role="region"
        aria-label="Features section"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Premium <span className="text-red-500">Features</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎵",
                title: "Crystal Clear Sound",
                desc: "HD audio with deep bass and pristine treble for the ultimate listening experience",
              },
              {
                icon: "🔄",
                title: "Bend Technology",
                desc: "Revolutionary flexible design that adapts to your comfort for all-day wear",
              },
              {
                icon: "🔋",
                title: "48H Battery",
                desc: "Extended battery life keeps your music going for days without charging",
              },
              {
                icon: "🌍",
                title: "Global Connectivity",
                desc: "Seamless Bluetooth 5.3 connection across all your devices",
              },
              {
                icon: "🎯",
                title: "Active Noise Cancel",
                desc: "Industry-leading ANC technology blocks out distractions",
              },
              {
                icon: "⚡",
                title: "Fast Charging",
                desc: "15 mins charge = 5 hours of music",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl border border-red-500/20 bg-gradient-to-b from-red-500/10 to-transparent hover:border-red-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-red-600/20 cursor-pointer hover:scale-105"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section
        id="specs"
        className="relative py-24 px-6 border-t border-red-500/20"
        role="region"
        aria-label="Specifications section"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Technical <span className="text-red-500">Specs</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { label: "Driver Size", value: "10mm Dynamic" },
                { label: "Frequency", value: "20Hz - 20kHz" },
                { label: "Impedance", value: "32Ω" },
                { label: "Weight", value: "6.5g per earbud" },
              ].map((spec, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center p-4 bg-red-500/5 rounded-lg hover:bg-red-500/10 transition-all duration-300 hover:translate-x-2">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="font-bold text-red-500 group-hover:translate-x-2 transition-transform">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { label: "Battery Life", value: "48 Hours" },
                { label: "Charging Time", value: "1.5 Hours" },
                { label: "Standby Time", value: "240 Hours" },
                { label: "Water Resistance", value: "IPX5" },
              ].map((spec, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center p-4 bg-red-500/5 rounded-lg hover:bg-red-500/10 transition-all duration-300 hover:translate-x-2">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="font-bold text-red-500 group-hover:translate-x-2 transition-transform">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="buy"
        className="relative py-24 px-6"
        role="region"
        aria-label="Call to action section"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              Ready to{" "}
              <span className="text-red-500 animate-text-glow">Bend</span> the
              Rules?
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of audio enthusiasts experiencing the future of
              sound
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-red-600/50 transform hover:scale-110 transition-all duration-300 animate-pulse-button active:scale-95">
              Order Now
            </button>
            <button className="px-12 py-4 border-2 border-red-500 text-white font-bold text-lg rounded-lg hover:bg-red-500/10 hover:scale-110 transition-all duration-300 active:scale-95">
              View Gallery
            </button>
          </div>
          <p className="text-gray-500">
            Free shipping on orders over $100 • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer with semantic HTML */}
      <footer className="border-t border-red-500/20 py-12 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>
            &copy; 2025 DoosMoos AirBend. All rights reserved. | Premium Audio
            Innovation
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-bg {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, -10px);
          }
        }

        @keyframes float-bg-reverse {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, 15px);
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes scale-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
          to {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
        }

        @keyframes float-enhanced {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.02);
          }
        }

        @keyframes rotate-subtle {
          0% {
            transform: rotateZ(-2deg);
          }
          50% {
            transform: rotateZ(2deg);
          }
          100% {
            transform: rotateZ(-2deg);
          }
        }

        /* Added new tilt-shift animation for product image */
        @keyframes tilt-shift {
          0%,
          100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(-2deg);
          }
          50% {
            transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(120px) rotate(-0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes pulse-glow-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.6;
          }
        }

        @keyframes pulse-glow-medium {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes text-glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(239, 68, 68, 0.5),
              0 0 20px rgba(239, 68, 68, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(239, 68, 68, 0.8),
              0 0 30px rgba(239, 68, 68, 0.5);
          }
        }

        @keyframes pulse-button {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.8);
          }
        }

        .animate-fade-in {
          animation: fadeInScale 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        .animate-pulse-button {
          animation: pulse-button 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
