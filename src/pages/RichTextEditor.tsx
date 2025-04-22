// import { useEditor, EditorContent } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import TextStyle from '@tiptap/extension-text-style'
// import { Color } from '@tiptap/extension-color'
// import { FontFamily } from '@tiptap/extension-font-family'
// import Placeholder from '@tiptap/extension-placeholder'
// import { Heading } from '@tiptap/extension-heading'
// import Underline from '@tiptap/extension-underline'
// import TextAlign from '@tiptap/extension-text-align'

// interface RichTextEditorProps {
//   content?: string
//   onChange?: (content: string) => void
// }

// const RichTextEditor: React.FC<RichTextEditorProps> = ({ content, onChange }) => {
//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({
//         history: false,
//       }),
//       TextStyle,
//       Color,
//       Underline,
//       FontFamily,
//       Heading.configure({
//         levels: [1, 2, 3],
//       }),
//       TextAlign.configure({
//         types: ['heading', 'paragraph'],
//       }),
//       Placeholder.configure({
//         placeholder: 'Start typing here...',
//       }),
//     ],
//     content: content || '',
//     onUpdate: ({ editor }) => {
//       if (onChange) {
//         onChange(editor.getHTML())
//       }
//     },
//   })

//   if (!editor) {
//     return null
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//       <MenuBar editor={editor} />
//       <EditorContent
//         editor={editor}
//         className="min-h-[500px] p-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none"
//       />
//     </div>
//   )
// }

// const MenuBar: React.FC<{ editor: any }> = ({ editor }) => {
//   if (!editor) {
//     return null
//   }

//   return (
//     <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50">
//       {/* Font family */}
//       <select
//         onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
//         value={editor.getAttributes('textStyle').fontFamily || 'Arial'}
//         className="text-xs p-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
//       >
//         <option value="Arial">Arial</option>
//         <option value="Times New Roman">Times New Roman</option>
//         <option value="Courier New">Courier New</option>
//         <option value="Georgia">Georgia</option>
//         <option value="Verdana">Verdana</option>
//       </select>

//       {/* Text color */}
//       <div className="flex items-center gap-1">
//         <input
//           type="color"
//           onInput={(e: any) => editor.chain().focus().setColor(e.target.value).run()}
//           value={editor.getAttributes('textStyle').color || '#000000'}
//           className="w-6 h-6 cursor-pointer"
//           title="Text color"
//         />
//       </div>

//       {/* Formatting buttons */}
//       <button
//         onClick={() => editor.chain().focus().toggleBold().run()}
//         className={`p-1 rounded ${editor.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Bold"
//       >
//         <span className="font-bold">B</span>
//       </button>

//       <button
//         onClick={() => editor.chain().focus().toggleItalic().run()}
//         className={`p-1 rounded ${editor.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Italic"
//       >
//         <span className="italic">I</span>
//       </button>

//       <button
//         onClick={() => editor.chain().focus().toggleUnderline().run()}
//         className={`p-1 rounded ${editor.isActive('underline') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Underline"
//       >
//         <span className="underline">U</span>
//       </button>

//       {/* Heading levels */}
//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//         className={`p-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Heading 1"
//       >
//         H1
//       </button>

//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//         className={`p-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Heading 2"
//       >
//         H2
//       </button>

//       <button
//         onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//         className={`p-1 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Heading 3"
//       >
//         H3
//       </button>

//       {/* Text alignment */}
//       <button
//         onClick={() => editor.chain().focus().setTextAlign('left').run()}
//         className={`p-1 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Align left"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18M3 6h18" />
//         </svg>
//       </button>

//       <button
//         onClick={() => editor.chain().focus().setTextAlign('center').run()}
//         className={`p-1 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Align center"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>

//       <button
//         onClick={() => editor.chain().focus().setTextAlign('right').run()}
//         className={`p-1 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Align right"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18M3 6h18" />
//         </svg>
//       </button>

