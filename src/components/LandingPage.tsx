import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authView, setAuthView] = useState<'options' | 'login' | 'signup'>('options');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" width={36} height={36} />
          <span className="ml-2 text-2xl font-medium text-gray-700">Docs</span>
        </div>
        <button 
          onClick={() => setShowAuthModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Sign In
        </button>
      </header>


      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-light text-gray-800 mb-6">
          Create and edit documents online
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Free web-based word processor that allows you to create and edit documents 
          online while collaborating with other users in real-time.
        </p>
        <button 
          onClick={() => navigate('/docs/new')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Real-time Collaboration</h3>
              <p className="text-gray-600">
                Work together in the same document simultaneously with others.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Access Anywhere</h3>
              <p className="text-gray-600">
                Your documents are stored in the cloud and available from any device.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Version History</h3>
              <p className="text-gray-600">
                Track changes and revert to any previous version of your document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
        Google Docs clone © {new Date().getFullYear()}
      </footer>

      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            {authView === 'options' ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Sign in to Docs</h2>
                  <button 
                    onClick={() => setShowAuthModal(false)} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col space-y-3">
                    <GoogleLogin
                      onSuccess={() => {
                        console.log('Google login success');
                        setShowAuthModal(false);
                      }}
                      onError={() => console.log('Google login failed')}
                    />
                    
                    <button 
                      onClick={() => console.log('GitHub login clicked')}
                      className="flex items-center justify-center space-x-2 bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
                    >
                      <FaGithub />
                      <span>Continue with GitHub</span>
                    </button>
                    
                    <button 
                      onClick={() => setAuthView('login')}
                      className="flex items-center justify-center space-x-2 border border-gray-300 p-2 rounded hover:bg-gray-50"
                    >
                      <FaEnvelope />
                      <span>Continue with Email</span>
                    </button>
                  </div>
                </div>
              </>
            ) : authView === 'login' ? (
              <>
                <div className="flex items-center mb-4">
                  <button 
                    onClick={() => setAuthView('options')}
                    className="text-gray-500 hover:text-gray-700 mr-2"
                  >
                    ←
                  </button>
                  <h2 className="text-2xl font-bold">Sign in with Email</h2>
                </div>
                
                <form>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    
                    <button
                      type="button"
                      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                      Sign In
                    </button>
                    
                    <div className="text-center">
                      <button 
                        type="button"
                        onClick={() => setAuthView('signup')}
                        className="text-blue-500 hover:text-blue-700 text-sm"
                      >
                        Don't have an account? Sign up
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className="flex items-center mb-4">
                  <button 
                    onClick={() => setAuthView('options')}
                    className="text-gray-500 hover:text-gray-700 mr-2"
                  >
                    ←
                  </button>
                  <h2 className="text-2xl font-bold">Create an Account</h2>
                </div>
                
                <form>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="signup-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        id="signup-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    
                    <button
                      type="button"
                      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                      Sign Up
                    </button>
                    
                    <div className="text-center">
                      <button 
                        type="button"
                        onClick={() => setAuthView('login')}
                        className="text-blue-500 hover:text-blue-700 text-sm"
                      >
                        Already have an account? Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;