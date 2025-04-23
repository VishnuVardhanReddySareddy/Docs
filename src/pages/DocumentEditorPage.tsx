import React from 'react';
import { useParams } from 'react-router-dom';
import DocumentIdPage from './Editor/EditorPage';

const DocumentEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Create a mock params promise that matches what DocumentIdPage expects
  const params = Promise.resolve({ 
    documentId: id || 'new' // Use the ID from URL or 'new' if creating
  });

  return (
    <DocumentIdPage params={params} />
  );
};

export default DocumentEditorPage;