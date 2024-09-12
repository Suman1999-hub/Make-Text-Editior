import { useState } from "react";
import ReactQuill from "react-quill";

function TestEditor() {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    keyboard: {
      bindings: Keyboard.DEFAULTS,
    },
    history: {
      delay: 1000,
      maxStack: 500,
      userOnly: true,
    },
  };
  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "indent",
    "bold",
    "italic",
    "underline",
    "color",
    "background",
    "align",
    "link",
    "image",
  ];
  return (
    <div className="container">
      <div>
        <h1 style={{ textAlign: "center" }}>Text Editor</h1>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        className="editor"
      />
    </div>
  );
}

export default TestEditor;
