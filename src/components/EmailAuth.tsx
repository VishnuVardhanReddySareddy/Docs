// components/EmailAuth.tsx
import React, { useState } from 'react';

interface EmailAuthProps {
  onBack: () => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string) => void;
}

const EmailAuth: React.FC<EmailAuthProps> = ({ onBack, onLogin, onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={onBack} className="mb-4 text-blue-500 hover:text-blue-700">
        &larr; Back to all options
      </button>
      
      <h3 className="text-xl font-semibold mb-4">
        {isLogin ? 'Sign in with Email' : 'Create an Account'}
      </h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        
        <button
          onClick={() => isLogin ? onLogin(email, password) : onRegister(email, password)}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
        
        <div className="text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            {isLogin ? 'Need an account? Register' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailAuth;