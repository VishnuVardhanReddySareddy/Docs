import { BsFilePdf } from "react-icons/bs";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DocumentInput } from "./DocumentInput";
import { useEditorStore } from "@/store/use-editor-store";

export const Navbar = () => {
  const { editor } = useEditorStore();

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveJson = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });
    onDownload(blob, `document.json`);
  };

  const onSaveHTML = () => {
    if (!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });
    onDownload(blob, `document.html`);
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });
    onDownload(blob, `document.txt`);
  };

  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link to="/">
          <img src="/logo.svg" alt="logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  File
                </MenubarTrigger>
                <MenubarContent className="print:hidden bg-white border border-gray-200 rounded-md shadow-lg">
                  <MenubarSub>
                    <MenubarSubTrigger className="bg-white hover:bg-gray-100">
                      <FileIcon className="size-4 mr-2" /> Save
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                      <MenubarItem onClick={onSaveJson} className="hover:bg-gray-100">
                        <FileJsonIcon className="size-4 mr-2" />
                        JSON
                      </MenubarItem>
                      <MenubarItem onClick={onSaveHTML} className="hover:bg-gray-100">
                        <GlobeIcon className="size-4 mr-2" />
                        HTML
                      </MenubarItem>
                      <MenubarItem onClick={() => window.print()} className="hover:bg-gray-100">
                        <BsFilePdf className="size-4 mr-2" />
                        PDF
                      </MenubarItem>
                      <MenubarItem onClick={onSaveText} className="hover:bg-gray-100">
                        <FileTextIcon className="size-4 mr-2" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem className="hover:bg-gray-100">
                    <FilePlusIcon className="mr-2 size-4" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator className="bg-gray-200" />
                  <MenubarItem className="hover:bg-gray-100">
                    <FilePenIcon className="mr-2 size-4" />
                    Rename
                  </MenubarItem>
                  <MenubarItem className="hover:bg-gray-100">
                    <TrashIcon className="mr-2 size-4" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator className="bg-gray-200" />
                  <MenubarItem onClick={() => window.print()} className="hover:bg-gray-100">
                    <PrinterIcon className="mr-2 size-4" />
                    Print <MenubarShortcut>&#x2318; + P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>
                <MenubarContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                  <MenubarItem 
                    onClick={() => editor?.chain().focus().undo().run()} 
                    className="hover:bg-gray-100"
                  >
                    <Undo2Icon className="mr-2 size-4" />
                    Undo <MenubarShortcut>&#x2318; + Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem 
                    onClick={() => editor?.chain().focus().redo().run()} 
                    className="hover:bg-gray-100"
                  >
                    <Redo2Icon className="mr-2 size-4" />
                    Redo <MenubarShortcut>&#x2318; + Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>
                <MenubarContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                  <MenubarSub>
                    <MenubarSubTrigger className="hover:bg-gray-100">Table</MenubarSubTrigger>
                    <MenubarSubContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                      <MenubarItem 
                        onClick={() => insertTable({ rows: 1, cols: 1 })} 
                        className="hover:bg-gray-100"
                      >
                        1 x 1
                      </MenubarItem>
                      <MenubarItem 
                        onClick={() => insertTable({ rows: 2, cols: 2 })} 
                        className="hover:bg-gray-100"
                      >
                        2 x 2
                      </MenubarItem>
                      <MenubarItem 
                        onClick={() => insertTable({ rows: 4, cols: 4 })} 
                        className="hover:bg-gray-100"
                      >
                        4 x 4
                      </MenubarItem>
                      <MenubarItem 
                        onClick={() => insertTable({ rows: 4, cols: 6 })} 
                        className="hover:bg-gray-100"
                      >
                        4 x 6
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>
                <MenubarContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                  <MenubarSub>
                    <MenubarSubTrigger className="hover:bg-gray-100">
                      <TextIcon className="size-4 mr-2" />
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                      <MenubarItem 
                        onClick={() => editor?.chain().focus().toggleBold().run()} 
                        className="hover:bg-gray-100"
                      >
                        <BoldIcon className="size-4 mr-2" />
                        Bold
                      </MenubarItem>
                      <MenubarItem 
                        onClick={() => editor?.chain().focus().toggleItalic().run()} 
                        className="hover:bg-gray-100"
                      >
                        <ItalicIcon className="size-4 mr-2" />
                        Italic
                      </MenubarItem>
                      <MenubarItem 
                        onClick={() => editor?.chain().focus().toggleUnderline().run()} 
                        className="hover:bg-gray-100"
                      >
                        <UnderlineIcon className="size-4 mr-2" />
                        Underline
                      </MenubarItem>
                      <MenubarItem 
                        onClick={() => editor?.chain().focus().toggleStrike().run()} 
                        className="hover:bg-gray-100"
                      >
                        <StrikethroughIcon className="size-4 mr-2" />
                        Strikethrough
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem 
                    onClick={() => editor?.chain().focus().unsetAllMarks().run()} 
                    className="hover:bg-gray-100"
                  >
                    <RemoveFormattingIcon className="size-4 mr-2" />
                    Clear formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};