//       {/* Lists */}
//       <button
//         onClick={() => editor.chain().focus().toggleBulletList().run()}
//         className={`p-1 rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Bullet list"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       <button
//         onClick={() => editor.chain().focus().toggleOrderedList().run()}
//         className={`p-1 rounded ${editor.isActive('orderedList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//         title="Numbered list"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   )
// }

// export default RichTextEditor

//=========================================


import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  UnderlineIcon,
  Redo2Icon,
  Undo2Icon,
  RemoveFormattingIcon,
  ChevronDownIcon,
  HighlighterIcon,
  Link2Icon,
  ImageIcon,
  UploadIcon,
  SearchIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  ListIcon,
  ListOrderedIcon,
  MinusIcon,
  PlusIcon,
  ListCollapseIcon,
  PrinterIcon,
  MessageSquarePlusIcon,
  SpellCheckIcon,
} from 'lucide-react';

// Extensions
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { FontFamily } from '@tiptap/extension-font-family';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import  "../public/RichTextEditor.css"



interface RichTextEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  className?: string;
}

interface RichTextEditorComponent extends React.FC<RichTextEditorProps> {
  Toolbar: React.FC<{ editor?: any }>;
}

const RichTextEditor: RichTextEditorComponent  = ({ content, onChange,className }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Image,
      Underline,
      FontFamily,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5],
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    content: content || '',
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[500px] p-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

// Toolbar Components
const LineHeightButton = ({ editor }: { editor: any }) => {
  const lineHeights = [
    { label: 'Default', value: 'normal' },
    { label: 'Single', value: '1' },
    { label: '1.15', value: '1.15' },
    { label: '1.5', value: '1.5' },
    { label: 'Double', value: '2' },
  ];

  return (
    <div className="dropdown">
      <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
        <ListCollapseIcon className="size-4" />
      </button>
      <div className="dropdown-content p-1 flex flex-col gap-y-1">
        {lineHeights.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => editor.chain().focus().setLineHeight(value).run()}
            className={`flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 ${
              editor?.getAttributes('paragraph').lineHeight === value && 'bg-neutral-200/80'
            }`}
          >
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const FontSizeButton = ({ editor }: { editor: any }) => {
  const currentFontSize = editor?.getAttributes('textStyle').fontSize
    ? editor?.getAttributes('textStyle').fontSize.replace('px', '')
    : '16';

  const [fontSize, setFontSize] = useState(currentFontSize);
  const [inputValue, setInputValue] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(newSize);
      setInputValue(newSize);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = parseInt(fontSize) + 1;
    updateFontSize(newSize.toString());
  };

  const decrement = () => {
    const newSize = parseInt(fontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };

  return (
    <div className="flex items-center gap-x-0.5">
      <button
        onClick={decrement}
        className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
      >
        <MinusIcon className="size-4" />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
        />
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentFontSize);
          }}
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent cursor-text"
        >
          {currentFontSize}
        </button>
      )}
      <button
        onClick={increment}
        className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
};

