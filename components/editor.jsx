import React from "react";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import CodeTool from "@editorjs/code";
import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Paragraph from "@editorjs/paragraph";
import Codebox from "@bomdi/codebox";
import AttachesTool from "@editorjs/attaches";
import NestedList from '@editorjs/nested-list';

export default function Editor() {
    const editorRef = useRef(null);
    const [editorData, setEditorData] = useState(null);
    const initEditor = () => {
        const editor = new EditorJS({
          holder: "editorjs",
          tools: {
            embed: Embed,
            header: {
              class: Header,
              inlineToolbar: ["marker", "link"],
              config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3, 4, 5, 6],
                defaultLevel: 2
              },
              shortcut: "CMD+SHIFT+H",
            },
            image: Image,
            code: CodeTool,
            paragraph: {
              class: Paragraph,
              inlineToolbar: true,
            },
            raw: Raw,
            inlineCode: InlineCode,
            list: {
                class: NestedList,
                inlineToolbar: true,
                shortcut: "CMD+SHIFT+L",
            },
            checklist: {
              class: Checklist,
              inlineToolbar: true,
            },
            quote: {
              class: Quote,
              inlineToolbar: true,
              config: {
                quotePlaceholder: "Enter a quote",
                captionPlaceholder: "Quote's author",
              },
              shortcut: "CMD+SHIFT+O",
            },
            warning: Warning,
            marker: {
              class: Marker,
              shortcut: "CMD+SHIFT+M",
            },
            delimiter: Delimiter,
            inlineCode: {
              class: InlineCode,
              shortcut: "CMD+SHIFT+C",
            },
            linkTool: LinkTool,
            codebox: Codebox,
            table: {
              class: Table,
              inlineToolbar: true,
              shortcut: "CMD+ALT+T",
            },
            attaches: {
                class: AttachesTool,
                config: {
                  endpoint: 'http://localhost:8008/uploadFile'
                }
            }
          },
          // autofocus: true,
          placeholder: "Write your story...",
          data: {
            blocks: [
              {
                type: "header",
                data: {
                  text: "New blog post title here....",
                  level: 2,
                },
              },
              {
                type: "paragraph",
                data: {
                  text: "Blog post introduction here....",
                },
              },
              {
                type: "embed",
              },
            ],
          },
          onReady: () => {
            console.log("Editor.js is ready to work!");
            editorRef.current = editor;
          },
          onChange: () => {
            console.log("Content was changed");
          },
          onSave: () => {
            console.log("Content was saved");
          },
        });
    };

    useEffect(() => {
        if(!editorRef.current) {
            initEditor();
        }
    }, []);

    


    return (
      <div>
        <div id="editorjs" />
        <div className="flex justify-center -mt-30 mb-20">
          <button
            type="button"
            onClick={ () => console.log("Saved") }
            className="inline-flex items-center px-12 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    );
}