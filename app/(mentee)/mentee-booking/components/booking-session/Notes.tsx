import React from "react";

interface NotesTextareaProps {
  notes: string;
  onChange: (value: string) => void;
}

const NotesTextarea: React.FC<NotesTextareaProps> = ({ notes, onChange }) => (
  <div className="w-full">
    <p className="font-Hanken font-bold text-lg">Add Notes</p>
    <input
      id="notes"
      name="notes"
      className=" p-2 w-full focus:outline-none border border-Neutra30 rounded-md"
      placeholder=".ask questions, share resources"
      value={notes}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default NotesTextarea;
