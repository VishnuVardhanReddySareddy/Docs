import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DocumentListPage from './pages/DocumentListPage';
import DocumentEditorPage from './pages/DocumentEditorPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<DocumentListPage />} />
        <Route path="/docs/:id" element={<DocumentEditorPage />} />
      </Routes>
    </Router>
  );
};

export default App;