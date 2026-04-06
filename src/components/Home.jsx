import React from 'react';
import { Play, Volume2, SkipForward, Settings, Maximize, Globe } from 'lucide-react';

const handleClick = (e) => {
  e.preventDefault();
  // your logic here
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* --- Header / Navigation --- */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-indigo-600">learn</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <button 
              onClick={handleClick}
              className="text-blue-500 underline cursor-pointer bg-transparent border-none"
            >Blog</button>
            <button 
              onClick={handleClick}
              className="text-blue-500 underline cursor-pointer bg-transparent border-none"
            >Pricing</button>
            <button 
              onClick={handleClick}
              className="text-blue-500 underline cursor-pointer bg-transparent border-none"
            >About Us</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium">Sign in</button>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
            Join us
          </button>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section className="max-w-6xl mx-auto px-8 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let's start learning</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Welcome to Learn Platform where every day is a day to learn. 
          Dive into the vast ocean of knowledge and empower yourself with 
          the tools for a successful tomorrow. Happy learning!
        </p>

        {/* Video Player Placeholder */}
        <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" 
            alt="Nature Video" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/90 p-4 rounded-full shadow-lg hover:scale-110 transition">
              <Play className="fill-indigo-600 text-indigo-600" size={32} />
            </button>
          </div>
          {/* Custom Video Controls */}
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <Play size={20} />
              <SkipForward size={20} />
              <Volume2 size={20} />
              <span className="text-xs">1:11 / 2:58</span>
            </div>
            <div className="flex items-center gap-4">
              <Settings size={20} />
              <Maximize size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* --- Join Us CTA Section --- */}
      <section className="relative bg-slate-50 py-20 overflow-hidden">
        {/* Abstract shapes from your design */}
        <div className="absolute -left-16 bottom-0 w-64 h-64 bg-indigo-500 rounded-full opacity-80" />
        <div className="absolute -right-8 -top-8 w-32 h-32 border-[12px] border-yellow-400 rounded-full" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">Join us</h3>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Qui ut exercitation officia proident enim non tempor tempor ipsum ex 
            nulla ea adipisicing sit consequat enim elit cupidatat o.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-indigo-700 transition">
            Join us
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white px-8 pt-16 pb-8 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand/Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold text-indigo-600 mb-4">learn</h4>
            <p className="text-sm font-semibold mb-2">Subscribe to our newsletter</p>
            <p className="text-xs text-gray-500 mb-4">For product announcements and exclusive insights</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Input your email" 
                className="bg-gray-100 border-none rounded px-4 py-2 text-sm flex-grow"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium">Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-bold text-sm mb-4">Product</h5>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-4">Resources</h5>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>Blog</li>
              <li>User guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-4">Company</h5>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>About us</li>
              <li>Contacts us</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t text-xs text-gray-400">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Globe size={14} />
            <span>English</span>
          </div>
          <div className="flex gap-6">
            <span>© 2023 Learn, Inc.</span>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;