import Trash from "../icons/Trash";
import React from "react";
import { db } from "../appwrite/databases";
import { useContext } from "react";
import { NoteContext } from "../Context/NoteContext";

const DeleteButton = ({ noteId }) => {
  const { setNotes } = useContext(NoteContext);
  const handleDelete = async (e) => {
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

export default DeleteButton;
