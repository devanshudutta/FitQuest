import React, { useState } from 'react';
import Footer from '../components/Footer';
import zap from '../assets/zap.svg'

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => setIsSignUp((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
        
        <div className='flex justify-center items-center mt-24'>
            <img className='self-center' src={zap} alt="" />
             <h1 className='text-purple-500 text-6xl font-bold self-center text-center'>FitQuest</h1>
        </div>

       
      {/* Main content takes all available space */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center text-purple-500">
            {isSignUp ? 'Create Your Account' : 'Welcome Back'}
          </h2>

          <form className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block mb-1 text-sm">Username</label>
                <input
                  type="text"
                  placeholder="e.g. fitchamp123"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={toggleMode}
              className="text-purple-400 hover:underline focus:outline-none ml-1"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </main>

      {/* Footer pinned at the bottom */}
      <Footer />
    </div>
  );
}
