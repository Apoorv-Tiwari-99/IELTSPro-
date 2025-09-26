const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white border-t border-blue-800"> {/* Darker border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* Increased padding */}
        <div className="grid md:grid-cols-4 gap-12"> {/* Increased gap */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-white">IELTSPro</span>
              <span className="ml-3 text-xs bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">Institute</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transforming IELTS preparation with cutting-edge technology and expert guidance. 
              Join thousands of successful students who achieved their dream scores with us.
            </p>
            <div className="flex space-x-6">
              {/* Social media icons with hover effect */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">{/* ... Facebook Path */}</svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors duration-200 transform hover:scale-110">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">{/* ... Instagram Path */}</svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">{/* ... Twitter Path */}</svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 border-b border-gray-700 pb-2 text-amber-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Courses & Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 border-b border-gray-700 pb-2 text-amber-500">Get In Touch</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">📧 <span className="ml-3 hover:text-white transition-colors cursor-pointer">hello@ieltspro.com</span></li>
              <li className="flex items-center">📞 <span className="ml-3 hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</span></li>
              <li className="flex items-start">📍 <span className="ml-3">123 Education Street, Learning City, L1L 1L1</span></li>
              <li className="flex items-center">🕒 <span className="ml-3">Mon-Sat: 9:00 AM - 6:00 PM (IST)</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 IELTSPro Institute. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;