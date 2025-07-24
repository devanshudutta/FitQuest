import React from 'react';
import Navbar from '../components/Navbar';
import block from '../assets/purple_solid1.jpg';
import { Link } from 'react-router-dom';
import zap from '../assets/bolt_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import level from '../assets/level.svg'
import health from '../assets/health.svg';
import target from '../assets/target.svg';
import achievement from '../assets/achhievements.svg';
import swords from '../assets/swords.svg';
import progress from '../assets/progress.svg';
import fitness from '../assets/fitness.svg';
import controller from '../assets/controller.svg';
import Faqs from '../components/Faqs';
import trophy from '../assets/trophy.svg';
import Footer from '../components/Footer';

const BLOCK_COUNT = 20;

function getRandomPosition(index: number) {
  const top = Math.random() * 500 + 100; // start a bit lower than the heading
  const left = Math.random() * window.innerWidth;
  const rotation = Math.random() * 360;
  return { top, left, rotation, delay: index * 100 };
}

function LandingPage() {
  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />

      {/* Hero Text */}
      <div className='mx-auto px-4 py-16 text-center space-y-8'>
     
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-purple-700 px-4 py-2 border-2 border-purple-700 w-[195px] mx-auto text-[12px] font-bold rounded-4xl hover:bg-purple-950">
          🎮 Gamified Habit Tracking
        </p>
          <h1 className="text-5xl md:text-7xl font-bold bg-purple-700 bg-clip-text text-transparent animate-glow">
            Level Up Your Life
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            Transform your daily habits into an epic quest. Earn XP, unlock achievements, and become the hero of your own story.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/app">
            <button  className="bg-purple-700 hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg animate-glow text-white rounded-2xl hover:bg-purple-800 transition-all cursor-pointer">
              Start Your Quest
              <img src={zap} alt="Zap Icon" className="inline-block ml-2 w-6 h-6" />
            </button>
          </Link>
          <button  className="border-2 border-purple-700 hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg text-purple-700 rounded-2xl cursor-pointer">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-white text-center py-12 mb-12 mt-2">
  <img src={swords} alt="Swords Icon" className="w-24 h-24 mx-auto hover:brightness-110 transition duration-300" />
  <img src={progress} alt="Progress Icon" className="w-24 h-24 mx-auto hover:brightness-110 transition duration-300" />
  <img src={fitness} alt="Fitness Icon" className="w-24 h-24 mx-auto hover:brightness-110 transition duration-300" />
  <img src={controller} alt="Controller Icon" className="w-24 h-24 mx-auto hover:brightness-110 transition duration-300" />
</div>


        <div id='features' className="bg-black py-20 px-6">
  <h2 className="text-4xl text-center font-bold text-purple-400 mb-2">Why Choose FitQuest?</h2>
  <p className='text-white text-center mb-12'>Experience the perfect blend of productivity and gaming that makes building habits actually fun.</p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-white text-center">
    {/* Feature 1 */}
    <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-purple-500/50 transition-transform transform hover:-translate-y-2">
      <img src={level} alt="Daily XP" className="mx-auto w-16 h-16 mb-4" />
      <p className="text-lg font-medium">Daily XP & Level-Up Progression</p>
    </div>

    {/* Feature 2 */}
    <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-purple-500/50 transition-transform transform hover:-translate-y-2">
      <img src={health} alt="Healthy Habits" className="mx-auto w-16 h-16 mb-4" />
      <p className="text-lg font-medium">Build Healthy Habits with Streaks</p>
    </div>

    {/* Feature 3 */}
    <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-purple-500/50 transition-transform transform hover:-translate-y-2">
      <img src={target} alt="Challenges" className="mx-auto w-16 h-16 mb-4" />
      <p className="text-lg font-medium">Personalized Challenges</p>
    </div>

    {/* Feature 4 */}
    <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-purple-500/50 transition-transform transform hover:-translate-y-2">
      <img src={achievement} alt="Achievements" className="mx-auto w-16 h-16 mb-4 transition duration-300 hover:drop-shadow-[0_0_12px_#6B21A8]" />
      <p className="text-lg font-medium">Unlock Badges & Achievements</p>
    </div>
  </div>
</div>

<Faqs/>

<div className='px-6 py-20 bg-black mx-auto'>
        <div className="max-w-4xl mx-auto border-[0.2px] border-purple-950 rounded-2xl">
          <div className="p-12 text-center space-y-6">
            <div className="text-6xl animate-float">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-purple-700">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
              Join thousands of users who've transformed their lives through gamified habit tracking. Your adventure starts now!
            </p>
            <Link to="/app">
              <button className="border-2 text-purple-600 hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg rounded-[8px] font-bold flex mx-auto hover:bg-purple-950 cursor-pointer">
                Start Free Today  &nbsp;   
                <img src={trophy} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer/>
      

      {/* Purple Blocks */}
      {/* <div className="relative w-full h-screen z-10">
        {[...Array(BLOCK_COUNT)].map((_, i) => {
          const { top, left, rotation } = getRandomPosition(i);
          return (
            <img
              key={i}
              src={block}
              alt="block"
              style={{
                position: 'absolute',
                top,
                left,
                width: '80px',
                height: '80px',
                transform: `rotate(${rotation}deg)`,
                opacity: 0.9,
              }}
              className="rounded-sm shadow-purple-700 shadow-md transition-all duration-300"
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default LandingPage;
