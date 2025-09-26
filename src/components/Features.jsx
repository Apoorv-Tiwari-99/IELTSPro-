const Features = () => {
  const features = [
    {
      icon: "🎤",
      title: "AI Speaking Practice",
      description: "Real-time speaking assessments with AI-powered feedback and personalized improvement suggestions. Boost your fluency and pronunciation instantly.",
      highlight: "AI Feedback"
    },
    {
      icon: "📝",
      title: "Full-Length Mock Tests",
      description: "Full-length simulated tests across all modules (Listening, Reading, Writing, Speaking) with detailed analytics and performance tracking.",
      highlight: "Real Exam Experience"
    },
    {
      icon: "🤖",
      title: "Instant Band Score",
      description: "Get instant and highly accurate band score predictions for your essays and speaking sessions using advanced machine learning algorithms.",
      highlight: "Instant Results"
    },
    {
      icon: "👨‍🏫",
      title: "1-on-1 Expert Tutors",
      description: "Certified IELTS trainers with 10+ years of experience. Get personalized, human-reviewed feedback and proven success strategies.",
      highlight: "Expert Guidance"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Core Offerings</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Why Choose IELTSPro?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our comprehensive approach combines **cutting-edge AI** with **human expertise** to deliver exceptional, measurable results for every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 shadow-xl border-t-4 border-blue-500 hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 transform group" // Enhanced shadow, border, and transform
            >
              <div className="text-5xl mb-4 p-3 bg-blue-100/50 rounded-lg inline-block transition-transform duration-300 group-hover:rotate-6">{feature.icon}</div> {/* Animated icon background */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md"> {/* High-contrast highlight tag */}
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-600/50">
            Explore All Features in Detail ➡️
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;