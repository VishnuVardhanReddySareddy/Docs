import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import { SearchIcon } from 'lucide-react'; // Make sure to import SearchIcon

const DocumentListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample documents data
  const allDocuments = [
    { id: '1', title: 'My First Document', lastEdited: '2 hours ago' },
    { id: '2', title: 'Project Ideas', lastEdited: '1 day ago' },
    { id: '3', title: 'Meeting Notes', lastEdited: '3 days ago' },
    { id: '4', title: 'Technical Specifications', lastEdited: '1 week ago' },
    { id: '5', title: 'User Research Findings', lastEdited: '2 weeks ago' },
    { id: '6', title: 'Product Roadmap', lastEdited: '3 weeks ago' },
  ];


  const filteredDocuments = allDocuments.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const showNoResultsMessage = 
    (searchQuery && filteredDocuments.length === 0) || 
    allDocuments.length === 0;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">My Documents</h1>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            className="flex-1 max-w-[500px]"
          />
          
          <Link 
            to="/docs/new" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md 
            font-medium transition-colors whitespace-nowrap"
          >
            + New Document
          </Link>
        </div>
      </div>


      {showNoResultsMessage ? (
        <div className="flex flex-col items-center justify-center py-12">
          <SearchIcon className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">
            {allDocuments.length === 0 ? 
              'You have no documents yet' : 
              `No documents match "${searchQuery}"`
            }
          </h3>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-blue-500 hover:text-blue-700 font-medium"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map(doc => (
            <Link
              key={doc.id}
              to={`/docs/${doc.id}`}
              className="group"
            >
              <div className="relative h-[280px] bg-white border border-gray-200 rounded-md 
                hover:border-blue-300 transition-colors shadow-sm hover:shadow-md">
                <div className="absolute inset-0 p-4 flex flex-col">
                  <div className="border-b border-gray-200 pb-2 mb-2">
                    <h2 className="font-medium text-gray-800 truncate">{doc.title}</h2>
                  </div>
                  
                  <div className="flex-grow bg-gray-50 p-3 rounded">
                    <div className="h-3 bg-gray-200 mb-2 w-full rounded"></div>
                    <div className="h-3 bg-gray-200 mb-2 w-3/4 rounded"></div>
                    <div className="h-3 bg-gray-200 mb-2 w-5/6 rounded"></div>
                    <div className="h-3 bg-gray-200 mb-2 w-2/3 rounded"></div>
                    <div className="h-3 bg-gray-200 mb-1 w-full rounded"></div>
                    <div className="h-3 bg-gray-200 mb-1 w-1/2 rounded"></div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2 flex justify-between items-center">
                    <span>Last edited {doc.lastEdited}</span>
                    <span className="text-blue-500">Docs</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {!searchQuery && (
            <Link 
              to="/docs/new" 
              className="flex items-center justify-center border-2 border-dashed border-gray-300 
              rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors h-[280px]"
            >
              <div className="text-center p-4">
                <div className="mx-auto bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <span className="text-2xl text-blue-500">+</span>
                </div>
                <span className="text-gray-600">New Document</span>
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentListPage;