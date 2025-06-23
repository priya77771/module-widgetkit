import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for the site
const mockProfiles = [
  { id: 1, name: 'Sakura', age: 25, city: 'Tokyo', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04', status: 'online' },
  { id: 2, name: 'Li Wei', age: 28, city: 'Shanghai', image: 'https://images.pexels.com/photos/7657856/pexels-photo-7657856.jpeg', status: 'online' },
  { id: 3, name: 'Priya', age: 24, city: 'Mumbai', image: 'https://images.pexels.com/photos/7658227/pexels-photo-7658227.jpeg', status: 'away' },
  { id: 4, name: 'Kim Min-jun', age: 26, city: 'Seoul', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04', status: 'online' },
  { id: 5, name: 'Aisha', age: 23, city: 'Jakarta', image: 'https://images.pexels.com/photos/7657856/pexels-photo-7657856.jpeg', status: 'online' },
  { id: 6, name: 'Hiroshi', age: 29, city: 'Osaka', image: 'https://images.pexels.com/photos/7658227/pexels-photo-7658227.jpeg', status: 'away' }
];

const countries = ['Afghanistan', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'East Timor', 'India', 'Indonesia', 'Japan', 'Kazakhstan', 'Kyrgyzstan', 'Laos', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Pakistan', 'Philippines', 'Singapore', 'South Korea', 'Sri Lanka', 'Tajikistan', 'Thailand', 'Turkmenistan', 'Uzbekistan', 'Vietnam'];

const cities = ['Tokyo', 'Shanghai', 'Mumbai', 'Seoul', 'Jakarta', 'Manila', 'Osaka', 'Bangkok', 'Kuala Lumpur', 'Singapore', 'Hong Kong', 'Taipei', 'Ho Chi Minh City', 'Yangon', 'Phnom Penh', 'Vientiane', 'Dhaka', 'Karachi', 'Lahore', 'Colombo'];

// HomePage Component
export const HomePage = ({ openModal, activeModal }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7657856/pexels-photo-7657856.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 font-cursive">
              Date in Asia
            </h1>
            <p className="text-white text-lg opacity-90">
              A completely free no-nonsense dating site.
            </p>
          </motion.div>
        </header>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <motion.div 
            className="max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Card */}
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 font-cursive">Date in Asia</h2>
                <p className="text-gray-600 text-sm">
                  A completely free no-nonsense<br />dating site.
                </p>
              </div>

              <div className="space-y-4">
                <motion.button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => openModal('signup')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.button>

                <div className="text-center text-sm text-gray-600 my-4">
                  Already have an account?
                </div>

                <motion.button
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-full transition-all duration-300"
                  onClick={() => openModal('signin')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                </motion.button>

                <motion.button
                  className="w-full bg-transparent border border-gray-400 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-full transition-all duration-300"
                  onClick={() => openModal('browse')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Just got here?
                </motion.button>

                <motion.button
                  className="w-full bg-transparent border border-gray-400 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-full transition-all duration-300"
                  onClick={() => openModal('browse')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Take a look
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Content */}
        <motion.div 
          className="p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-white">
            <div className="bg-black bg-opacity-40 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Welcome to our Dating Site!</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                DateInAsia.com is a Dating Site, but you can also meet people just to chat, email, or make new friends. Just an Asian Dating Site. Anyone can join the site regardless of nationality and ethnicity. This site is for people living in Asia (Asians or non-Asians) and people with a special interest for Asian and/or Asian culture.
              </p>
              <p className="text-sm opacity-90 leading-relaxed mt-4">
                Try our site, it's free. We will not charge you to send messages or anything else that. When we say free, we mean completely free.
              </p>
            </div>

            <div className="bg-black bg-opacity-40 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Where are all the Singles in Asia?</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                In our site you can publish a profile, browse or search for other members, and message with the ones you like. That's it. No more, no less. Just chat all you need, isn't it?
              </p>
              <p className="text-sm opacity-90 leading-relaxed mt-4">
                This is a free Asian dating site where ordinary people you meet help yourself. But if you are OK with that fact if you are nice and awesome, then hundreds of thousands of nice and awesome members are waiting to meet YOU :)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="bg-black bg-opacity-60 backdrop-blur-sm p-6 text-white text-center">
          <div className="flex flex-wrap justify-center space-x-4 text-sm mb-4">
            <a href="#" className="hover:text-pink-300 transition-colors">Help</a>
            <a href="#" className="hover:text-pink-300 transition-colors">FAQ</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Contact</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Cookies</a>
            <a href="#" className="hover:text-pink-300 transition-colors">Dating by Top Locations</a>
            <a href="#" className="hover:text-pink-300 transition-colors">MatchBox</a>
            <a href="#" className="hover:text-pink-300 transition-colors">App</a>
          </div>
          <div className="text-sm opacity-75">
            © 2025-2025 & DateInAsia.<br />
            A completely free no-nonsense dating site
          </div>
        </footer>
      </div>
    </div>
  );
};

// SignUp Modal Component
export const SignUpModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    day: '',
    month: '',
    year: '',
    city: '',
    gender: '',
    interestedIn: '',
    agreeTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up form submitted:', formData);
    // Mock successful signup
    alert('Account created successfully! (This is a demo)');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7658227/pexels-photo-7658227.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 font-cursive">Date in Asia</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Month</option>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                    <option key={i} value={i + 1}>{month}</option>
                  ))}
                </select>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Year</option>
                  {Array.from({ length: 50 }, (_, i) => {
                    const year = new Date().getFullYear() - 18 - i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">And I am interested in</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="interestedIn"
                    value="Males"
                    checked={formData.interestedIn === 'Males'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Males
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="interestedIn"
                    value="Females"
                    checked={formData.interestedIn === 'Females'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Females
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="interestedIn"
                    value="Any"
                    checked={formData.interestedIn === 'Any'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Any
                </label>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label className="text-xs text-gray-600">
                By signing up, I affirm that I am at least 18 years old, that I will be nice, and that I accept the Terms of Use and Privacy Policy, including our Cookie Policy.
              </label>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              OK, Sign Up
            </motion.button>
          </form>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// SignIn Modal Component
export const SignInModal = ({ onClose, openSignUp }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in form submitted:', formData);
    // Mock successful signin
    alert('Welcome back! (This is a demo)');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 font-cursive">Date in Asia</h2>
          <p className="text-gray-600 text-sm mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username or Email</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => {
                onClose();
                openSignUp();
              }}
              className="text-pink-500 hover:text-pink-600 font-semibold"
            >
              Sign Up
            </button>
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
};

// Browse Modal Component
export const BrowseModal = ({ onClose }) => {
  const [filters, setFilters] = useState({
    gender: 'all',
    ageMin: '18',
    ageMax: '50',
    location: 'all'
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 font-cursive">Browse Singles</h2>
          <p className="text-gray-600 text-sm mt-2">Discover amazing people in Asia</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                value={filters.gender}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age From</label>
              <select
                name="ageMin"
                value={filters.ageMin}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {Array.from({ length: 50 }, (_, i) => (
                  <option key={i + 18} value={i + 18}>{i + 18}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age To</label>
              <select
                name="ageMax"
                value={filters.ageMax}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {Array.from({ length: 50 }, (_, i) => (
                  <option key={i + 18} value={i + 18}>{i + 18}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {mockProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                  profile.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{profile.name}</h3>
                <p className="text-gray-600 text-sm">{profile.age} years old</p>
                <p className="text-gray-600 text-sm">{profile.city}</p>
                <div className="mt-3 space-y-2">
                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-sm transition-colors">
                    Send Message
                  </button>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-full text-sm transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            Sign Up to See More Profiles
          </motion.button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
};