const ListButton = ({ editor }: { editor: any }) => {
  const lists = [
    {
      label: 'Bullet List',
      icon: ListIcon,
      isActive: () => editor?.isActive('bulletList'),
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: 'Ordered List',
      icon: ListOrderedIcon,
      isActive: () => editor?.isActive('orderedList'),
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ];

  return (
    <div className="dropdown">
      <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
        <ListIcon className="size-4" />
      </button>
      <div className="dropdown-content p-1 flex flex-col gap-y-1">
        {lists.map(({ label, icon: Icon, onClick, isActive }) => (
          <button
            key={label}
            onClick={onClick}
            className={`flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 ${
              isActive() && 'bg-neutral-200/80'
            }`}
          >
            <Icon className="size-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const AlignButton = ({ editor }: { editor: any }) => {
  const alignments = [
    {
      label: 'Align Left',
      value: 'left',
      icon: AlignLeftIcon,
    },
    {
      label: 'Align Center',
      value: 'center',
      icon: AlignCenterIcon,
    },
    {
      label: 'Align Right',
      value: 'right',
      icon: AlignRightIcon,
    },
    {
      label: 'Align Justify',
      value: 'justify',
      icon: AlignJustifyIcon,
    },
  ];

  return (
    <div className="dropdown">
      <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
        <AlignLeftIcon className="size-4" />
      </button>
      <div className="dropdown-content p-1 flex flex-col gap-y-1">
        {alignments.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={`flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 ${
              editor?.isActive({ textAlign: value }) && 'bg-neutral-200/80'
            }`}
          >
            <Icon className="size-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const ImageButton = ({ editor }: { editor: any }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const onChange = (src: string) => {
    editor?.chain().focus().setImage({ src }).run();
  };

  const onUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onChange(imageUrl);
      }
    };

    input.click();
  };

  const handleImageUrlSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl);
      setImageUrl('');
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <div className="dropdown">
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <ImageIcon className="size-4" />
        </button>
        <div className="dropdown-content p-2.5 flex flex-col gap-x-2">
          <button onClick={onUpload} className="cursor-pointer flex items-center">
            <UploadIcon className="size-4 mr-2" />
            Upload
          </button>
          <button onClick={() => setIsDialogOpen(true)} className="cursor-pointer flex items-center">
            <SearchIcon className="size-4 mr-2" />
            Paste image url
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <div className="dialog">
          <div className="dialog-header">
            <h3>Insert image URL</h3>
          </div>
          <input
            type="text"
            placeholder="Insert image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleImageUrlSubmit();
              }
            }}
            className="w-full p-2 border rounded"
          />
          <div className="dialog-footer">
            <button onClick={handleImageUrlSubmit} className="btn-primary">
              Insert
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const LinkButton = ({ editor }: { editor: any }) => {
  const [value, setValue] = useState('');

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange('link').setLink({ href }).run();
    setValue('');
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setValue(editor?.getAttributes('link').href || '')}
        className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
      >
        <Link2Icon className="size-4" />
      </button>
      <div className="dropdown-content p-2.5 flex items-center gap-x-2">
        <input
          type="text"
          placeholder="https://www.example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-1 border rounded"
        />
        <button onClick={() => onChange(value)} className="btn-primary">
          Apply
        </button>
      </div>
    </div>
  );
};

