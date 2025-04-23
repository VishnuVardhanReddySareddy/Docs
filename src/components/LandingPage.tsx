import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
        <img src="/logo.svg" alt="logo" width={36} height={36} />
          <span className="ml-2 text-2xl font-medium text-gray-700">Docs</span>
        </div>
        <button 
      onClick={() => navigate('/docs')}
      className="bg-blue-500 hover:bg-blue-600 blue-white px-4 py-2 rounded-md font-medium transition-colors"
    >
      Go to Docs
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
    </div>
  );
};

export default LandingPage;