import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NoteContext } from "../Context/NoteContext";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;
