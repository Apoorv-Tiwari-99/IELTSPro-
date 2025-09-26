const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white overflow-hidden"> {/* Deeper, more aggressive gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"> {/* Increased vertical padding */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-6 animate-fadeInLeft"> {/* Animation class (assume custom or utility for fade-in) */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-snug"> {/* Larger, punchier text */}
              Achieve Your <span className="text-amber-400 drop-shadow-lg">Dream</span> IELTS Score 🚀
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed max-w-lg">
              Join thousands of successful students who achieved **Band 7+** with our proven teaching methods, 
              expert instructors, and **cutting-edge AI technology**.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-amber-500/50"> {/* High-contrast button */}
                Start Free Trial Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 py-4 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Book a Free Consultation
              </button>
            </div>
            {/* Stats Section with a subtle background and separation */}
            <div className="flex items-center space-x-8 pt-8 p-4 bg-blue-800/30 rounded-xl">
              <div className="text-center transition-transform duration-300 hover:scale-105">
                <div className="text-3xl font-extrabold text-amber-400">98%</div>
                <div className="text-blue-200 text-sm font-medium">Success Rate</div>
              </div>
              <div className="text-center transition-transform duration-300 hover:scale-105">
                <div className="text-3xl font-extrabold text-amber-400">5000+</div>
                <div className="text-blue-200 text-sm font-medium">Students Trained</div>
              </div>
              <div className="text-center transition-transform duration-300 hover:scale-105">
                <div className="text-3xl font-extrabold text-amber-400">4.9/5</div>
                <div className="text-blue-200 text-sm font-medium">Student Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image/Visual Placeholder Column */}
          <div className="relative flex justify-center items-center h-full">
            {/* Large circle graphic placeholder to represent a system/AI */}
            <div className="w-80 h-80 bg-blue-400/10 rounded-full border-4 border-blue-300/50 flex items-center justify-center animate-pulseSlow md:w-96 md:h-96">
                <span className="text-6xl text-white">🧠</span>
            </div>
            {/* Floating band score badge with a subtle movement */}
            <div className="absolute top-10 left-0 bg-amber-500 text-white p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-bounceOnce">
              <div className="text-3xl font-extrabold">Band 7+</div>
              <div className="text-base font-semibold">Guaranteed Result</div>
            </div>
            {/* Small info badge */}
            <div className="absolute bottom-10 right-0 bg-white text-blue-800 p-3 rounded-full shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <span className="font-semibold">AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;