const HighlightColorButton = ({ editor }: { editor: any }) => {
  const value = editor?.getAttributes('highlight').color || '#FFFFFFFF';
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (color: any) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
      >
        <HighlighterIcon className="size-4" />
      </button>
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <SketchPicker color={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

const TextColorButton = ({ editor }: { editor: any }) => {
  const value = editor?.getAttributes('textStyle').color || '#000000';
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (color: any) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
      >
        <span className="text-xs">A</span>
        <div className="h-0.5 w-full" style={{ backgroundColor: value }}></div>
      </button>
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <SketchPicker color={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

const HeadingLevelButton = ({ editor }: { editor: any }) => {
  const headings = [
    { label: 'Normal text', value: 0, fontSize: '16px' },
    { label: 'Heading 1', value: 1, fontSize: '32px' },
    { label: 'Heading 2', value: 2, fontSize: '24px' },
    { label: 'Heading 3', value: 3, fontSize: '20px' },
    { label: 'Heading 4', value: 4, fontSize: '18px' },
    { label: 'Heading 5', value: 5, fontSize: '16px' },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive('heading', { level })) {
        return `Heading ${level}`;
      }
    }
    return 'Normal text';
  };

  return (
    <div className="dropdown">
      <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
        <span className="truncate">{getCurrentHeading()}</span>
        <ChevronDownIcon className="ml-2 size-4 shrink-0" />
      </button>
      <div className="dropdown-content p-1 flex flex-col gap-y-1">
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            style={{ fontSize }}
            className={`flex items-center gap-x-2 px-2 py-1 font-[value] rounded-sm hover:bg-neutral-200/80 ${
              (value === 0 && !editor?.isActive('heading')) ||
              (editor?.isActive('heading', { level: value }) && 'bg-neutral-200/80')
            }`}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor?.chain().focus().toggleHeading({ level: value }).run();
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

const FontFamilyButton = ({ editor }: { editor: any }) => {
  const fonts = [
    { label: 'Arial', value: 'Arial' },
    { label: 'Times New Roman', value: 'Times New Roman' },
    { label: 'Courier New', value: 'Courier New' },
    { label: 'Georgia', value: 'Georgia' },
    { label: 'Verdana', value: 'Verdana' },
  ];

  return (
    <div className="dropdown">
      <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
        <span className="truncate">{editor?.getAttributes('textStyle').fontFamily || 'Arial'}</span>
        <ChevronDownIcon className="ml-2 size-4 shrink-0" />
      </button>
      <div className="dropdown-content p-1 flex flex-col gap-y-1">
        {fonts.map(({ label, value }) => (
          <button
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            key={value}
            className={`flex items-center gap-x-2 px-2 py-1 font-[value] rounded-sm hover:bg-neutral-200/80 ${
              editor?.getAttributes('textStyle').fontFamily === value && 'bg-neutral-200/80'
            }`}
            style={{ fontFamily: value }}
          >
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const ToolbarButtonComponent: React.FC<ToolbarButtonProps> = ({ onClick, isActive, icon: Icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 ${
        isActive && 'bg-neutral-200/80'
      }`}
      title={label}
    >
      <Icon className="size-4" />
    </button>
  );
};

const Toolbar: React.FC<{ editor?: any }> = ({ editor }) => {
  const sections: { label: string; icon: React.ComponentType<{ className?: string }>; onClick: () => void; isActive?: boolean }[][] = [
    [
      {
        label: 'Undo',
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: 'Redo',
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: 'Print',
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: 'Spell Check',
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute('spellcheck');
          editor?.view.dom.setAttribute('spellcheck', current === 'false' ? 'true' : 'false');
        },
      },
    ],
    [
      {
        label: 'Bold',
        icon: BoldIcon,
        isActive: editor?.isActive('bold'),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: 'Italic',
        icon: ItalicIcon,
        isActive: editor?.isActive('italic'),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: 'Underline',
        icon: UnderlineIcon,
        isActive: editor?.isActive('underline'),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: 'Comment',
        icon: MessageSquarePlusIcon,
        onClick: () => editor?.chain().focus().addPendingComment().run(),
        isActive: editor?.isActive('liveblocksCommentMark'),
      },
      {
        label: 'List Todo',
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive('taskList'),
      },
      {
        label: 'Remove Formatting',
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButtonComponent key={item.label} {...item} />
      ))}
      <div className="separator h-6 bg-neutral-300 w-px mx-1" />
      <FontFamilyButton editor={editor} />
      <div className="separator h-6 bg-neutral-300 w-px mx-1" />
      <HeadingLevelButton editor={editor} />
      <div className="separator h-6 bg-neutral-300 w-px mx-1" />
      <FontSizeButton editor={editor} />
      <div className="separator h-6 bg-neutral-300 w-px mx-1" />
      {sections[1].map((item) => (
        <ToolbarButtonComponent key={item.label} {...item} />
      ))}
      <TextColorButton editor={editor} />
      <HighlightColorButton editor={editor} />
      <div className="separator h-6 bg-neutral-300 w-px mx-1" />
      <LinkButton editor={editor} />
      <ImageButton editor={editor} />
      <AlignButton editor={editor} />
      <LineHeightButton editor={editor} />
      <ListButton editor={editor} />
      {sections[2].map((item) => (
        <ToolbarButtonComponent key={item.label} {...item} />
      ))}
    </div>
  );
};

RichTextEditor.Toolbar = Toolbar;

export default RichTextEditor;