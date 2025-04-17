import React from 'react';
import { Link } from 'react-router-dom';

const DocumentListPage: React.FC = () => {
  const documents = [
    { id: '1', title: 'My First Document', lastEdited: '2 hours ago' },
    { id: '2', title: 'Project Ideas', lastEdited: '1 day ago' },
    { id: '3', title: 'Meeting Notes', lastEdited: '3 days ago' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Documents</h1>
        <Link 
          to="/docs/new" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          + New Document
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map(doc => (
          <Link
            key={doc.id}
            to={`/docs/${doc.id}`}
            className="group"
          >
            <div className="relative h-[280px] bg-white border border-gray-200 rounded-md hover:border-green-300 transition-colors shadow-sm hover:shadow-md">
              {/* Paper-like document preview */}
              <div className="absolute inset-0 p-4 flex flex-col">
                {/* Document header */}
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <h2 className="font-medium text-gray-800 truncate">{doc.title}</h2>
                </div>
                
                {/* Document content area */}
                <div className="flex-grow bg-gray-50 p-3 rounded">
                  {/* Simulated text lines with light color */}
                  <div className="h-3 bg-gray-200 mb-2 w-full rounded"></div>
                  <div className="h-3 bg-gray-200 mb-2 w-3/4 rounded"></div>
                  <div className="h-3 bg-gray-200 mb-2 w-5/6 rounded"></div>
                  <div className="h-3 bg-gray-200 mb-2 w-2/3 rounded"></div>
                  <div className="h-3 bg-gray-200 mb-1 w-full rounded"></div>
                  <div className="h-3 bg-gray-200 mb-1 w-1/2 rounded"></div>
                </div>
                
                {/* Document footer */}
                <div className="text-xs text-gray-500 mt-2 flex justify-between items-center">
                  <span>Last edited {doc.lastEdited}</span>
                  <span className="text-green-500">Docs</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        {/* New Document Card */}
        <Link 
          to="/docs/new" 
          className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors h-[280px]"
        >
          <div className="text-center p-4">
            <div className="mx-auto bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <span className="text-2xl text-green-500">+</span>
            </div>
            <span className="text-gray-600">New Document</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DocumentListPage;