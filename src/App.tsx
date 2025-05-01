import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingPage from './components/LandingPage';
import DocumentListPage from './pages/DocumentListPage';
import DocumentEditorPage from './pages/DocumentEditorPage';



const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="986510645662-btr3t579jc3i971352thh4de6fo5770c.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docs" element={<DocumentListPage />} />
          <Route path="/docs/new" element={<DocumentEditorPage />} />
          <Route path="/docs/:id" element={<DocumentEditorPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;