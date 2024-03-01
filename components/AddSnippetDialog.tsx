"use client";
import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import CodeMirror from "@uiw/react-codemirror";
import { aura } from "@uiw/codemirror-theme-aura";
// import { loadLanguage } from "@uiw/codemirror-extensions-langs";
// import { StreamLanguage } from "@codemirror/language";
import ReactMarkdown from "react-markdown";
import MDEditor from "@uiw/react-md-editor";
// import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
// import { languages } from "@codemirror/language-data";
import MarkdownEditor from "@uiw/react-markdown-editor";

interface DialogProps {
  open: boolean;
  handleOpen: () => void;
}

const AddSnippetDialog = ({ open, handleOpen }: DialogProps) => {
  const [code, setCode] = useState("");
  const [value, setValue] = React.useState(code);
  const [markdown, setMarkdown] = useState<string>("");
  const [addDesc, setAddDesc] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | number>(
    "javascript"
  );
  const options = [
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
    { value: "java", label: "java" },
  ];
  const onChange = React.useCallback(
    (val: React.SetStateAction<string>, viewUpdate: any) => {
      console.log("val:", val);
      setValue(val);
    },
    []
  );

  const handleChange = (value: any) => {
    setSelectedOption(value);
  };

  // const handleChange = (e) => {
  //   setMarkdown(e.target.value);
  // };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <div className="flex p-5">
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none p-5 h-auto"
      >
        <form
          onSubmit={handleSubmit}
          className="flex p-5 flex-col bg-white rounded-md"
        >
          <h3 className="px-5">Add Snippet</h3>
          <div className="flex items-center p-5 w-full">
            <div className="flex w-1/2">
              <input
                type="text"
                placeholder="Title"
                className="flex p-2 w-full border border-grey rounded-md outline-none"
              />
            </div>
            <div className="flex w-40">
              <select
                value={selectedOption}
                onChange={(e) => e.target.value}
                className="block w-full px-4 py-3 ml-8 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex">
              <button
                onClick={() => setAddDesc((prev) => !prev)}
                className="flex w-40 items-center justify-center ml-8 p-2 rounded-md text-meta-4 border border-grey"
              >
                Add Description
              </button>
            </div>
          </div>
          {addDesc && (
            <div className="p-5">
              <MarkdownEditor
                value={markdown}
                className="h-35"
                onChange={(value, viewUpdate) => {}}
              />
            </div>
          )}
          <div className="flex w-full p-5">
            <CodeMirror
              value={value}
              className="w-full border border-grey outline-none"
              height="300px"
              // extensions={[StreamLanguage.define(selectedOption)]}
              theme={aura}
              onChange={onChange}
            />
          </div>
          <div className="flex justify-end p-5">
            <button
              onClick={handleOpen}
              className="flex w-32 items-center justify-center p-2 rounded-md text-meta-4 border border-grey"
            >
              Discard
            </button>
            <button className="flex w-32 ml-8 items-center justify-center p-2 bg-meta-4 rounded-md text-whiten">
              Save Snippet
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AddSnippetDialog;
