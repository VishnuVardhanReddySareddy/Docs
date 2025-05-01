// components/AuthModal.tsx
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailLogin: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onEmailLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Sign in to Docs</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col space-y-3">
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                // Handle Google auth
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              useOneTap
            />
            
            <button className="flex items-center justify-center space-x-2 bg-gray-800 text-white p-2 rounded hover:bg-gray-700">
              <FaGithub />
              <span>Continue with GitHub</span>
            </button>
            
            <button 
              onClick={onEmailLogin}
              className="flex items-center justify-center space-x-2 border border-gray-300 p-2 rounded hover:bg-gray-50"
            >
              <FaEnvelope />
              <span>Continue with Email</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;