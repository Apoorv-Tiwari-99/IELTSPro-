const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      score: "Band 8.5",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80", 
      text: "The AI speaking practice was incredible! I improved from Band 6 to Band 8.5 in just 3 months. The personalized feedback made all the difference.",
      course: "Academic IELTS"
    },
    {
      name: "David Martinez",
      score: "Band 9.0",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "Expert tutors and full-length mock tests prepared me perfectly. I achieved my dream Band 9.0 score on the first attempt!",
      course: "General Training"
    },
    {
      name: "Priya Sharma",
      score: "Band 8.0",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "The writing correction service is outstanding. I finally understood where I was going wrong, leading to a massive jump in my score.",
      course: "Academic IELTS"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 opacity-30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hear Our Success Stories 🗣️
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from students who trusted IELTSPro and achieved their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-2xl transition-all duration-300 transform hover:shadow-blue-200/50 hover:-translate-y-2 border-l-4 border-amber-500" // Elevated card style
            >
              <p className="text-gray-700 italic text-lg mb-6 relative">
                <span className="text-4xl text-blue-500 absolute -top-4 -left-3 opacity-30 font-serif">“</span>
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-amber-500/50" // Image ring for style
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xl font-extrabold text-blue-600">{testimonial.score}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm font-medium">{testimonial.course}</span>
                  </div>
                </div>
              </div>
              <div className="flex text-amber-500 mt-4 text-xl">
                {"★".repeat(5)}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-xl p-10 max-w-4xl mx-auto shadow-2xl text-white">
            <h3 className="text-3xl font-extrabold mb-4">
              Ready to Start Your Success Journey?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join our next batch and get personalized guidance from Band 9 certified trainers. Don't wait!
            </p>
            <button className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/50">
              Book Your Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;