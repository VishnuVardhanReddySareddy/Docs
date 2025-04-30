// DocumentEditorPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import DocumentIdPage from './Editor/EditorPage';

const DocumentEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const documentId = id || 'new'; // Fallback to "new" if no ID is provided

  return <DocumentIdPage documentId={documentId} />;
};

export default DocumentEditorPage;
