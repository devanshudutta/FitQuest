import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-purple-700 sticky top-0 z-50 shadow-md">
      <div className="max-w-[1415px] mx-auto px-4 py-7 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold">FitQuest</div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer hover:underline"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer hover:underline"
          >
            FAQ
          </ScrollLink>

          {/* Sign In / Sign Up Button */}
          <Link to="/auth">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-200 cursor-pointer">
              Sign In / Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
