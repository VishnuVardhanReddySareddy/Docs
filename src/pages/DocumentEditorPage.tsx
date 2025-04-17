import React from 'react';
import { useParams } from 'react-router-dom';

const DocumentEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Document Editor</h1>
      <p className="mb-4">Editing document ID: {id}</p>
      
      <div className="border border-gray-200 rounded-lg p-4 h-96">
        {/* This would be replaced with your actual document editor */}
        <textarea 
          className="w-full h-full p-2 outline-none resize-none" 
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
};

export default DocumentEditorPage;