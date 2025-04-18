import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import RichTextEditor from './RichTextEditor'

const DocumentEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [content, setContent] = useState('<p>Start editing your document...</p>')

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Document Editor</h1>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Save Document
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <input
            type="text"
            placeholder="Document title"
            className="w-full text-2xl font-bold mb-4 p-2 border-b border-gray-200 focus:outline-none focus:border-green-500"
          />
          <RichTextEditor 
            content={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>
    </div>
  )
}

export default DocumentEditorPage