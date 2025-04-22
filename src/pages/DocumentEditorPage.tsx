import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RichTextEditor from './RichTextEditor';

const DocumentEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState('<p>Start editing your document...</p>');
  const [documentTitle, setDocumentTitle] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with save button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Document Editor</h1>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Save Document
          </button>
        </div>
      </div>

      {/* Document title input */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <input
          type="text"
          placeholder="Document title"
          value={documentTitle}
          onChange={(e) => setDocumentTitle(e.target.value)}
          className="w-full text-2xl font-bold p-2 border-b border-gray-200 focus:outline-none focus:border-green-500 bg-transparent"
        />
      </div>

      {/* Full-width toolbar */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <RichTextEditor.Toolbar />
        </div>
      </div>

      {/* A4 paper container */}
      <div className="flex justify-center py-8">
        <div className="bg-white shadow-lg" style={{ 
          width: '210mm', 
          minHeight: '297mm', 
          padding: '20mm',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <RichTextEditor 
            content={content}
            onChange={(newContent) => setContent(newContent)}
            className="prose max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentEditorPage;