import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">IELTSPro</span>
              <span className="ml-2 text-xs bg-amber-500 text-white px-2 py-1 rounded">Institute</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Success Stories</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Success Stories</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg">
                Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;