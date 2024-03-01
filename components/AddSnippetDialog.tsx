"use client";
import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { UnControlled as CodeMirror } from "react-codemirror2";

interface DialogProps {
  open: boolean;
  handleOpen: () => void;
}

const AddSnippetDialog = ({ open, handleOpen }: DialogProps) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <div className="flex p-5">
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none p-5 h-auto"
      >
        <form className="flex p-5 flex-col bg-white rounded-md">
          <h3 className="px-5">Add Snippet</h3>
          <div className="flex flex-col p-5">
            <input
              type="text"
              placeholder="Title"
              className="flex p-2 border border-grey rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col p-5">
            <input
              type="text"
              placeholder="Description"
              className="flex p-2 rounded-md border border-grey outline-none"
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AddSnippetDialog;
